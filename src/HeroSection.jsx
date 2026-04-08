
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.9]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full bg-black flex items-center justify-center text-center px-4 md:px-8 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[80vw] h-[30vh] bg-gradient-to-tr from-orange-400 to-transparent opacity-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none sm:top-52 sm:w-[60vw]" />
      <div className="absolute bottom-0 right-0 w-[80vw] h-[30vh] bg-gradient-to-bl from-violet-400 to-transparent opacity-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none sm:bottom-52 sm:w-[60vw]" />

      <motion.h1
        style={{ y, scale }}
        className="absolute text-[30vw] font-extrabold mb-70 text-white/5 select-none z-0 tracking-tight leading-none"
      >
        Snow
      </motion.h1>

      <motion.div
        className="z-10 flex flex-col items-center gap-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
       
        <div className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs sm:text-sm backdrop-blur-md">
          user@Snow: ~ $ currently_learning --unity-6
        </div>

      
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance">
          Exploring game physics 
          <br className="hidden sm:block" />
          and web systems.
        </h2>

   
        <p className="text-white/60 text-sm sm:text-base max-w-2xl">
          Currently deep-diving into Unity 6 mechanics. Outside of game dev, I build MERN stack websites and manage my system on Arch. You can usually find me on IRC.
        </p>

    
        <button className="mt-2 sm:mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold shadow-lg text-sm sm:text-base">
          See My Projects
        </button>
      </motion.div>
    </div>
  );
}