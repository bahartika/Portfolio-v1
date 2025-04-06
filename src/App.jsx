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

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Jarak offset dari elemen
      duration: 1000, // Durasi animasi (dalam ms)
      once: true, // Animasi hanya berjalan sekali
      easing: "ease-in-out", // Efek pergerakan animasi
    });
  }, []);

  return (
    <div className="bg-primary">
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
