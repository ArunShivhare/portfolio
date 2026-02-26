import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";

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
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Core CS Subjects",
      icon: <FaDatabase />,
      items: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "MongoDB Atlas",
        "MySQL (Basic)",
        "Render",
        "Vercel",
      ],
    },
    {
      title: "Other Skills",
      icon: <FaBrain />,
      items: [
        "Competitive Programming",
        "Debugging",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Skills & <span className="text-indigo-600">Technologies</span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A strong foundation across programming, system fundamentals and
            full-stack development tools.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl text-indigo-600 text-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-800/40 hover:text-indigo-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;