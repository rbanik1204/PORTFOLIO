import React, { useState, useEffect } from "react";
import { FaDownload, FaAward, FaFilePdf, FaCertificate, FaGraduationCap, FaStar, FaTrophy, FaHeart } from "react-icons/fa";

const achievements = [
  {
    title: "Smart India Hackathon Finalist",
    description: "Reached final round in national-level hackathon",
    icon: <FaTrophy className="text-2xl text-yellow-400" />,
    category: "Competition"
  },
  {
    title: "AI/ML Help Bot Winner",
    description: "Developed innovative AI solution for MOSDAC portal",
    icon: <FaAward className="text-2xl text-blue-400" />,
    category: "Innovation"
  },
  {
    title: "React Development Certified",
    description: "Completed advanced React.js development course",
    icon: <FaCertificate className="text-2xl text-green-400" />,
    category: "Certification"
  },
  {
    title: "IoT RC Car Innovation",
    description: "Built custom RC car with ESP8266 and sensors",
    icon: <FaAward className="text-2xl text-purple-400" />,
    category: "Hardware"
  },
  {
    title: "AWS AI/ML Certificate",
    description: "Certified in AWS machine learning services",
    icon: <FaCertificate className="text-2xl text-orange-400" />,
    category: "Cloud"
  },
  {
    title: "Web Dev Bootcamp Topper",
    description: "Achieved top position in web development program",
    icon: <FaGraduationCap className="text-2xl text-cyan-400" />,
    category: "Education"
  }
];

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    // Use the correct base URL for GitHub Pages
    const base = import.meta.env.BASE_URL || "/";
    setPdfUrl(`${base}ratul_resume.pdf?t=${Date.now()}`);
  }, []);

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <section
      id="resume"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Resume & Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download my resume and explore my academic achievements, certifications, and notable accomplishments.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Resume</h3>
            <p className="text-gray-400">Click below to download or view my detailed resume</p>
          </div>
          
          <div className="w-full max-w-4xl h-[600px] mb-8 shadow-2xl rounded-xl overflow-hidden border border-white/10 mx-auto bg-white/5">
            {!pdfError && pdfUrl ? (
              <iframe
                src={pdfUrl}
                title="Ratul Banik Resume"
                className="w-full h-full"
                onError={handlePdfError}
                onLoad={() => setPdfError(false)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <FaFilePdf className="text-6xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 mb-2">PDF could not be loaded</p>
                  <p className="text-sm text-gray-500">Please use the download button below</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${import.meta.env.BASE_URL || '/'}ratul_resume.pdf`}
              download="Ratul_Banik_Resume.pdf"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaDownload className="text-lg" />
              Download Resume
            </a>
            <a
              href={`${import.meta.env.BASE_URL || '/'}ratul_resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <FaFilePdf className="text-lg" />
              View Fullscreen
            </a>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="glass-card rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
            <p className="text-gray-400">Highlights of my academic and professional accomplishments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      {achievement.description}
                    </p>
                    <span className="inline-block text-xs text-gray-500 bg-white/10 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              I'm actively seeking new opportunities and would love to discuss how I can contribute to your team or project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Discuss Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;