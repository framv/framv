# Framv Infrastructure

Pulumi infrastructure for `framv.com`, `docs.framv.com`, and `slides.framv.com`.

## Overview

This project manages the AWS infrastructure for the Framv project, including:

- **S3 Buckets**: Static website hosting for the main site, documentation, and presentation slides.
- **CloudFront Distributions**: Global CDN with HTTPS support and SPA routing.
- **ACM Certificates**: Managed SSL/TLS certificates with DNS validation via Route53.
- **Route53 DNS**: Automatic alias records for all domains.

## Prerequisites

- [Pulumi CLI](https://www.pulumi.com/docs/get-started/install/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) configured with appropriate credentials.
- A Route53 Hosted Zone for `framv.com` must already exist.
- An S3 bucket for Pulumi state (e.g., `framv-pulumi-state` or shared `supaquant-pulumi-state`).

## Getting Started

1. **Setup State Backend**:
   Create a bucket in your AWS account to host the Pulumi state and log in:

   ```bash
   aws s3 mb s3://framv-pulumi-state
   pulumi login s3://framv-pulumi-state
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Initialize or select a stack**:

   ```bash
   # Set a passphrase for secrets encryption
   export PULUMI_CONFIG_PASSPHRASE="your-safe-passphrase"
   pulumi stack init dev
   ```

4. **Configure AWS region**:

   ```bash
   pulumi config set aws:region eu-west-1
   ```

5. **Deploy**:
   ```bash
   pulumi up
   ```

## GitHub Actions Secret Setup

To make the automated deployment work with the S3 backend, add these secrets to GitHub:

- `PULUMI_BACKEND_URL`: Set to `s3://framv-pulumi-state` (or update in `deploy.yml`).
- `PULUMI_CONFIG_PASSPHRASE`: The passphrase used during `stack init`.
- `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY`.

## Project Structure

- `src/index.ts`: Main Pulumi entry point defining all resources.
- `Pulumi.yaml`: Project metadata.
- `Pulumi.dev.yaml`: Stack-specific configuration.
- `package.json`: Dependencies and main entry point definition.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
