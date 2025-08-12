import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../layouts/Navbar";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Element name="hero"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="resume"><Resume /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </div>
  );
};

export default Home;