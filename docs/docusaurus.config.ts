import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Framv",
    tagline: "Freeze HTML elements into video frames with high-performance engines",
    favicon: "img/favicon.ico",

    future: {
        v4: true,
    },

    plugins: [
        [
            "docusaurus-plugin-typedoc",
            {
                entryPoints: ["../packages/core/src/index.ts"],
                tsconfig: "../tsconfig.json",
                out: "api",
                sidebar: {
                    categoryLabel: "API Reference",
                    position: 99,
                },
            },
        ],
    ],

    url: "https://docs.framv.com",
    baseUrl: "/",
    organizationName: "mensreversa",
    projectName: "framv",

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/",
                    editUrl: "https://github.com/mensreversa/framv/tree/main/docs/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/docusaurus-social-card.jpg",
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: "Framv",
            logo: {
                alt: "Framv Logo",
                src: "img/logo.svg",
                href: "https://framv.com",
                target: "_self",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Documentation",
                },
                {
                    href: "https://github.com/mensreversa/framv",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Introduction",
                            to: "/",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/mensreversa/framv",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Mens Reversa",
                            href: "https://mensreversa.com",
                        },
                        {
                            label: "Framv Website",
                            href: "https://framv.com",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} MENS REVERSA SRL. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.vsDark,
            darkTheme: prismThemes.vsDark,
            additionalLanguages: ["bash", "json", "typescript"],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
