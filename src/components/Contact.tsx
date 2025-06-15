// Contact.tsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can connect this to EmailJS or your backend
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-6 py-16 max-w-4xl mx-auto min-h-screen" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
      >
        Contact Me ✉️
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md space-y-6"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
