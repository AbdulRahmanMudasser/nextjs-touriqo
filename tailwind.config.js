// tailwind.config.ts
export default {
    darkMode: "class", // required
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./context/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-bg)",
                foreground: "var(--color-text)",
            },
        },
    },
    plugins: [],
};
