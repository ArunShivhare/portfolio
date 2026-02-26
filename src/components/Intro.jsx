import React from 'react'

const Intro = () => {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm Arun 👋
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          A Computer Science student passionate about building clean,
          modern and responsive web applications.
        </p>

        <div className="mt-8 flex space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
          >
            View Projects
          </a>

          <a
            href="#"
            className="px-6 py-3 border border-gray-900 rounded-md hover:bg-gray-100 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
