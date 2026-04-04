import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaTimes, FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () => {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const achievements = [
    {
      title: "LeetCode",
      description: "280+ problems solved • 8 badges earned",
      year: "2026",
      image: "/achievements/leetcode.png",
      link: "https://leetcode.com/u/Arun_Shivhare_/",
    },
    {
      title: "Introduction to Generative AI",
      description: "Completed Google Cloud: Introduction to Generative AI.",
      year: "2024",
      image: "/achievements/itgi.png",
      link: "https://www.skills.google/public_profiles/7db40668-6dbe-4785-b606-c708d44d9668/badges/9754716",
    },
    {
      title: "Introduction to Large Language Models",
      description:
        "Completed Google Cloud: Introduction to Large Language Models.",
      year: "2025",
      image: "/achievements/itllm.png",
      link: "https://www.skills.google/public_profiles/7db40668-6dbe-4785-b606-c708d44d9668/badges/15606409",
    },
    {
      title: "Python Essentials 1",
      description: "Python Essentials 1.",
      year: "2025",
      image: "/achievements/python1.png",
      link: "#",
    },
    {
      title: "Python Essentials 2",
      description: "Python Essentials 2.",
      year: "2025",
      image: "/achievements/python2.png",
      link: "#",
    },
    {
      title: "Introduction to Cyber Security",
      description: "Introduction to Cyber Security.",
      year: "2025",
      image: "/achievements/cybersecurity.png",
      link: "#",
    },
    {
      title: "Introduction to Modern AI",
      description: "Introduction to Modern AI.",
      year: "2025",
      image: "/achievements/modernai.png",
      link: "#",
    },
    {
      title: "Apply AI",
      description: "Apply AI: Analyze Customer Reviews.",
      year: "2025",
      image: "/achievements/applyai.png",
      link: "#",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId;
    const speed = 0.8;

    const scroll = () => {
      if (!isHovered) {
        container.scrollLeft += speed;

        const halfWidth = container.scrollWidth / 2;

        // TRUE seamless reset (no hard zero jump)
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }

      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="achievements"
      className="py-28 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="text-indigo-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Milestones &{" "}
              <span className="text-indigo-600/80">Achievements.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium border-l-2 border-indigo-600 pl-6 h-fit">
            <FaAward className="text-indigo-600" />
            <span>Verified Certifications</span>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-8 overflow-x-auto px-4 pb-8"
        >
          {[...achievements, ...achievements].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="min-w-90 cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaStar className="text-indigo-600" />
                  <span className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-full">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block mt-4 text-sm text-indigo-600 hover:underline"
                >
                  Visit →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

     {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-gray-950/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-[2.5rem] max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in duration-300"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-gray-800 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all z-10"
            >
              <FaTimes />
            </button>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-10 flex justify-center border-b dark:border-gray-800">
              <img src={selected.image} alt={selected.title} className="max-w-full h-auto max-h-[40vh] object-contain rounded-xl drop-shadow-2xl" />
            </div>

            <div className="p-10">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] mb-2 block text-center md:text-left">Verified Milestone</span>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight text-center md:text-left">{selected.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed text-center md:text-left">{selected.description}</p>

              <div className="flex flex-col md:flex-row gap-4 pt-6 border-t dark:border-gray-800">
                <a href={selected.link} target="_blank" rel="noreferrer" className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all">
                  Validate <FaExternalLinkAlt size={12} />
                </a>
                <button onClick={() => setSelected(null)} className="px-8 py-4 border border-gray-200 dark:border-gray-700 dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
