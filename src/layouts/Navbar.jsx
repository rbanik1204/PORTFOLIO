import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur text-white py-4 px-8 flex justify-between z-50">
      <div className="font-bold text-neon-cyan text-xl">Ratul</div>
      <div className="flex gap-6">
        {["hero", "about", "skills", "projects", "resume", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-neon-pink capitalize"
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;