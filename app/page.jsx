
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About.jsx";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact";


export default function HomePage() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
