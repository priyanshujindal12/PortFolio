import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import Lottie from "lottie-react";
import logoAnimation from "../assets/dev.json";

const Navbar = ({
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  achievementsRef,
  codingRef,
  contactRef
}: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToRef = (ref: any) => {
    setMenuOpen(false);
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItems = [
    { label: "Home", ref: homeRef },
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Achievements", ref: achievementsRef },
    { label: "Coding", ref: codingRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      backdrop-blur-xl bg-black/40 border-b border-white/10 
      py-4 px-6 md:px-10 flex items-center justify-between">

      {/* Logo */}
      <div 
        className="w-14 h-14 flex items-center cursor-pointer"
        onClick={() => scrollToRef(homeRef)}
      >
        <Lottie animationData={logoAnimation} loop={true} />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 text-white font-medium">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(item.ref)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Resume Button */}
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex text-white items-center gap-2 bg-white/10 px-5 py-2 rounded-full hover:bg-white/20 transition"
      >
        <FiDownload size={18} />
        Resume
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-xl
          border-b border-white/10 flex flex-col text-white py-4 animate-slideDown">
          
          {navItems.map((item) => (
            <span
              key={item.label}
              className="py-3 text-center hover:text-purple-300 cursor-pointer transition"
              onClick={() => scrollToRef(item.ref)}
            >
              {item.label}
            </span>
          ))}

          {/* Mobile Resume */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-2 bg-white/10 px-5 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2"
          >
            <FiDownload size={18} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;