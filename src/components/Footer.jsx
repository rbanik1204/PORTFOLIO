import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12 relative overflow-hidden">
      {/* Subtle neon glow at the top for smooth transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-10 bg-gradient-to-b from-neon-pink/20 via-black/80 to-transparent blur-2xl opacity-70 z-0" />
      <div className="container mx-auto flex flex-col items-center justify-center z-10 relative">
        <div className="flex gap-6 text-2xl mb-4">
          <a href="https://www.linkedin.com/in/ratul-banik1204/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition">in</a>
          <a href="#" className="hover:text-neon-pink transition">ig</a>
          <a href="https://github.com/rbanik1204" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition">gh</a>
          <a href="#" className="hover:text-neon-pink transition">x</a>
        </div>
        <div className="flex gap-6 mb-2 text-sm">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#services" className="hover:underline">Service</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policies</a>
        </div>
        <div className="text-xs">© Ratul | All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer; 