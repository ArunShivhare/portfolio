import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Chai & Fund",
      description: "A crowdfunding platform for creators.",
      tech: [
        "Next.js",
        "React",
        "Node",
        "NextAuth",
        "MongoDB Atlas",
        "Tailwind CSS",
        "Toastify",
      ],
      image: "/projects/chaifund.png",
      details: {
        overview:
          "A creator-friendly crowdfunding platform where fans support creators by buying them a chai.",

        features: [
          "Direct financial support from fans",
          "Creator dashboards",
          "Authentication system",
          "Community interaction",
        ],

        howItWorks: [
          "Fans discover creators",
          "Support by buying chai",
          "Creators receive funds",
          "Build stronger connections",
        ],
      },
      github: "https://github.com/ArunShivhare/Chai_and_Fund.git",
      live: "https://chai-and-fund.vercel.app/",
    },
        {
      title: "Data Structure Simulator",
      description: "Learn Data Structures Visually & Easily.",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
      ],
      image: "/projects/DSS.png",
      details: {
        overview:
          "Understand how data structures work internally with beautiful animations and step-by-step simulations. No more confusion — just clear concepts.",

        features: [
          "Interactive Visualization",
          "Step-by-Step Simulation",
          "Code Preview",
          "Beginner Friendly",
        ],

        howItWorks: [
          "Watch data structures come to life with smooth animations.",
          "Understand each operation step clearly and intuitively.",
          "View implementations in multiple languages.",
          "Designed for students learning DSA from scratch.",
        ],
      },
      github: "https://github.com/ArunShivhare/DS-Simulator.git",
      live: "https://ds-simulator-iota.vercel.app/",
    },
    {
      title: "Dynamic Workflow Engine",
      description:
        "This project implements a Dynamic Workflow Engine using Payload CMS",
      tech: ["Payload CMS", "TypeScript"],
      image: "/projects/dwe.png",
      details: {
        overview:
          "A dynamic and configurable workflow engine built using Payload CMS that allows users to design, manage, and execute workflows without hardcoding logic.",

        features: [
          "Dynamic workflow creation using CMS",
          "Custom step-based process execution",
          "Flexible schema-driven architecture",
          "Admin dashboard for workflow control",
          "Extensible and scalable design",
        ],

        howItWorks: [
          "Admin defines workflow structure via CMS",
          "Steps and conditions are configured dynamically",
          "Engine processes tasks based on workflow rules",
          "Users interact with workflows in real-time",
          "System updates workflow state automatically",
        ],
      },
      github:
        "https://gitfront.io/r/ArunShivhare/pMJjNSh3A35Y/workFlow-engine/",
      live: "https://work-flow-engine-three.vercel.app/",
    },
    {
      title: "Kerna",
      description: "Where Strategy Meets Spark.",
      tech: ["React", "TailWind CSS"],
      image: "/projects/kerna.png",
      details: {
        overview:
          "A modern and visually appealing landing page focused on clean UI, branding, and smooth user experience.",

        features: [
          "Responsive and minimal UI design",
          "Smooth layout and spacing system",
          "Reusable component-based structure",
          "Optimized performance and loading",
          "Modern typography and color system",
        ],

        howItWorks: [
          "User lands on visually engaging homepage",
          "Content is structured for clarity and flow",
          "Sections guide user through brand story",
          "Responsive layout adapts across devices",
        ],
      },
      github: "https://github.com/ArunShivhare/kerna.git",
      live: "https://kerna-khaki.vercel.app/",
    },
    {
      title: "Photo Gallery",
      description: "Responsive photo gallery with faovrite toggling",
      tech: ["React", "TailWind CSS"],
      image: "/projects/pg.png",
      details: {
        overview:
          "A responsive photo gallery application that allows users to browse images and mark favorites with smooth UI interactions.",

        features: [
          "Responsive grid layout",
          "Favorite toggle functionality",
          "State management for user actions",
          "Smooth hover and transition effects",
          "Clean and minimal UI design",
        ],

        howItWorks: [
          "Images are displayed in a responsive grid",
          "User can click to mark/unmark favorites",
          "State updates instantly reflect UI changes",
          "Favorites can be tracked visually",
        ],
      },
      github: "https://github.com/ArunShivhare/photo-gallery.git",
      live: "https://photo-gallery-hmvo261b8-arunshivhares-projects.vercel.app/",
    },
    {
      title: "PassMan",
      description: "Securely manage your passwords in one place",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "JWT",
        "Tailwind CSS",
        "React Router",
        "Toastify",
      ],
      image: "/projects/passman.png",
      details: {
        overview:
          "A full-stack password manager that securely stores and manages user credentials with authentication and encryption principles.",

        features: [
          "JWT-based authentication system",
          "Secure password storage",
          "CRUD operations for credentials",
          "User-specific data isolation",
          "Clean dashboard UI",
        ],

        howItWorks: [
          "User signs up and logs in securely",
          "Passwords are stored in database",
          "User can add, update, delete credentials",
          "Authentication ensures data privacy",
        ],
      },
      github: "https://github.com/ArunShivhare/PassMan.git",
      live: "https://pass-man-one.vercel.app/",
    },
    {
      title: "Nexus",
      description: "Personal Team Management Web Application ",
      tech: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "TailWind CSS",
        "Context & Fetch API",
        "JWT",
        "PostMan",
      ],
      image: "/projects/tms.png",
      details: {
        overview:
          "A full-stack team management system that helps users manage tasks, teams, and collaboration workflows efficiently.",

        features: [
          "User authentication with JWT",
          "Task creation and management",
          "Team collaboration features",
          "REST API integration",
          "Real-time UI updates",
        ],

        howItWorks: [
          "User logs into the system",
          "Creates or joins a team",
          "Assigns and manages tasks",
          "Tracks progress and updates",
          "Backend handles data securely",
        ],
      },
      github: "https://github.com/ArunShivhare/Team-Management-System.git",
      live: "https://github.com/ArunShivhare/Team-Management-System.git",
    },
    {
      title: "TaskiFy",
      description: "Plan smart. Execute better.",
      tech: ["React", "Tailwind CSS", "React-Icons"],
      image: "/projects/taskify.png",
      details: {
        overview:
          "A productivity-focused task management application designed to help users plan, organize, and execute tasks efficiently.",

        features: [
          "Task creation and deletion",
          "Simple and clean UI",
          "State-based task tracking",
          "Responsive design",
          "Lightweight performance",
        ],

        howItWorks: [
          "User adds tasks to the list",
          "Tasks are managed via state",
          "User can update or remove tasks",
          "UI reflects changes instantly",
        ],
      },
      github: "https://github.com/ArunShivhare/Taskify.git",
      live: "https://taskify-sepia-psi.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio showcasing projects and achievements.",
      tech: ["React", "Tailwind CSS", "React-Icons"],
      image: "/projects/portfolio.png",
      details: {
        overview:
          "A modern personal portfolio website showcasing projects, skills, and achievements with a clean and responsive design.",

        features: [
          "Responsive layout for all devices",
          "Dark mode support",
          "Project showcase with modal view",
          "Smooth scrolling navigation",
          "Minimal and clean UI",
        ],

        howItWorks: [
          "User explores sections like About, Skills, Projects",
          "Projects open in detailed modal view",
          "Navigation allows smooth scrolling",
          "Dark mode enhances user experience",
        ],
      },
      github: "https://github.com/ArunShivhare/portfolio.git",
      live: "https://github.com/ArunShivhare/portfolio.git",
    },
    {
      title: "X homepage Layout",
      description: "Replicate X homepage layout ",
      tech: ["React", "Tailwind CSS"],
      image: "/projects/xhl.png",
      details: {
        overview:
          "A UI clone of the X (Twitter) homepage focusing on layout replication and responsive design accuracy.",

        features: [
          "Pixel-perfect UI replication",
          "Responsive layout structure",
          "Reusable components",
          "Sidebar and feed design",
          "Modern styling with Tailwind",
        ],

        howItWorks: [
          "User views structured homepage layout",
          "Sections mimic real X interface",
          "Responsive behavior adapts layout",
          "Focus is on design accuracy",
        ],
      },
      github: "https://github.com/ArunShivhare/X-homepage-clone.git",
      live: "https://github.com/ArunShivhare/X-homepage-clone.git",
    },
    {
      title: "Personal Music Player",
      description: "Build a responsive personal music player",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/projects/pmp.png",
      details: {
        overview:
          "A browser-based music player built using vanilla JavaScript with playback controls and interactive UI.",

        features: [
          "Play, pause, next, previous controls",
          "Audio progress tracking",
          "Dynamic song switching",
          "Custom UI controls",
          "Lightweight implementation",
        ],

        howItWorks: [
          "User selects a song to play",
          "Audio element handles playback",
          "Controls update playback state",
          "UI reflects current track progress",
        ],
      },
      github: "https://github.com/ArunShivhare/Personal-Music-Player.git",
      live: "https://github.com/ArunShivhare/Personal-Music-Player.git",
    },
    {
      title: "Netflix Homepage Clone",
      description: "Replicate netflix homepage and make it responsive",
      tech: ["HTML", "CSS"],
      image: "/projects/nhc.png",
      details: {
        overview:
          "A responsive clone of the Netflix homepage focusing on layout design, responsiveness, and visual structure.",

        features: [
          "Responsive UI layout",
          "Banner and movie sections",
          "Grid-based design",
          "Clean styling with CSS",
          "Visual similarity to Netflix",
        ],

        howItWorks: [
          "User views homepage layout",
          "Sections display movie categories",
          "Responsive design adjusts layout",
          "Focus is on frontend design replication",
        ],
      },
      github: "https://github.com/ArunShivhare/netflix-homepage-clone.git",
      live: "https://github.com/ArunShivhare/netflix-homepage-clone.git",
    },
  ];

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Recent <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing modern development practices and
            problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelected(project)}
              className="group cursor-pointer bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div
                  className="
      absolute inset-0 
      bg-black/60 
      flex items-center justify-center gap-6
      opacity-100 md:opacity-0 
      md:group-hover:opacity-100
      transition duration-300
    "
                >
                  <div
                    className="
    absolute inset-0 
    bg-black/60 
    flex items-center justify-center
    opacity-100 md:opacity-0 
    md:group-hover:opacity-100
    transition duration-300
  "
                  >
                    <p className="text-white text-sm font-medium tracking-wide">
                      Click for more info →
                    </p>
                  </div>
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
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl max-w-4xl w-full relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-red-500"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selected.title}
            </h3>

            {/* 🔥 THIS IS WHERE YOU ADD FULL DETAILS */}
            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Overview
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {selected.details.overview}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Key Features
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                {selected.details.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* How It Works */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How It Works
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                {selected.details.howItWorks.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-100 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={selected.live}
                target="_blank"
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Live Demo
              </a>

              <a
                href={selected.github}
                target="_blank"
                className="px-5 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-100 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
