

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechMarquee from "./components/TechMarquee";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070610] text-white">
      <Navbar />
      <main>
        <Hero />
          <About />
            <Experience />
              <Skills />
                <Projects />
                <Contact />
<TechMarquee />
<Footer />
      </main>
    </div>
  );
}

export default App;
