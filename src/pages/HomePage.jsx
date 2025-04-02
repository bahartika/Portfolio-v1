import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Jumbotron from "../components/Jumbotron";
import ProjectList from "../components/ProjectList";
import SkillList from "../components/SkillList";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (dalam ms)
      once: true, // Animasi hanya berjalan sekali
      easing: "ease-in-out", // Efek pergerakan animasi
    });
  }, []);

  return (
    <div className="bg-primary">
      <Jumbotron />
      <ProjectList />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <h1 className="text-4xl font-bold mb-8">🎉 AOS di React + Vite 🎉</h1>

        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center w-1/2" data-aos="fade-up">
          <h2 className="text-2xl font-semibold">Hello, AOS!</h2>
          <p className="mt-2">Ini adalah contoh animasi scroll menggunakan AOS.</p>
        </div>
        <SkillList />
      </div>
    </div>
  );
};

export default HomePage;
