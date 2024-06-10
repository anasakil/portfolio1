import React, { useState } from "react";
import { motion } from "framer-motion";
import VantaBackground from "../Components/VantaBackground";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Your message has been sent!");
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const inputVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <VantaBackground />
      <motion.main
        className="container mx-auto p-4 md:p-8"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto"
          variants={formVariants}
        >
          <motion.div className="mb-4" variants={inputVariants}>
            <label htmlFor="name" className="block text-content mb-2 text-white">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input w-full bg-transparent border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              required
            />
          </motion.div>
          <motion.div className="mb-4" variants={inputVariants}>
            <label htmlFor="email" className="block text-content mb-2 text-white">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input w-full bg-transparent border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              required
            />
          </motion.div>
          <motion.div className="mb-4" variants={inputVariants}>
            <label htmlFor="message" className="block text-content mb-2 text-white">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="form-textarea w-full bg-transparent border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              required
            ></textarea>
          </motion.div>
          <motion.div className="text-center" variants={inputVariants}>
            <button
              type="submit"
              className="hover:bg-violet-800 text-white font-bold py-2 px-4 rounded border border-white"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </motion.main>
    </div>
  );
}

export default Contact;
