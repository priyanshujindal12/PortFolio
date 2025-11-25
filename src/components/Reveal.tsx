import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
