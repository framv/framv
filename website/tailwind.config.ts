import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            fontFamily: {
                mono: ["JetBrains Mono", "Monaco", "Consolas", "monospace"],
                sans: ["JetBrains Mono", "Monaco", "Consolas", "monospace"],
            },
            colors: {
                terminal: {
                    black: "#000000",
                    white: "#FFFFFF",
                    gray: {
                        100: "#F5F5F5",
                        200: "#E5E5E5",
                        300: "#D4D4D4",
                        400: "#A3A3A3",
                        500: "#737373",
                        600: "#525252",
                        700: "#404040",
                        800: "#262626",
                        900: "#171717",
                    },
                },
            },
            borderRadius: {
                none: "0",
            },
            animation: {
                "terminal-blink": "blink 1s step-end infinite",
                "scan-line": "scan 8s linear infinite",
            },
            keyframes: {
                blink: {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },
                scan: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
