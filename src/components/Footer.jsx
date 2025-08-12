import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="w-full max-w-6xl mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                RB
              </div>
              <span className="text-xl font-bold text-white">Ratul Banik</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer and AI/ML Engineer passionate about creating innovative solutions and building impactful technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ratul-banik1204/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://github.com/rbanik1204"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-600/20 hover:bg-gray-600/40 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-300"
                title="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://x.com/ratulbanik1204"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300"
                title="X (Twitter)"
              >
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#resume" className="text-gray-400 hover:text-white transition-colors">Resume</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block text-sm">Email</span>
                <a href="mailto:ratulbanik1204@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                  ratulbanik1204@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">Location</span>
                <span className="text-white">India</span>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">Status</span>
                <span className="text-green-400">Available for opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ratul Banik. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <FaHeart className="text-red-400" /> in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 