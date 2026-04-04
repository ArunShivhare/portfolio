import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for reusability
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Delays each paragraph slightly
    },
  };

  return (
    <section
      id="about"
      className="py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE - Reveal from Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Passionate about building 
              <span className="text-indigo-600"> impactful </span>
              digital products.
            </h2>
            
            {/* Subtle animated underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-indigo-600 mt-6 rounded-full"
            />
          </motion.div>

          {/* RIGHT SIDE CONTENT - Staggered Fade In */}
          <motion.div 
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
          >
            <motion.p variants={fadeInVariant}>
              I'm <span className="text-indigo-600 font-semibold">Arun</span>, a Computer Science Engineering student focused on
              creating modern, scalable and user-centric web applications.
              I enjoy turning complex problems into clean and efficient solutions.
            </motion.p>

            <motion.p variants={fadeInVariant}>
              My core interests lie in <span className="text-gray-900 dark:text-white font-medium">Full Stack Development</span>, 
              <span className="text-gray-900 dark:text-white font-medium"> System Design</span>, and 
              <span className="text-gray-900 dark:text-white font-medium"> AI & ML</span>.
              I constantly strive to improve my technical depth and build products
              that solve real-world challenges.
            </motion.p>

            <motion.p variants={fadeInVariant}>
              Beyond coding, I actively work on strengthening problem-solving skills
              through competitive programming and exploring advanced technologies.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
