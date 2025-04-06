import React from "react";
import photo from "../assets/photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <header name="Header" className="pb-10 lg:h-screen w-full pt-30 lg:pt-10" id="home">
      {/* >= tablet */}
      <div className="lg:w-3/4 mx-auto items-center justify-center h-full hidden md:flex" data-aos="fade-up">
        <div className="text-left font-quicksand font-bold w-3/4 pl-10">
          <h1 className="flex text-3xl lg:text-6xl items-center text-secondary">
            Hello, I'm
            <div className="mx-4 rounded-xl overflow-hidden hover:rotate-3 duration-200 hover:scale-125 ">
              <img src={photo} alt="Bahartika's profile picture" width={75} />
            </div>
            Bahartika!
          </h1>
          <h2 className="text-4xl text-secondary my-4">
            I'm a <span className="text-tersier">Front-end Web Developer </span> and
          </h2>
          <div className="flex">
            <h2 className="text-4xl">
              <span className="text-tersier">Graphic Designer. </span>
            </h2>
            <span className="ml-3 text-lg rounded-full px-5 text-primary bg-secondary flex items-center gap-2 hover:-rotate-6 duration-200">
              <div className="w-2 h-2 bg-teal-400 rounded-full blur-[1px]"></div> Open to work
            </span>
          </div>
        </div>
      </div>

      {/* phone */}
      <div className="md:w-3/4 mx-auto flex flex-col items-center justify-center h-full md:hidden">
        <div className="w-80 md:w-96 overflow-hidden rounded-2xl md:order-2" data-aos="fade-up">
          <img src={photo} alt="My Profile" width={400} className="hover:scale-110 duration-200 bg-bottom" />
        </div>
        <div className="flex flex-col justify-center my-4 xl:my-0 w-80 md:w-96 md:px-0 md:order-1" data-aos="fade-up">
          <h2 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent">Bahartika is here!</h2>
          <p className="py-2 md:py-4 text-secondary font-quicksand">I am a front-end developer and graphic designer committed to continuous learning and skill development in web development.</p>

          <div>
            <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-300 to-teal-600">
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import photo from "../assets/photo.jpg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// const Header = () => {
//   return (
//     <header name="Header" className="pb-10 lg:h-screen w-full pt-30 lg:pt-10">
//       <div className="md:w-3/4 mx-auto flex flex-col items-center justify-center h-full lg:gap-32 md:flex-row">
//         <div className="w-80 md:w-96 overflow-hidden rounded-2xl md:order-2" data-aos="fade-up">
//           <img src={photo} alt="My Profile" width={400} className="hover:scale-110 duration-200 bg-bottom" />
//         </div>
//         <div className="flex flex-col justify-center my-4 xl:my-0 w-80 md:w-96 md:px-0 md:order-1" data-aos="fade-up">
//           <h2 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent">Bahartika is here!</h2>
//           <p className="py-2 md:py-4 text-secondary font-quicksand">I am a front-end developer and graphic designer committed to continuous learning and skill development in web development.</p>
//           <div>
//             <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-300 to-teal-600">
//               Portfolio
//               <span className="group-hover:rotate-90 duration-500">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
