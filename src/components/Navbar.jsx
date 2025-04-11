import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "project", label: "Project" },
  { to: "certificate", label: "Certificate" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="flex justify-between text-secondary py-6 px-8 lg:px-14 fixed left-1/2 transform -translate-x-1/2 w-full z-10 font-quicksand bg-primary md:w-3/4 rounded-b-xl lg:border-b-1 lg:border-x-1">
      {/* Logo */}
      <div className="flex items-center flex-1">
        <Link to="home" smooth={true} duration={800} className="cursor-pointer">
          <h3 className="text-2xl font-bold hover:scale-105 transition">Bahartika</h3>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center flex-1 justify-end font-normal">
        <ul className="flex md:gap-4 lg:gap-8 text-base *:hover:text-tersier *:transition *:border-b-2 *:border-primary *:hover:border-tersier *:cursor-pointer">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} smooth={true} duration={800} spy={true}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <button className="block md:hidden transition" onClick={handleClick} aria-label="Toggle menu">
        {click ? <FaTimes /> : <CiMenuFries />}
      </button>

      {/* Mobile Menu */}
      {click && (
        <div className="md:hidden absolute top-16 w-full left-0 right-0 bg-primary/80 backdrop-blur-md font-quicksand transition-all duration-500 ease-in-out">
          <ul className="text-center text-xl p-10">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="my-4 py-4 border-b border-secondary">
                <Link to={to} smooth={true} duration={800} spy={true} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
