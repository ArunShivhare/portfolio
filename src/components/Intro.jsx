import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Intro = () => {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-gray-950 transition-colors duration-500 pt-28">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h1 className="flex flex-col text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-500">
              <span>Hi I'm</span>
              <span className="text-indigo-600">Arun Shivhare</span>
            </h1>

            <p className="text-lg mt-5 font-medium text-indigo-600 uppercase tracking-wider">
              Full Stack Developer
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 transition-colors duration-500">
              Crafting scalable and impactful web experiences.
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-5">
              <a
                href="#projects"
                className="px-7 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:bg-indigo-700 transition"
              >
                Explore Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-7 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-5">
              <a
                href="https://github.com/ArunShivhare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/arun-shivhare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/Arun_Shivhare_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition duration-300"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">

            {/* Animated Orbit Background */}
            {/* <div className="absolute w-80 h-80 rounded-full border border-indigo-300 dark:border-indigo-500 opacity-40 orbit-animation"></div> */}

            {/* Rotated Frame 1 */}
            <div className="absolute w-80 h-80 rounded-3xl border border-indigo-200 dark:border-indigo-600 rotate-6 orbit-animation"></div>

            {/* Rotated Frame 2 */}
            {/* <div className="absolute w-80 h-80 rounded-3xl border border-indigo-300 dark:border-indigo-700 -rotate-6 orbit-animation"></div> */}

            {/* Main Image */}
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900">
              <img
                src="/profile.png"
                alt="Arun Shivhare"
                className="w-full h-87.5 object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;