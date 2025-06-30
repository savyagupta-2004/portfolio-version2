import { DecoderText } from "./decoder-text";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Engineer"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-36 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="hidden flex-col md:flex c-space">
        <motion.h1
          className="text-4xl font-bold text-red-300 drop-shadow-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          {/* <DecoderText text={config.name} delay={500} /> */}
          Hi, I'm Savya Gupta
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-semibold text-red-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-8xl text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-red-400"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Crafting Digital Realities
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-bold text-red-300 drop-shadow-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Savya
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-red-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Full Stack Alchemy
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-7xl text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-red-400"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Building Your Vision
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
