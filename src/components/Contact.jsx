import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "arunshivhare925@gmail.com",
      href: "mailto:arunshivhare925@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 82240 59850",
      href: "tel:+918224059850",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Bhopal, M.P., India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Classy Header - Consistent with previous sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-indigo-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Let’s start a <br />
              <span className="text-indigo-600/80">conversation.</span>
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-gray-500 dark:text-gray-400 text-lg max-w-sm border-l-2 border-indigo-600 pl-6"
          >
            Currently open to new opportunities and interesting collaborations.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-indigo-500/30"
            >
              {/* Subtle Background Accent */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-600/5 rounded-full blur-2xl group-hover:bg-indigo-600/10 transition-all duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-sm text-indigo-600 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 mb-6">
                  {item.icon}
                </div>
                
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                  {item.label}
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white break-all leading-tight">
                  {item.value}
                </h3>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider translate-y-2 group-hover:translate-y-0">
                  Send Message <FaArrowRight size={10} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Professional Footer Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-sm">
            Based in <span className="text-gray-900 dark:text-white font-medium">Bhopal, India</span>. Available for remote work worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
