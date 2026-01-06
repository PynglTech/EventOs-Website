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
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: '#0F172A',
                secondary: '#334155',
                brand: {
                    cyan: '#06b6d4',
                    blue: '#3b82f6',
                    purple: '#d946ef',
                    dark: '#0f172a'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(to right, #06b6d4, #3b82f6, #d946ef)',
                'brand-gradient-hover': 'linear-gradient(to right, #0891b2, #2563eb, #c026d3)',
            },
        },
    },
    plugins: [],
} satisfies Config;
