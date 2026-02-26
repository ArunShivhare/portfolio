import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";

const Achievements = () => {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const achievements = [
    {
      title: "HackerRank SQL Certification",
      description: "Certified in SQL showcasing database query skills.",
      year: "2023",
      image: "/certificate1.jpg",
      link: "#",
    },
    {
      title: "C# Certification",
      description: "Proved expertise in C# development.",
      year: "2022",
      image: "/certificate2.jpg",
      link: "#",
    },
    {
      title: "Java Certification",
      description: "Demonstrated strong Java programming knowledge.",
      year: "2023",
      image: "/certificate3.jpg",
      link: "#",
    },
  ];

  // 🔥 Clean auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    let scrollSpeed = 0.5; // increase for faster (0.5 = smooth)

    const autoScroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;

        // infinite loop effect
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 10);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="achievements" className="py-28 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">
            Recognition & Awards
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My <span className="text-indigo-600">Achievements</span>
          </h2>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide px-4 pb-6"
        >
          {[...achievements, ...achievements].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="min-w-[320px] cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
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
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl max-w-3xl w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-red-500"
            >
              <FaTimes />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full rounded-xl mb-6"
            />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {selected.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;