import React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import profileImg from "../assets/WhatsApp Image 2025-07-21 at 17.38.43_df50f27d.jpg";

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const current = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, current.clientWidth / current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(current.clientWidth, current.clientHeight);
    current.appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 1000;
    const starVertices = [];
    for (let i = 0; i < starsCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(600);
      const y = THREE.MathUtils.randFloatSpread(600);
      const z = THREE.MathUtils.randFloatSpread(600);
      starVertices.push(x, y, z);
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 400;
    function animate() {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    }
    animate();
    return () => {
      current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-black overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="relative z-10 flex flex-row items-center justify-start w-full max-w-7xl mx-auto px-8 py-16 gap-16">
        <div className="flex-shrink-0 flex items-center justify-center mt-12">
          {/* Double border effect with enhanced glow */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-neon-pink blur-2xl opacity-20 scale-125"></div>
            {/* Main container with border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-neon-pink shadow-[0_0_50px_15px_#ff3131] flex items-center justify-center bg-black overflow-hidden">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-[0_0_10px_#ff3131]">
            Hi, I'm <span className="text-neon-pink">Ratul Banik</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-neon-cyan mb-6">
            Web Developer & AI/ML Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            I build modern, visually stunning web applications and love working with AI/ML technologies. Let's create something amazing together!
          </p>
          <div className="flex gap-6 mt-2">
            <a
              href="https://www.linkedin.com/in/ratul-banik1204/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-pink text-3xl transition"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/rbanik1204"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-pink text-3xl transition"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;