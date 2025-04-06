import React from "react";
import Photo from "../assets/Photo.jpg";

const About = () => {
  return (
    <section className="md:w-3/4 mx-auto bg-primary flex items-center justify-center pb-10 md:px-10 flex-col lg:flex-row" id="about">
      {/* Left Image */}
      <div className="lg:w-1/2 rounded-t-2xl overflow-hidden hidden md:block">
        <img src={Photo} alt="Person standing on books" className="w-full h-full object-cover" />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 p-8">
        <h3 className="text-4xl flex items-center gap-2 bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-6 py-1.5 font-lilita">
          About me! <span className="text-4xl">⚜</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-secondary font-quicksand">
          {/* Item 1 */}
          <div>
            <h3 className="font-semibold text-lg">My Journey</h3>
            <p className="text-sm">I started my journey in graphic design and gradually transitioned into front-end development with ReactJS and TailwindCSS. Every project reflects my growth, creativity, and passion for clean UI.</p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="font-semibold text-lg">My Services</h3>
            <p className="text-sm">I offer modern, responsive web development services, including landing pages, portfolios, and interactive web apps—custom-tailored to your brand and vision.</p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="font-semibold text-lg">Why Me?</h3>
            <p className="text-sm">I focus on clear communication, user-centered design, and smooth user experience. I'm not just a coder—I’m your creative partner, ready to bring your ideas to life visually and technically.</p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="font-semibold text-lg">Tech Stack</h3>
            <p className="text-sm">My projects are built with ReactJS, TailwindCSS, Framer Motion, AOS, and GitHub API—technologies chosen for their speed, flexibility, and ability to create dynamic interfaces.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
