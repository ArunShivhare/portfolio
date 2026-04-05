import React from "react";
import { FaGithub, FaLinkedin, FaChevronUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand/Name Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              Arun <span className="text-indigo-600">Shivhare</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links - Professional Minimalist */}
          <div className="flex items-center gap-4">
            {[
              { icon: <FaGithub />, href: "https://github.com/ArunShivhare" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/arun-shivhare" },
              { icon: <SiLeetcode />, href: "https://leetcode.com/u/Arun_Shivhare_/" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white border border-gray-100 dark:border-gray-800 transition-all duration-300 shadow-sm"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top - Floating Style */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors"
          >
            Back to Top 
            <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-indigo-600 group-hover:-translate-y-1 transition-all">
              <FaChevronUp size={10} />
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-50 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-400 dark:text-gray-600 uppercase tracking-wider">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[11px] text-gray-400 dark:text-gray-600 uppercase tracking-wider">
              Built with <span className="text-indigo-600/50">React & Framer</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
