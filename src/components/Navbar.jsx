import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        setDarkMode(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    return (
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <HiOutlineCode className="text-indigo-600 text-xl" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                        Arun Shivhare
                    </span>
                </div>

                {/* Links */}
                <ul className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 font-medium">
                    <li><a href="#about" className="hover:text-gray-900 dark:hover:text-white transition">About</a></li>
                    <li><a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition">Work</a></li>
                    <li><a href="#achievements" className="hover:text-gray-900 dark:hover:text-white transition">Achievements</a></li>
                    <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition">Contact</a></li>
                    <li className="text-lg">
                        {/* Dark Mode Button */}
                        <button
                            onClick={toggleDarkMode}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            {darkMode ? <FiSun /> : <FiMoon />}
                        </button>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;