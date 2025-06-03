import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
