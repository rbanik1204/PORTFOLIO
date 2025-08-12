import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapPin, FaHeart } from "react-icons/fa";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim()) || "http://localhost:5000";
  const CONTACT_ENDPOINT = `${API_BASE.replace(/\/$/, "")}/api/contact`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setShowThankYou(true);
        setForm({ name: "", email: "", message: "" });
        setShowForm(false);
        setTimeout(() => setShowThankYou(false), 4000);
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="-mt-2 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
      {/* Seamless top fade to hide any boundary */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_55%)]"></div>
      
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Let's Connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Interested in collaborating, have a project idea, or just want to say hi? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-lg sm:text-xl text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                    <a 
                      href="mailto:ratulbanik1204@gmail.com" 
                      className="text-white hover:text-blue-400 transition-colors font-medium text-sm sm:text-base break-all"
                    >
                      ratulbanik1204@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapPin className="text-lg sm:text-xl text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300 text-xs sm:text-sm">Location</p>
                    <p className="text-white font-medium text-sm sm:text-base">India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-lg sm:text-xl text-green-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-300 text-xs sm:text-sm">Status</p>
                    <p className="text-white font-medium text-sm sm:text-base">Available for opportunities</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links - Mobile Optimized */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                <h4 className="text-sm sm:text-base font-medium text-gray-300 mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/ratul-banik1204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300"
                  >
                    <FaLinkedin className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="https://github.com/rbanik1204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-300"
                  >
                    <FaGithub className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="https://twitter.com/ratulbanik1204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400/20 hover:bg-blue-400/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300"
                  >
                    <FaTwitter className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile Optimized */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send a Message</h3>
            
            {error && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-base"
                  name="message"
                  placeholder="Tell me about your project or how I can help..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Thank You Modal - Mobile Optimized */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 text-center animate-fade-in-up">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎉</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-gray-300 text-sm sm:text-base">Your message has been sent successfully. I'll get back to you soon!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
