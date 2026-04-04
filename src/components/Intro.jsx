import React from "react";
import { motion } from "framer-motion"; // Add this
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "./Typewriter";
import InteractiveNetwork from "./InteractiveNetwork";

const Intro = () => {
  // Simple fade-up animation for text blocks
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-gray-950 transition-colors duration-500 pt-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.15 }} // Animates children one after another
          >
            <motion.h1 
              {...fadeInUp}
              className="flex flex-col text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-500"
            >
              <span>Hi I'm</span>
              <span className="text-indigo-600">Arun Shivhare</span>
            </motion.h1>

            <motion.div {...fadeInUp}>
              <Typewriter />
            </motion.div>

            <motion.p 
              {...fadeInUp}
              className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
            >
              I build{" "}
              <span className="text-indigo-600 font-medium">scalable</span> and
              <span className="text-indigo-600 font-medium"> user-focused</span>{" "}
              web applications. Passionate about solving real-world problems
              using clean and efficient code.
            </motion.p>

            <motion.p 
              {...fadeInUp}
              className="mt-4 inline-block text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full dark:bg-green-900/30 dark:text-green-400"
            >
              Open to Internships and Full-Time Opportunities
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeInUp} className="mt-10 flex gap-5">
              <a href="#projects" className="px-7 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:bg-indigo-700 transition">
                Explore Work
              </a>
              <a href="/resume.pdf" download className="px-7 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div {...fadeInUp} className="mt-8 flex gap-5">
              {[
                { icon: <FaGithub />, href: "https://github.com/ArunShivhare" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/arun-shivhare" },
                { icon: <SiLeetcode />, href: "https://leetcode.com/u/Arun_Shivhare_/" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-600 hover:text-indigo-600 hover:scale-110 transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION (Visuals) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center h-150 w-full rounded-3xl"
          >
            <div className="absolute inset-0">
              <InteractiveNetwork />
            </div>

            {/* Spinning Frames */}
            <div className="absolute w-80 h-80 rounded-3xl border border-indigo-200 dark:border-indigo-600 fan-spin"></div>
            <div
              className="absolute w-80 h-80 rounded-3xl border border-indigo-300 dark:border-indigo-700 fan-spin"
              style={{ animationDirection: "reverse", animationDuration: "12s" }}
            ></div>

            {/* Image Container with a gentle "Float" animation */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-80 h-80 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 border-4 border-white/10 backdrop-blur-sm"
            >
              <img
                src="/profile.png"
                alt="Arun Shivhare"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
