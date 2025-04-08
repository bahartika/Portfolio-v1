"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";

import useCanvasCursor from "./hooks/useCanvasCursor";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const CanvasCursor = () => {
    useCanvasCursor();
    return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
  };

  return (
    <div className="bg-primary select-none">
      <CanvasCursor />
      <Navbar />
      <Jumbotron />
      <About />
      <ProjectList />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
