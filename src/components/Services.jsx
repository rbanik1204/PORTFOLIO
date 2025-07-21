import React from "react";
import { FaPaintBrush, FaCode, FaLaptopCode, FaUserEdit, FaDatabase, FaBug } from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush />,
    title: "Software Developer",
    description: "",
  },
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "",
  },
  {
    icon: <FaUserEdit />,
    title: "UI / UX Design",
    description: "",
  },
  {
    icon: <FaDatabase />,
    title: "Content Manager",
    description: "",
  },
  {
    icon: <FaBug />,
    title: "Software Tester",
    description: "",
  },
  {
    icon: <FaLaptopCode />,
    title: "ISO Developer",
    description: "",
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen text-white px-6 py-20 relative overflow-hidden">
      {/* Subtle neon glow at the top for smooth transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-24 bg-gradient-to-b from-neon-pink/20 via-black/80 to-transparent blur-2xl opacity-70 z-0" />
      <h2 className="text-4xl font-bold text-neon-pink text-center mb-10 z-10 relative">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 glass-overlay p-8 md:p-16 rounded-3xl z-10 relative">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#ff3131] bg-opacity-80 rounded-xl p-6 shadow-xl text-black hover:scale-105 transition-all duration-300 flex flex-col items-center"
          >
            <div className="text-4xl mb-4 text-neon-pink">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-white mb-2 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 