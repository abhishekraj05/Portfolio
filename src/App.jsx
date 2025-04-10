import style from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/Project/Projects";

function App() {
  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
