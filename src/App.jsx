// import { useEffect, useState, useMemo } from "react";
// import "./styles/App.css";
// import ThemeContext from "./context/ThemeContext";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";

// const App = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   const themeContextValue = useMemo(() => {
//     return {
//       theme,
//       toggleTheme,
//     };
//   }, [theme]);

//   return (
//     <>
//       <ThemeContext.Provider value={themeContextValue}>
//         <div data-theme={theme} className="App">
//           <Navbar />
//           <HomePage />
//         </div>
//       </ThemeContext.Provider>
//     </>
//   );
// };

// export default App;

import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
};

export default App;
