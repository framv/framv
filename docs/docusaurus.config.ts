import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Framv",
    tagline: "Freeze HTML elements into video frames",
    url: "https://framv.com",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "mensreversa",
    projectName: "framv",

    future: {
        v4: true,
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
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
                            to: "/docs/intro",
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
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Mens Reversa Srl. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.vsDark,
            darkTheme: prismThemes.vsDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
