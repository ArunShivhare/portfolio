import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Chai & Fund",
      description:
        "A crowdfunding platform for creators.",
      tech: ["Next.js", "React", "Node", "NextAuth", "MongoDB Atlas", "Tailwind CSS", "Toastify"],
      image: "/projects/chaifund.png",
      github: "https://github.com/ArunShivhare/Chai_and_Fund.git",
      live: "https://chai-and-fund.vercel.app/",
    },
    {
      title: "PassMan",
      description:
        "Securely manage your passwords in one place",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind CSS", "React Router", "Toastify"],
      image: "/projects/passman.png",
      github: "https://github.com/ArunShivhare/PassMan.git",
      live: "https://pass-man-one.vercel.app/",
    },
    {
      title: "Nexus",
      description:
        "Personal Team Management Web Application ",
      tech: ["React", "Node", "Express", "MongoDB", "TailWind CSS", "Context & Fetch API", "JWT", "PostMan"],
      image: "/projects/tms.png",
      github: "https://github.com/ArunShivhare/Team-Management-System.git",
      live: "https://github.com/ArunShivhare/Team-Management-System.git",
    },
    {
      title: "TaskiFy",
      description:
        "Plan smart. Execute better.",
      tech: ["React", "Tailwind CSS", "React-Icons"],
      image: "/projects/taskify.png",
      github: "https://github.com/ArunShivhare/Taskify.git",
      live: "https://taskify-sepia-psi.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio showcasing projects and achievements.",
      tech: ["React", "Tailwind CSS", "React-Icons"],
      image: "/projects/portfolio.png",
      github: "https://github.com/ArunShivhare/portfolio.git",
      live: "https://github.com/ArunShivhare/portfolio.git",
    },
    {
      title: "X homepage Layout",
      description:
        "Replicate X homepage layout ",
      tech: ["React", "Tailwind CSS"],
      image: "/projects/xhl.png",
      github: "https://github.com/ArunShivhare/X-homepage-clone.git",
      live: "https://github.com/ArunShivhare/X-homepage-clone.git",
    },
    {
      title: "Personal Music Player",
      description:
        "Build a responsive personal music player",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/projects/pmp.png",
      github: "https://github.com/ArunShivhare/Personal-Music-Player.git",
      live: "https://github.com/ArunShivhare/Personal-Music-Player.git",
    },
    {
      title: "Netflix Homepage Clone",
      description:
        "Replicate netflix homepage and make it responsive",
      tech: ["HTML", "CSS"],
      image: "/projects/nhc.png",
      github: "https://github.com/ArunShivhare/netflix-homepage-clone.git",
      live: "https://github.com/ArunShivhare/netflix-homepage-clone.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-350 mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Recent <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing modern development practices
            and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
                  >
                    <FaExternalLinkAlt size={14} /> Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-white text-white rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-white dark:bg-gray-800 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;