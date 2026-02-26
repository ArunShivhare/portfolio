import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly conversation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Location */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 text-center shadow-sm hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-2xl mb-6 text-xl">
              <FaMapMarkerAlt />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Location
            </p>

            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Sehore, M.P.
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 text-center shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-2xl mb-6 text-xl">
              <FaEnvelope />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Email
            </p>

            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              your@email.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 text-center shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-2xl mb-6 text-xl">
              <FaPhoneAlt />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Phone
            </p>

            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              +91 XXXXX XXXXX
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;