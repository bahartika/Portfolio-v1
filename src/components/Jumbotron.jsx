import React from "react";
import photo from "../assets/photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Jumbotron = () => {
  return (
    <section id="home" className="w-full pt-28 lg:pt-10 lg:h-screen">
      <div className="lg:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center lg:min-h-screen px-4 py-10" data-aos="fade-up">
        <div className="text-center md:text-left font-quicksand font-bold w-full md:w-3/4 lg:pl-8">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-secondary flex flex-col md:flex-row items-center justify-center md:justify-start">
            Hello, I'm
            <span className="md:mx-4 my-2 rounded-xl overflow-hidden hover:rotate-3 duration-200 hover:scale-125">
              <img src={photo} alt="Bahartika's profile picture" className="w-20 md:w-[75px]" loading="lazy" />
            </span>
            Bahartika!
          </h1>

          <h2 className="text-2xl md:text-4xl text-secondary mt-4">
            I'm a <span className="text-tersier">Front-end Web Developer</span> and
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-1">
            <h2 className="text-2xl md:text-4xl">
              <span className="text-tersier">Graphic Designer.</span>
            </h2>
            <span className="mt-4 md:mt-0 md:ml-3 text-sm md:text-lg rounded-full px-4 py-1 text-primary bg-secondary flex items-center gap-2 hover:-rotate-6 duration-200">
              <div className="w-2 h-2 bg-teal-400 rounded-full blur-[1px]"></div>
              Open to work
            </span>
          </div>

          {/* CV Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1jgy6FWY91jMngyE1Lt2ID0cDhL93OuBI/view"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Bahartika's CV"
              className="group w-fit px-6 py-3 flex items-center rounded-md bg-linear-to-r/oklch from-tersier to-secondary text-primary font-semibold hover:font-bold shadow-lg hover:brightness-105 hover:scale-105 transition-all duration-300"
            >
              View My CV
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
