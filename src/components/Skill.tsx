import LogoLoop from "./LogoLoop";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiGit, SiGithub, SiCplusplus, SiPython,
    SiDocker, SiExpress, SiNodedotjs, SiMongodb, SiMysql
} from "react-icons/si";
import BlurText from "./BlurText";

const techLogos = [
    { node: <SiReact size={60} className="text-cyan-400" />, title: "React" },
    { node: <SiNextdotjs size={60} className="text-white" />, title: "Next.js" },
    { node: <SiTypescript size={60} className="text-blue-400" />, title: "TypeScript" },
    { node: <SiTailwindcss size={60} className="text-teal-400" />, title: "Tailwind" },
    { node: <SiGit size={60} className="text-orange-500" />, title: "Git" },
    { node: <SiGithub size={60} className="text-gray-200" />, title: "GitHub" },
    { node: <SiCplusplus size={60} className="text-blue-600" />, title: "C++" },
    { node: <SiPython size={60} className="text-yellow-300" />, title: "Python" },
    { node: <SiNodedotjs size={60} className="text-green-500" />, title: "Node.js" },
    { node: <SiExpress size={60} className="text-gray-300" />, title: "Express.js" },
    { node: <SiDocker size={60} className="text-blue-500" />, title: "Docker" },
    { node: <SiMongodb size={60} className="text-green-400" />, title: "MongoDB" },
    { node: <SiMysql size={60} className="text-blue-500" />, title: "MySQL" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 text-white">
            {/* Heading */}
            <h1 className="text-center">
                <BlurText
                    text="Tech Aresnal"
                    delay={150}
                    animateBy="words"
                    direction="top"

                    className="flex justify-center text-8xl font-bold text-purple-400 "
                />
            </h1>

            <p className="text-center text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                Tools, languages & frameworks that help me build scalable digital impact.
            </p>

            {/* Logo Scrolling Loop */}
            <div className="w-full flex justify-center mt-20 mb-10 h-32 overflow-hidden">
                <LogoLoop
                    logos={techLogos}
                    speed={140}
                    direction="left"
                    logoHeight={60}
                    gap={80}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#111111"
                    ariaLabel="Tech Stack"
                    renderItem={(item, key) => (
                        <div key={key} className="flex flex-col items-center gap-2">
                            {/* ICON */}
                            <div className="transition-transform duration-300 group-hover:scale-125">
                                {"node" in item ? item.node : null}
                            </div>

                            {/* TITLE IF EXISTS */}
                            {item.title && (
                                <span className="text-sm text-gray-300 opacity-70 group-hover:opacity-100 transition-all duration-200">
                                    {item.title}
                                </span>
                            )}
                        </div>
                    )}
                />

            </div>
        </section>
    );
}
