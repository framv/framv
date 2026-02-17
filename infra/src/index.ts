import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Configuration
const config = new pulumi.Config();
const domainName = config.get("domainName") || "framv.com";
const subdomains = config.getObject<string[]>("subdomains") || ["docs", "slides"];

// Common Tags
const commonTags = {
    Project: "Framv",
    Environment: pulumi.getStack(),
    ManagedBy: "Pulumi",
};

// ACM Certificate must be in us-east-1 for CloudFront
const providerUsEast1 = new aws.Provider("us-east-1", {
    region: "us-east-1",
});

// Get existing Route53 Zone
const zone = aws.route53.getZoneOutput({ name: domainName });

// Create a single certificate for all domains
const certificate = new aws.acm.Certificate(
    "framv-cert",
    {
        domainName: domainName,
        subjectAlternativeNames: subdomains.map((s) => `${s}.${domainName}`),
        validationMethod: "DNS",
        tags: commonTags,
    },
    { provider: providerUsEast1 }
);

// Certificate Validation Records
const certValidationRecords = certificate.domainValidationOptions.apply((options) =>
    options.map(
        (option) =>
            new aws.route53.Record(`cert-validation-${option.domainName}`, {
                name: option.resourceRecordName,
                type: option.resourceRecordType,
                zoneId: zone.zoneId,
                records: [option.resourceRecordValue],
                ttl: 60,
            })
    )
);

// Certificate Validation
const certValidation = new aws.acm.CertificateValidation(
    "framv-cert-validation",
    {
        certificateArn: certificate.arn,
        validationRecordFqdns: certValidationRecords.apply((records) => records.map((r) => r.fqdn)),
    },
    { provider: providerUsEast1 }
);

// CloudFront Cache Policy: Managed-CachingOptimized
const cachePolicy = aws.cloudfront.getCachePolicyOutput({
    name: "Managed-CachingOptimized",
});

/**
 * Creates an S3 bucket and CloudFront distribution for a static website.
 */
function createStaticWebsite(name: string, fqdn: string, certArn: pulumi.Input<string>) {
    // S3 Bucket for assets
    const bucket = new aws.s3.Bucket(`${name}-bucket`, {
        bucket: fqdn,
        tags: { ...commonTags, Name: fqdn },
    });

    // S3 Bucket Ownership Controls
    new aws.s3.BucketOwnershipControls(`${name}-ownership-controls`, {
        bucket: bucket.id,
        rule: {
            objectOwnership: "BucketOwnerEnforced",
        },
    });

    // S3 Public Access Block
    new aws.s3.BucketPublicAccessBlock(`${name}-public-access-block`, {
        bucket: bucket.id,
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
    });

    // CloudFront Origin Access Control
    const oac = new aws.cloudfront.OriginAccessControl(`${name}-oac`, {
        description: `OAC for ${fqdn}`,
        originAccessControlOriginType: "s3",
        signingBehavior: "always",
        signingProtocol: "sigv4",
    });

    // CloudFront Distribution
    const distribution = new aws.cloudfront.Distribution(`${name}-dist`, {
        enabled: true,
        aliases: [fqdn],
        origins: [
            {
                domainName: bucket.bucketRegionalDomainName,
                originId: bucket.arn,
                originAccessControlId: oac.id,
            },
        ],
        defaultRootObject: "index.html",
        defaultCacheBehavior: {
            targetOriginId: bucket.arn,
            viewerProtocolPolicy: "redirect-to-https",
            allowedMethods: ["GET", "HEAD", "OPTIONS"],
            cachedMethods: ["GET", "HEAD"],
            cachePolicyId: cachePolicy.apply((p) => p.id!),
            compress: true,
        },
        customErrorResponses: [
            { errorCode: 404, responseCode: 200, responsePagePath: "/index.html" },
            { errorCode: 403, responseCode: 200, responsePagePath: "/index.html" },
        ],
        restrictions: {
            geoRestriction: { restrictionType: "none" },
        },
        viewerCertificate: {
            acmCertificateArn: certArn,
            sslSupportMethod: "sni-only",
        },
        tags: { ...commonTags, Name: fqdn },
    });

    // Bucket Policy to allow CloudFront OAC
    const policyDocument = aws.iam.getPolicyDocumentOutput({
        statements: [
            {
                sid: "AllowCloudFrontServicePrincipalReadOnly",
                actions: ["s3:GetObject"],
                resources: [pulumi.interpolate`${bucket.arn}/*`],
                principals: [
                    {
                        type: "Service",
                        identifiers: ["cloudfront.amazonaws.com"],
                    },
                ],
                conditions: [
                    {
                        test: "StringEquals",
                        variable: "AWS:SourceArn",
                        values: [distribution.arn],
                    },
                ],
            },
        ],
    });

    new aws.s3.BucketPolicy(`${name}-policy`, {
        bucket: bucket.id,
        policy: policyDocument.json,
    });

    // Route53 Record
    new aws.route53.Record(`${name}-record`, {
        name: fqdn,
        zoneId: zone.zoneId,
        type: "A",
        aliases: [
            {
                name: distribution.domainName,
                zoneId: distribution.hostedZoneId,
                evaluateTargetHealth: true,
            },
        ],
    });

    return {
        url: pulumi.interpolate`https://${fqdn}`,
        distributionId: distribution.id,
    };
}

// Create for framv.com (Apex)
const mainSite = createStaticWebsite("framv", domainName, certValidation.certificateArn);

// Create for docs.framv.com and slides.framv.com
const subdomainsSites = subdomains.map((sub) => ({
    name: sub,
    site: createStaticWebsite(sub, `${sub}.${domainName}`, certValidation.certificateArn),
}));

// Exports
export const endpoints = {
    main: mainSite.url,
    docs: subdomainsSites.find((s) => s.name === "docs")?.site.url,
    slides: subdomainsSites.find((s) => s.name === "slides")?.site.url,
};

export const metadata = {
    domain: domainName,
    stack: pulumi.getStack(),
    region: aws.config.region,
};
