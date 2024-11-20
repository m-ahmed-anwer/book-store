"use client";

import { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Set theme based on saved preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (prefersDarkMode ? "dark" : "light");
    setTheme(initialTheme);
    document.body.classList.toggle("dark", initialTheme === "dark");

    // Listener for system preference changes
    const themeListener = (e) => {
      const systemTheme = e.matches ? "dark" : "light";
      setTheme(systemTheme);
      document.body.classList.toggle("dark", systemTheme === "dark");
      localStorage.setItem("theme", systemTheme);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", themeListener);

    return () => {
      mediaQuery.removeEventListener("change", themeListener);
    };
  }, []);

  // Toggle theme manually
  const darkModeHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={darkModeHandler}
      className="swap swap-rotate flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300 ease-in-out"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <IoMoonOutline className="text-2xl" />
      ) : (
        <IoSunnyOutline className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
