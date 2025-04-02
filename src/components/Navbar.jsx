import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const mobileMenu = (
    <div className={`lg:hidden absolute top-16 w-full left-0 right-0 bg-primary transition-all duration-500 ease-in-out font-quicksand ${click ? "block" : "hidden"}`}>
      <ul className="text-center text-xl p-10">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-secondary">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-secondary">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Project">
          <li className="my-4 py-4 border-b border-secondary">Project</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-secondary">Contact</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="flex justify-between text-secondary py-6 px-8 lg:px-14 fixed left-1/2 transform -translate-x-1/2 w-full md:w-3/4 z-10 font-quicksand bg-primary">
      <div className="flex items-center flex-1">
        <h3 className="text-2xl font-bold">Bahartika</h3>
      </div>
      <div className="hidden md:flex items-center flex-1 justify-end font-normal">
        <div className="">
          <ul className="flex gap-8 text-[18px] *:hover:text-tersier *:transition *:border-b-2 *:border-primary *:hover:border-tersier *:cursor-pointer">
            <Link spy={true} smooth={true} to="Home">
              <li>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li>About</li>
            </Link>
            <Link spy={true} smooth={true} to="Project">
              <li>Project</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>

      <button className="block md:hidden transition" onClick={handleClick}>
        {click ? <FaTimes /> : <CiMenuFries />}
      </button>

      {mobileMenu}
    </nav>
  );
};

export default Navbar;
