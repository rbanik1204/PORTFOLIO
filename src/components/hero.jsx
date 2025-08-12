import React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
// Replace WhatsApp image with professional placeholder
// import profileImg from "../assets/WhatsApp Image 2025-07-21 at 17.38.43_df50f27d.jpg";

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const current = mountRef.current;
    if (!current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, current.clientWidth / current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Mobile-optimized renderer settings
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(current.clientWidth, current.clientHeight);
    current.appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = window.innerWidth < 768 ? 400 : 800; // Fewer stars on mobile for performance
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
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff,
      size: window.innerWidth < 768 ? 1 : 1.5, // Smaller stars on mobile
      transparent: true,
      opacity: 0.8
    });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 400;

    // Handle window resize
    const handleResize = () => {
      if (current) {
        camera.aspect = current.clientWidth / current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(current.clientWidth, current.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    };

    window.addEventListener('resize', handleResize);

    function animate() {
      requestAnimationFrame(animate);
      starField.rotation.y += window.innerWidth < 768 ? 0.0001 : 0.0003; // Slower on mobile
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (current && renderer.domElement) {
        current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] sm:min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 gap-8 sm:gap-12 lg:gap-20">
        {/* Profile Image - Mobile Optimized */}
        <div className="flex-shrink-0 flex items-center justify-center order-2 lg:order-1">
          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            {/* Main container with professional border - Mobile responsive sizes */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-gray-300/30 shadow-2xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden backdrop-blur-sm">
              {/* Professional placeholder - replace with your actual professional photo */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                RB
              </div>
              {/* Add a subtle overlay for depth */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
        
        {/* Content - Mobile Optimized */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ratul Banik</span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 mb-4 sm:mb-6">
              Full Stack Developer & AI/ML Engineer
            </h2>
          </div>
          
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0">
            I craft modern, scalable web applications and develop intelligent AI solutions. 
            Passionate about creating impactful technology that solves real-world problems.
          </p>
          
          {/* Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
            <a
              href="https://www.linkedin.com/in/ratul-banik1204/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="hidden sm:inline">Connect on LinkedIn</span>
              <span className="sm:hidden">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/rbanik1204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-4 sm:px-6 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">View GitHub</span>
              <span className="sm:hidden">GitHub</span>
            </a>
          </div>
          
          {/* Status indicators - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="hidden sm:inline">Available for opportunities</span>
              <span className="sm:hidden">Available</span>
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="hidden sm:inline">Based in India</span>
              <span className="sm:hidden">India</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;