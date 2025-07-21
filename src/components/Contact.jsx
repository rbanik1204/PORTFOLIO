import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setForm({ name: "", email: "", message: "" });
    setShowForm(false);
    setTimeout(() => setShowThankYou(false), 4000);
  };

  return (
    <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center bg-black text-white px-4 py-16 relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-6 text-neon-cyan z-10 relative">Let's Connect</h2>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-center">
        Interested in collaborating, have a project idea, or just want to say hi? Reach out to me via email or connect on my social platforms below!
      </p>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="flex items-center gap-3 bg-neon-pink text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:bg-neon-cyan hover:text-black transition shadow-lg mb-10"
      >
        <FaEnvelope className="text-2xl animate-pulse" />
        ratulbanik1204@gmail.com
      </button>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 glass-card p-8 rounded-xl border border-neon-cyan mb-10 animate-fade-in"
        >
          <input
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan"
            name="message"
            placeholder="Your Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green text-black font-bold py-3 px-6 rounded-lg shadow-[0_0_20px_4px_#ff3131,0_0_40px_8px_#00fff7] hover:scale-105 hover:from-neon-green hover:to-neon-pink hover:text-white transition duration-200 tracking-wide text-lg mt-2"
          >
            ✉️ Send Message
          </button>
        </form>
      )}
      {showThankYou && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 border-2 border-neon-cyan rounded-2xl px-10 py-8 z-50 shadow-[0_0_40px_10px_#00fff7] text-center animate-fade-in">
          <div className="text-3xl font-bold text-neon-cyan mb-2">Thank you!</div>
          <div className="text-lg text-white">Your message has been sent.</div>
        </div>
      )}
      <div className="flex gap-12 mt-8 flex-wrap justify-center">
        <a
          href="https://www.linkedin.com/in/ratul-banik1204/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:text-neon-pink text-4xl transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rbanik1204"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:text-neon-pink text-4xl transition"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/ratulbanik1204"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:text-neon-pink text-4xl transition"
          title="X (Twitter)"
        >
          <FaXTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
