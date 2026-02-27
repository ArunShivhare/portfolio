import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities,
            or just a friendly conversation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Location */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition duration-300 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 mb-6">
              <FaMapMarkerAlt />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Location
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Bhopal, M.P.
            </h3>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition duration-300 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 mb-6">
              <FaEnvelope />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Email
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-white break-all">
              arunshivhare925@gmail.com
            </h3>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition duration-300 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 mb-6">
              <FaPhoneAlt />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Phone
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              +91 82240 59850
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;