import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize Theme and Scroll listener
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || 
                  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
        ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-4 border-b border-gray-100 dark:border-gray-800 shadow-sm" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo - Minimalist approach */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg group-hover:rotate-6 transition-transform">
            A
          </div>
          <span className="font-bold text-gray-900 dark:text-white tracking-tight">
            Arun <span className="text-indigo-600">Shivhare</span>
          </span>
        </motion.div>

        {/* Right Side (Links + Toggle) */}
        <div className="flex items-center gap-10">

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-bold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle with Animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-indigo-600 transition-all shadow-sm overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? "dark" : "light"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
