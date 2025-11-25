import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="px-8 py-20 text-white max-w-7xl mx-auto">

      <Reveal>
        <h1 className="text-center text-6xl md:text-7xl font-extrabold tracking-wide">
          ABOUT ME
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-center text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
          Passionate about transforming innovative ideas into impactful digital solutions
          that make a real difference in the world.
        </p>
      </Reveal>

      {/* MAIN CONTENT */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-wide">
              Turning Ideas into Scalable Digital Experiences
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              I’m a Computer Science student who loves transforming complex problems into
              elegant, efficient, and user-friendly digital solutions.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              With hands-on experience in full-stack development, automation, and AI-driven
              workflows, I’ve built projects that solve real-world challenges.
            </p>

            <div className="flex gap-10 mt-10">
              <div>
                <p className="text-4xl font-extrabold">2</p>
                <p className="text-gray-400 text-sm">Hackathons Led</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">3+</p>
                <p className="text-gray-400 text-sm">Major Projects</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">2028</p>
                <p className="text-gray-400 text-sm">Graduation</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT CONTENT */}
        <Reveal>
          <div className="border border-white/10 bg-white/5 rounded-xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-6 tracking-wide">
              CORE EXPERTISE
            </h3>

            <ul className="space-y-4">
              {[
                "Full-Stack Development",
                "Team Management",
                "Problem Solving",
              ].map((skill, i) => (
                <li
                  key={i}
                  className="border border-white/10 p-4 rounded-lg text-gray-200 
                  hover:bg-white/10 transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;
