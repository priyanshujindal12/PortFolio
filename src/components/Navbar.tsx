import { FiDownload } from "react-icons/fi";
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

  const scrollToRef = (ref: any) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    backdrop-blur-xl bg-black/40 border-b border-white/10 
                    py-4 px-10 flex items-center justify-between">

      {/* LEFT — Lottie Logo */}
      <div 
        className="w-14 h-14 flex items-center cursor-pointer"
        onClick={() => scrollToRef(homeRef)}
      >
        <Lottie animationData={logoAnimation} loop={true} />
      </div>

      {/* CENTER NAV LINKS */}
      <ul className="hidden md:flex gap-10 text-white font-medium">
        <li className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(homeRef)}>Home</li>

        <li className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(aboutRef)}>About</li>

        <li className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(skillsRef)}>Skills</li>

        <li className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(projectsRef)}>Projects</li>

        <li className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(achievementsRef)}>Achievements</li>

        <li className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(codingRef)}>Coding</li>

        <li className="cursor-pointer hover:text-purple-300 transition"
            onClick={() => scrollToRef(contactRef)}>Contact</li>
      </ul>

      {/* RIGHT — Resume Button */}
      <button className="text-white flex items-center gap-2 
                         bg-white/10 px-5 py-2 rounded-full 
                         hover:bg-white/20 transition">
        <FiDownload size={18} />
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
