import React from "react";

const timeline = [
  { type: "education", title: "High School", description: "Hooghly Engineering and Technology College" },
  { type: "education", title: "University", description: "MAKAUT University" },
  // { type: "experience", title: "Internship", description: "Arduino ESP32 " },
  // { type: "experience", title: "Job-1", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet." },
  // { type: "experience", title: "Job-2", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet." },
  // { type: "experience", title: "Job-3", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur ad corrupti recusandae cumque amet." },
];

const EducationTimeline = () => {
  return (
    <section id="timeline" className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center relative overflow-hidden">
      {/* Subtle neon glow at the top for smooth transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-20 bg-gradient-to-b from-neon-pink/20 via-black/80 to-transparent blur-2xl opacity-70 z-0" />
      <h2 className="text-4xl font-bold text-neon-cyan mb-10 z-10 relative">My Education</h2>
      <div className="relative w-full max-w-4xl z-10 p-8 rounded-[2.5rem]">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-neon-pink -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-10 z-10 relative">
          {timeline.map((item, idx) => (
            <div key={idx} className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
              <div className="w-1/2 flex flex-col items-${idx % 2 === 0 ? 'start' : 'end'}">
                <div className="bg-[#ff3131] bg-opacity-80 rounded-xl p-6 shadow-xl text-black min-w-[220px] max-w-xs">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline; 