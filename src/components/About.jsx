import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact, SiTailwindcss, SiGithub, SiFigma } from "react-icons/si";
import photo from "../assets/photo.jpg";

const About = () => {
  return (
    <section className="w-full md:w-3/4 mx-auto bg-primary flex items-center justify-center pt-10 px-10 flex-col lg:flex-row" id="about">
      {/* Left Image */}
      <div data-aos="zoom-in" className="lg:w-2/5 rounded-t-2xl overflow-hidden hidden md:block">
        <img src={photo} alt="Bahartika's profile picture" className="w-96 lg:w-full h-full hover:scale-120 hover:bg-bottom transition duration-300" />
      </div>

      {/* Right Content */}
      <div data-aos="zoom-in" className="lg:w-2/3 p-8">
        <h3 className="text-4xl flex items-center gap-2 bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-4 py-1.5 font-lilita">
          About me! <span className="text-4xl">⚜</span>
        </h3>

        <div className="text-secondary font-quicksand space-y-8">
          <div className="w-full">
            <h3 className="font-semibold text-lg">My Journey</h3>
            <p className="text-sm">
              From telecommunications to front-end development, I now craft modern interfaces using ReactJS and TailwindCSS. I focus on clear communication and smooth user experience. I'm not just a coder, I’m your creative partner, ready
              to bring your ideas to life visually and technically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* My Services */}
            <div>
              <h3 className="font-semibold text-lg">My Services</h3>
              <div className="space-y-2 mt-2">
                <p>
                  ✨ <span>Responsive web development</span>
                </p>
                <p>
                  🎯 <span>Custom landing pages</span>
                </p>
                <p>
                  🧩 <span>Personal portfolios</span>
                </p>
                <p>
                  ⚡ <span>Interactive web apps</span>
                </p>
                <p>
                  🎨 <span>Brand-focused designs</span>
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-semibold text-lg">Tech Stack</h3>
              <p className="flex flex-wrap gap-4 items-center mt-2 text-secondary">
                <span className="flex items-center gap-2">
                  <SiHtml5 className="text-xl text-amber-500" />
                  HTML5
                </span>
                <span className="flex items-center gap-2">
                  <SiCss3 className="text-xl text-blue-400" />
                  CSS
                </span>
                <span className="flex items-center gap-2">
                  <SiJavascript className="text-xl text-yellow-400" />
                  Javascript
                </span>
                <span className="flex items-center gap-2">
                  <SiBootstrap className="text-xl text-violet-700" />
                  Bootstrap
                </span>
                <span className="flex items-center gap-2">
                  <SiTailwindcss className="text-xl text-cyan-400" />
                  TailwindCSS
                </span>
                <span className="flex items-center gap-2">
                  <SiReact className="text-xl text-sky-500" />
                  ReactJS
                </span>
                <span className="flex items-center gap-2">
                  <SiGithub className="text-xl dark:text-white" />
                  GitHub API
                </span>
                <span className="flex items-center gap-2">
                  <SiFigma className="text-xl dark:text-white" />
                  Figma
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
