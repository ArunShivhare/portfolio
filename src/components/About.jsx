import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE TITLE */}
          <div>
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Passionate about building 
              <span className="text-indigo-600"> impactful </span>
              digital products.
            </h2>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            
            <p>
              I'm Arun, a Computer Science Engineering student focused on
              creating modern, scalable and user-centric web applications.
              I enjoy turning complex problems into clean and efficient solutions.
            </p>

            <p>
              My core interests lie in <span className="text-gray-900 dark:text-white font-medium">Full Stack Development</span>, 
              <span className="text-gray-900 dark:text-white font-medium"> System Design</span>, and 
              <span className="text-gray-900 dark:text-white font-medium"> AI & ML</span>.
              I constantly strive to improve my technical depth and build products
              that solve real-world challenges.
            </p>

            <p>
              Beyond coding, I actively work on strengthening problem-solving skills
              through competitive programming and exploring advanced technologies.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;