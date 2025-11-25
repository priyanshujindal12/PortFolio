import { useRef } from "react";
import Dock from "./components/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import { FaGithub, FaTwitter } from "react-icons/fa";
import LiquidEther from "./components/Liquid";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Background from "./components/Background";

function App() {

  
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const codingRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <FaGithub size={18} />, label: 'GitHub', onClick: () => window.open("https://github.com/priyanshujindal12", "_blank") },
    { icon: <FaTwitter size={18} />, label: 'Twitter', onClick: () => window.open("https://twitter.com/", "_blank") },
  ];

  return (
    <div className="relative">
      <Background />

      {/* ✅ Pass refs correctly */}
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

      {/* DOCK (ALWAYS ON BOTTOM) */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-[9999]">
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
