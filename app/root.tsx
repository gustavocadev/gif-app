import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import { ThemeContext } from "./context/context";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
    return { title: "New Remix App" };
};
export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();
    useEffect(() => {
        const actualTheme: boolean = JSON.parse(
            localStorage.getItem("dark-theme") ?? "true"
        );
        setIsDarkMode(actualTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("dark-theme", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <html lang="en" className={`${isDarkMode ? "dark" : "light"}`}>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />

                <Meta />
                <Links />
            </head>
            <body className="dark:bg-[#121212] dark:text-gray-200 bg-[#F7F6F3] text-[#2d3436]">
                <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
                    <Outlet />
                </ThemeContext.Provider>

                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
