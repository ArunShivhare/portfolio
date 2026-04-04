import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight, FaChevronRight, FaChevronUp } from "react-icons/fa";

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Nexus V2.0",
      description: "Full-Stack Team Management Platform",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Tailwind CSS",
        "Firebase Authentication",
      ],
      image: "/projects/nexus.png",

      details: {
        overview:
          "A full-stack SaaS-style team management platform that enables leaders to manage teams and assign tasks, while members track and update their work through interactive dashboards.",

        features: [
          "Google authentication using Firebase with role-based access (leader/member)",
          "Task lifecycle management (pending, completed, failed)",
          "Leader dashboard for team creation, task assignment, and performance tracking",
          "Member dashboard with real-time task updates and status actions",
          "Responsive UI with dark/light mode and modern UX (modals, previews)",
          "RESTful APIs with MongoDB for efficient data handling",
        ],

        howItWorks: [
          "User logs in using Google and selects role (leader or member)",
          "Leaders create teams and add members via dashboard",
          "Tasks are assigned to members with descriptions and deadlines",
          "Members update task status (completed/failed) from their dashboard",
          "System tracks progress and displays analytics in dashboards",
        ],
      },

      github: "https://github.com/ArunShivhare/Nexus_frontend",
      live: "https://nexus-frontend-orpin-theta.vercel.app/",
    },
    {
      title: "Data Structure Simulator",
      description: "Learn Data Structures Visually & Easily.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
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
      title: "Golf Platform",
      description: "Full-Stack Subscription-Based Gaming & Charity Platform",
      tech: [
        "Next.js",
        "React",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "Vercel",
      ],
      image: "/projects/golf.png",

      details: {
        overview:
          "A full-stack SaaS-style platform where users can enter game scores, participate in monthly draws, win rewards, and contribute a portion of their winnings to charities. The system includes secure authentication, subscription-based access, and a complete admin workflow.",

        features: [
          "Authentication system with secure login and session handling",
          "Subscription-based access control with 30-day validity tracking",
          "Score submission system with latest 5 scores retention logic",
          "Automated draw system with random number generation and match logic (3/4/5 matches)",
          "Prize distribution system with dynamic pool calculation and multi-winner split",
          "Charity contribution system allowing users to select charities and percentage donation",
          "Admin panel with secure login, draw execution, winner verification, and payout tracking",
          "Proof submission and approval workflow for winnings",
          "Row Level Security (RLS) implemented in Supabase for database protection",
          "Responsive and modern UI with dashboard analytics and clean UX",
        ],

        howItWorks: [
          "User signs up/logs in and subscribes to access the platform",
          "User submits scores which are stored and limited to latest 5 entries",
          "System runs periodic draws generating winning numbers",
          "User scores are matched against draw results to determine winnings",
          "Prize pool is calculated and distributed based on match count",
          "User selects a charity and contributes a percentage of winnings",
          "Admin verifies winners, reviews proof submissions, and marks payouts",
        ],
      },

      github: "https://github.com/ArunShivhare/Golf-Charity.git",
      live: "https://golf-charity-sepia.vercel.app/",
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
      title: "Elementum Landing Page",
      description:
        "Pixel-perfect responsive React implementation of a Figma design with Docker support",
      tech: ["React", "Vite", "Tailwind CSS", "Docker"],
      image: "/projects/elementum.png",

      details: {
        overview:
          "A fully responsive landing page built by converting a Figma design into a production-ready React application. The project focuses on pixel-accurate UI, reusable component architecture, and real-world deployment using Docker.",

        features: [
          "Pixel-close implementation of Figma design",
          "Fully responsive (mobile, tablet, desktop)",
          "Reusable component-based architecture",
          "Modern UI with Tailwind CSS",
          "Interactive elements (hover effects)",
          "Dockerized setup for easy deployment",
        ],

        howItWorks: [
          "Users land on a visually structured homepage",
          "Each section (Hero, About, Offer, Testimonials, etc.) is modular",
          "Responsive design adapts across devices",
          "Docker allows the app to run in a consistent environment",
        ],
      },

      github: "https://github.com/ArunShivhare/Elementum.git",
      live: "https://elementum-kohl.vercel.app/",
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

  
  // Logic to show only top 4
  const displayProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured <span className="text-indigo-600/80">Projects.</span></h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs border-l-2 border-indigo-600 pl-6 text-sm">
            A collection of full-stack applications and technical experiments.
          </p>
        </div>

        {/* Project Grid - Show Top 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
          {displayProjects.map((project) => (
            <motion.div
               key={project.title} // Use title as key for layout animations
                layout // This makes the grid expansion smooth
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelected(project)}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white text-gray-900 px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                    View Case Study <FaChevronRight size={10} />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-indigo-600 transition-colors"><FaGithub size={18}/></a>
                    <a href={project.live} className="text-gray-400 hover:text-indigo-600 transition-colors"><FaExternalLinkAlt size={16}/></a>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm line-clamp-1">{project.description}</p>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Toggle Button */}
        <motion.div layout className="mt-20 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)} // Toggles between true/false
            className="group flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-full font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-xl"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                Explore Full Work History <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* DETAILED CASE STUDY MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Modal Header */}
              <div className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 border-b dark:border-gray-800 flex justify-between items-center z-10">
                <h3 className="text-xl font-bold dark:text-white">{selected.title}</h3>
                <button onClick={() => setSelected(null)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full dark:text-white transition-colors">
                  <FaTimes />
                </button>
              </div>

              <div className="p-8 md:p-12 space-y-12">
                {/* 1. Overview Section */}
                <section>
                  <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 text-center">Project Overview</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    {selected.details.overview}
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-12 pt-8 border-t dark:border-gray-800">
                  {/* 2. Features Section */}
                  <div>
                    <h4 className="font-bold dark:text-white mb-6 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-indigo-600"></span> Key Features
                    </h4>
                    <ul className="space-y-4">
                      {selected.details.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
                          <span className="text-indigo-500 mt-1">▹</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. How It Works Section */}
                  <div>
                    <h4 className="font-bold dark:text-white mb-6 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-indigo-600"></span> How It Works
                    </h4>
                    <div className="space-y-4">
                      {selected.details.howItWorks.map((step, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border dark:border-gray-800">
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <span className="font-bold text-indigo-600 mr-2">0{i + 1}.</span> {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Tech Stack & Footer */}
                <div className="pt-8 border-t dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-md">
                    {selected.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] uppercase font-bold rounded tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={selected.live} target="_blank" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20">
                      Live Preview <FaExternalLinkAlt size={12} />
                    </a>
                    <a href={selected.github} target="_blank" className="px-6 py-3 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                      View Source <FaGithub size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
