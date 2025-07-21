import React from "react";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaDatabase, FaCuttlefish } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiTailwindcss } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";

const skillGroups = [
  {
    label: "🧑‍💻 Programming Languages",
    skills: [
      { icon: <FaCuttlefish />, name: "C" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaJs />, name: "JavaScript" },
    ],
  },
  {
    label: "🌐 Web Development",
    skills: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaJs />, name: "JavaScript (Front-end)" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiDjango />, name: "Django (Back-end)" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    label: "⚙️ Software Development Tools & Practices",
    skills: [
      { icon: <FaGitAlt />, name: "Git & GitHub" },
      { icon: <GiGearHammer />, name: "OOP" },
      { icon: <GiGearHammer />, name: "Data Structures & Algorithms" },
      { icon: <FaDatabase />, name: "Basic SQL" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-[400px] bg-black text-white px-2 py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12 text-center z-10 relative text-neon-cyan tracking-widest drop-shadow-lg">Skills</h2>
      <div className="group w-full max-w-5xl flex flex-col items-center justify-center z-10 relative backdrop-blur-md bg-black/40 rounded-3xl border border-neon-cyan p-8 md:p-14 transition-all duration-300
        hover:shadow-[0_0_60px_10px_#00fff7,0_0_120px_30px_#00fff7]
        before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:z-[-1] before:blur-2xl before:bg-neon-cyan/30 before:opacity-0 hover:before:opacity-100">
        <div className="flex flex-col gap-12 w-full">
          {skillGroups.map((group, gidx) => (
            <div key={gidx} className="w-full flex flex-col items-center">
              <div className="text-xl md:text-2xl font-bold text-neon-cyan mb-6 flex items-center gap-2 tracking-wide uppercase letter-spacing-wide text-center">
                {group.label}
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 w-full">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-2xl border-2 border-neon-cyan bg-black/60 backdrop-blur-md shadow-[0_0_18px_3px_#00fff7] hover:scale-110 hover:shadow-[0_0_32px_8px_#00fff7] transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-3xl md:text-4xl mb-1 text-neon-cyan group-hover:text-white transition-colors duration-200 drop-shadow-[0_0_8px_#00fff7]">{skill.icon}</span>
                    <span className="text-xs md:text-base font-semibold text-white mt-1 text-center tracking-wide group-hover:scale-110 transition-transform duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              {gidx !== skillGroups.length - 1 && (
                <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent my-10 opacity-60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
