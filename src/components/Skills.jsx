import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaBrain } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      items: ["C", "C++", "Java (Basic)", "Python"],
    },
    {
      title: "Web Technologies",
      icon: <FaLaptopCode />,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Core CS Subjects",
      icon: <FaDatabase />,
      items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      items: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Atlas", "MySQL", "Render", "Vercel"],
    },
    {
      title: "Other Skills",
      icon: <FaBrain />,
      items: ["Competitive Programming", "Debugging", "Problem Solving", "Leadership", "Communication"],
    },
  ];

  // Animation Config
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-32 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Classy Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-indigo-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4"
            >
              Expertise
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Skills & <span className="text-indigo-600/80">Technologies.</span>
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-gray-500 dark:text-gray-400 text-lg max-w-sm border-l-2 border-indigo-600 pl-6"
          >
            Bridging the gap between complex logic and elegant user interfaces.
          </motion.p>
        </div>

        {/* Professional Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVars} className="group">
              {/* Category Title & Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills List - Clean Typography style */}
              <div className="flex flex-wrap gap-x-3 gap-y-3">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-[15px] font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default">
                      {skill}
                    </span>
                    {i !== category.items.length - 1 && (
                      <span className="ml-3 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Subtle hover line effect */}
              <div className="mt-6 h-px w-full bg-gray-100 dark:bg-gray-800 group-hover:bg-indigo-600/30 transition-colors" />
            </motion.div>
          ))}
          <motion.div
  variants={itemVars}
  className="group flex items-center justify-center"
>
  <div className="
    w-full h-full min-h-40
    flex flex-col items-center justify-center text-center
    rounded-2xl 
    border border-dashed border-indigo-200 dark:border-gray-700
    bg-linear-to-br from-indigo-50/40 to-transparent 
    dark:from-indigo-900/10
    p-6
  ">
    <div className="text-3xl mb-3">⚡</div>

    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
      Always Improving
    </h3>

    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
      Continuously learning new technologies, improving problem-solving, and building impactful systems.
    </p>
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
