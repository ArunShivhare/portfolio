import React from 'react'
import { useRef } from "react";


const Projects = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = 350;
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const projects = [
        {
            title: "Employee Management System",
            description:
                "Full-stack role-based employee management platform with authentication and task tracking.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            github: "#",
            live: "#",
        },
        {
            title: "Multiplayer Tic Tac Toe",
            description:
                "Real-time multiplayer game built using JavaFX and socket programming.",
            tech: ["Java", "JavaFX", "Sockets"],
            github: "#",
            live: "#",
        },
        {
            title: "Chat Application",
            description:
                "Multi-client real-time chat application using client-server architecture.",
            tech: ["Java", "Sockets"],
            github: "#",
            live: "#",
        },
        {
            title: "Calculator App",
            description:
                "Advanced calculator with database connectivity and clean UI.",
            tech: ["JavaFX", "MySQL"],
            github: "#",
            live: "#",
        },
        {
            title: "Portfolio Website",
            description:
                "Minimal responsive personal portfolio built with React and Tailwind CSS.",
            tech: ["React", "Tailwind"],
            github: "#",
            live: "#",
        },
        {
            title: "ToDo Manager",
            description:
                "Task management application with full CRUD functionality.",
            tech: ["React", "Express"],
            github: "#",
            live: "#",
        },
        {
            title: "Weather App",
            description:
                "Weather forecasting application using external API integration.",
            tech: ["React", "API"],
            github: "#",
            live: "#",
        },
    ];

    return (
        <section id="projects" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold">Projects</h2>

                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="px-4 py-2 border rounded-md hover:bg-gray-200 transition"
                        >
                            ←
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="px-4 py-2 border rounded-md hover:bg-gray-200 transition"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="min-w-[320px] bg-white p-6 rounded-xl border hover:shadow-lg transition snap-start"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 text-sm font-medium">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    )
}

export default Projects
