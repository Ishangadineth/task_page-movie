import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0d0b10",
                foreground: "#ffffff",
                purple: {
                    500: "#9333ea",
                    600: "#7c3aed",
                    900: "#4c1d95",
                },
            },
            borderRadius: {
                "3xl": "1.5rem",
                "4xl": "2.5rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
