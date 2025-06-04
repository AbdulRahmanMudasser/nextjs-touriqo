"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const initial = storedTheme || "light";
        setTheme(initial);
        applyTheme(initial);
    }, []);

    const applyTheme = (mode: "light" | "dark") => {
        document.documentElement.classList.toggle("dark", mode === "dark");
        const link = document.getElementById("theme-css") as HTMLLinkElement;
        if (link) {
            link.href = `/themes/${mode}.css`;
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};

const ThemeStatus = () => {
    const { theme, toggleTheme } = useTheme(); // 👈 access the theme context

    return (
        <div>
            <p>Current theme: <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeStatus;
