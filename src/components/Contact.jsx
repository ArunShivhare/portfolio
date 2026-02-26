import React from 'react'

const Contact = () => {
  return (
        <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Contact Me
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
