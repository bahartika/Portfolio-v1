import React, { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import ThemeContext from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>{theme === "light" ? <FaMoon /> : <CiSun />}</button>;
};

export default ThemeButton;
