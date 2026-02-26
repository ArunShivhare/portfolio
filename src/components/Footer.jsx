import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition duration-300"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Arun Shivhare. All right reserved.
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-6">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition"
          >
            Back to Top <HiArrowUp />
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;