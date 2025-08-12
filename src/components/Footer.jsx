import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaHeart, FaDiscord, FaTimes } from "react-icons/fa";
import { SiReddit } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
                href="https://x.com/r_banik1204"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300"
                title="X (Twitter)"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://www.reddit.com/user/AwareZookeepergame67/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-600/20 hover:bg-orange-600/40 rounded-lg flex items-center justify-center text-orange-400 hover:text-orange-300 transition-all duration-300"
                title="Reddit"
              >
                <SiReddit className="text-lg" />
              </a>
              <a
                href="https://discord.com/users/ratul4756"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all duration-300"
                title="Discord"
              >
                <FaDiscord className="text-lg" />
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
              <button 
                onClick={() => setShowPrivacy(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setShowTerms(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <FaHeart className="text-red-400" /> by rb
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="text-gray-300 space-y-4 text-sm">
              <p><strong className="text-white">Last updated:</strong> {currentYear}</p>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Information Collection</h3>
                <p>This portfolio website collects information you provide through the contact form, including your name, email address, and message content. This information is used solely to respond to your inquiries.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Contact Form Data</h3>
                <p>When you submit a message through the contact form, your information is sent to ratulbanik1204@gmail.com and may be stored temporarily for response purposes. We do not sell, trade, or share your personal information with third parties.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Social Media Links</h3>
                <p>This website includes links to social media platforms (LinkedIn, GitHub, Twitter/X, Reddit, Discord). Clicking these links will take you to external sites with their own privacy policies.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Analytics</h3>
                <p>This website may use basic analytics to understand visitor behavior. No personally identifiable information is collected through analytics.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Contact Information</h3>
                <p>For privacy-related questions, contact: ratulbanik1204@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
              <button 
                onClick={() => setShowTerms(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="text-gray-300 space-y-4 text-sm">
              <p><strong className="text-white">Last updated:</strong> {currentYear}</p>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Acceptance of Terms</h3>
                <p>By accessing and using this portfolio website, you accept and agree to be bound by these terms and conditions.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Portfolio Content</h3>
                <p>This website showcases the work and skills of Ratul Banik, a Computer Science student at MAKAUT. All projects, skills, and achievements displayed are accurate representations of actual work and experience.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Contact and Communication</h3>
                <p>The contact form is provided for professional inquiries, collaboration opportunities, and legitimate business purposes. Misuse of the contact form may result in blocked access.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Intellectual Property</h3>
                <p>All content on this website, including but not limited to text, images, code, and design, is the property of Ratul Banik unless otherwise stated. Reproduction without permission is prohibited.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">External Links</h3>
                <p>This website contains links to external sites (GitHub, LinkedIn, etc.). We are not responsible for the content or privacy practices of these external sites.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Limitation of Liability</h3>
                <p>This website is provided "as is" without warranties. We are not liable for any damages arising from the use of this website.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Contact</h3>
                <p>For questions about these terms, contact: ratulbanik1204@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 