import { Profiler, useRef } from "react";
import Dock from "./components/Dock";
import { VscHome,  VscAccount } from "react-icons/vsc";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LiquidEther from "./components/Liquid";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Background from "./components/Background";
import Skills from "./components/Skill";
import CodingJourney from "./components/CodingJourney";
import Project from "./components/Project";

// src/main.tsx


function App() {

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const codingRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const scrollToRef = (ref: any) => {
  ref?.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollToRef(homeRef) },
  { icon: <VscAccount size={18} />, label: 'About', onClick: () => scrollToRef(aboutRef) },
  { icon: <FaGithub size={18} />, label: 'GitHub', onClick: () => window.open("https://github.com/priyanshujindal12", "_blank") },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => window.open("https://www.linkedin.com/in/priyanshu-jindal-38a67a324/", "_blank") },
  { icon: <SiLeetcode size={18} />, label: 'LeetCode', onClick: () => window.open("https://leetcode.com/u/priyanshujindal009/") },
  { icon: <FaTwitter size={18} />, label: 'Twitter', onClick: () => window.open("https://twitter.com/", "_blank") },
];


  return (
    <div className="relative">
      <Background />
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        achievementsRef={achievementsRef}
        codingRef={codingRef}
        contactRef={contactRef}
      />
      {/* HOME SECTION */}
      <section id="home" ref={homeRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            autoDemo={true}
            autoSpeed={0.15}
            autoIntensity={0.8}
            resolution={0.5}
            className="bg-black"
          />
        </div>

        <div className="mt-10"></div>
        <Home />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <div className="w-full flex justify-center mt-12">

      </div>

      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>
      <section ref={codingRef}>
        <CodingJourney />
      </section>
        <section ref={projectsRef}>
            <Project/>
        </section>
      
      <div className="mb-20"></div>
      {/* DOCK (ALWAYS ON BOTTOM) */}
      <div className=" fixed bottom-1 left-1/2 -translate-x-1/2 z-[9999]">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className="bg-black text-white"
        />
      </div>

    </div>
  );
}

export default App;
