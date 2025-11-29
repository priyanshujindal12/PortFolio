import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myImage from "../assets/profile.jpeg";
import TiltedCard from "./TiltedCard";

const Home = () => {
    return (
        <section
            id="about"
            className="pt-24 pb-10 px-10 text-white"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg mb-2">Hey there! I'm</p>

                    <h1 className="text-6xl font-bold">Priyanshu Jindal</h1>

                    <h2 className="text-2xl mt-3 font-semibold">
                        <Typewriter
                            words={[
                                "Full Stack Developer",
                                "Programmer",
                                "Problem Solver",
                                "Tech Enthusiast",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h2>

                    <p className="mt-4 text-lg opacity-80">
                        Transforming ideas into digital reality through clean code and
                        innovative solutions.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-6">
                        <button className="border px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                            View Projects
                        </button>
                        <button className="border px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                            Download Resume
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 80, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <TiltedCard
                        imageSrc={myImage}
                        altText="Priyanshu Jindal"
                        captionText="Full Stack Developer"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="400px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1.15}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                       
                    />

                </motion.div>

            </div>
        </section>
    );
};

export default Home;
