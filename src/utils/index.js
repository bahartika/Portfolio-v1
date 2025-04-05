import dasarWeb from "../assets/certificates/dasar_pemrograman_web.png";
import dasarJS from "../assets/certificates/dasar_javascript.png";
import frontendPemula from "../assets/certificates/frontend_web_pemula.png";
import reactApp from "../assets/certificates/aplikasi_web_react.png";
import reactFundamental from "../assets/certificates/fundamental_aplikasi_react.jpg";

const data = [
  {
    title: "Belajar Dasar Pemrograman Web",
    description:
      "I have built a strong foundation in web development by learning HTML for structuring web pages (including semantic elements, attributes, and content organization), CSS for styling (covering selectors, text and color styling, box model, positioning, and media queries), and mastering responsive layout techniques using Flexbox—culminating in the implementation and refinement of a simple website project.",
    image: dasarWeb,
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    description:
      "I have comprehensively studied JavaScript, covering the use of runtime environments (Browser, Node.js, Bun, Deno), core syntax, functions, data structures, program flow, modularization, Object-Oriented and Functional Programming paradigms, asynchronous processing, and writing high-quality, secure, and well-tested code.",
    image: dasarJS,
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description:
      "I have gained hands-on experience with the Browser Object Model (BOM) and Document Object Model (DOM), including manipulating DOM elements using JavaScript, implementing interactive behavior through event handling, and utilizing browser APIs for data storage using Web Storage and its various types.",
    image: frontendPemula,
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    description:
      "I have learned the fundamentals of React, including its core concepts (composition, declarative code, and unidirectional data flow), building reusable UI components, understanding the React ecosystem, and managing state using class components and controlled components.",
    image: reactApp,
  },
  {
    title: "Belajar Fundamental Aplikasi Web dengan React",
    description:
      "I have enhanced my React skills by learning property validation with PropTypes, implementing client-side routing using React Router, managing asynchronous processes through component lifecycle methods, handling global state efficiently with React Context, and writing cleaner, more effective code using React Hooks.",
    image: reactFundamental,
  },
];

export default data;
