import React from "react";
import { FaDownload, FaAward, FaFilePdf } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-16 relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-6 text-neon-cyan flex items-center gap-3 z-10 relative">
        <FaFilePdf className="animate-pulse text-neon-pink text-5xl" />
        Resume & Achievements
      </h2>

      <div className="group w-full max-w-5xl mx-auto z-10 relative backdrop-blur-md bg-black/40 rounded-3xl border border-neon-cyan p-8 md:p-14 transition-all duration-300
        hover:shadow-[0_0_60px_10px_#00fff7,0_0_120px_30px_#00fff7]
        before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:z-[-1] before:blur-2xl before:bg-neon-cyan/30 before:opacity-0 hover:before:opacity-100">
        <div className="w-full max-w-4xl h-[600px] mb-8 shadow-xl rounded-xl overflow-hidden border-2 border-neon-green mx-auto">
          <iframe
            src="/ratul_resume.pdf"
            title="Ratul Banik Resume"
            className="w-full h-full"
          />
        </div>

        <div className="flex gap-6 mb-10 justify-center">
          <a
            href="/ratul_resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-neon-green text-black font-semibold rounded-full hover:scale-105 transition shadow-lg"
          >
            <FaDownload className="animate-bounce" />
            Download Resume
          </a>
          <a
            href="/ratul_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-neon-green text-neon-green font-semibold rounded-full hover:bg-neon-green hover:text-black transition shadow-lg"
          >
            <FaFilePdf />
            View Fullscreen
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Smart India Hackathon Finalist",
            "AI/ML Help Bot Winner",
            "Certified in React Development",
            "IoT RC Car Innovation",
            "AWS AI/ML Certificate",
            "Web Dev Bootcamp Topper"
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-black border border-neon-pink px-4 py-3 rounded-xl shadow hover:scale-105 transition duration-300"
            >
              <FaAward className="text-neon-pink animate-pulse" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;