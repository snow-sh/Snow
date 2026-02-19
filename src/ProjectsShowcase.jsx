

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import img1 from './assets/portfolio1.png';
import img2 from './assets/portfolio2.png';
import img3 from './assets/portfolio3.png';
import img4 from './assets/portfolio4.png';
import img5 from './assets/portfolio5.png';
import img6 from './assets/portfolio6.png';
import img7 from './assets/portfolio66.gif';



const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, liveUrl, codeUrl } = project;

  return (
    <motion.div
      className="
        relative flex flex-col items-center p-4 sm:p-6 rounded-lg shadow-xl overflow-hidden group
        bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg
        border border-white/20 hover:border-violet-500/50
        transition-all duration-300
        w-[300px] sm:w-[400px] lg:w-[420px] xl:w-[450px] flex-shrink-0
      "
      // This card already has a great whileInView animation, so we'll keep it!
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-orange-400 to-transparent opacity-10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:opacity-20 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-bl from-violet-400 to-transparent opacity-10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative z-10 w-full">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-36 sm:h-48 object-cover rounded-md mb-3 sm:mb-4 border border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">{title}</h3>
        <p className="text-gray-300 text-center mb-4 sm:mb-6 text-sm sm:text-base h-10 sm:h-12">{description}</p>
        <div className="flex justify-center space-x-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors duration-300 shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live
            </motion.a>
          )}
          {codeUrl && (
            <motion.a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-gray-700 text-gray-200 font-semibold rounded-full hover:bg-gray-600 transition-colors duration-300 shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const ProjectsShowcase = () => {
    const projects = [
          {
      title: "Portfolio website",
      description: "My Weird Portfolio created in react.",
      imageUrl: img4,
      liveUrl: "https://snow-sh.github.io/cx-7/",
      codeUrl: "https://github.com/snow-sh/cx-7",
    },
              {
      title: "Fast Food Website",
      description: "This website is created in Next JS",
      imageUrl: img7,
      liveUrl: "https://burgary-khaki.vercel.app/",
      codeUrl: "https://github.com/snow-sh/fast_food_website",
    },
 
    {
      title: "Restuarant Website",
      description: "A Restuarent website showcasing my skills and projects.",
      imageUrl: img2,
      liveUrl: "https://snow-sh.github.io/resturant-website/",
      codeUrl: "https://github.com/snow-sh/resturant-website",
    },
    {
      title: "Chat App",
      description: "A Full Stack Chat app Created in MERN.",
      imageUrl: img3,
      liveUrl: "https://kona-a8bn.onrender.com/",
      // codeUrl: "https://github.com/",
    },

    {
      title: "Steganography Tool",
      description: "Using this tool you can hide content in text files, images, and in videos.",
      imageUrl: img5,
      liveUrl: "https://snow-sh.github.io/steganography/",
      codeUrl: "https://github.com/snow-sh/steganography",
    },
       {
      title: "Gym Website",
      description: "A fully functional Gym website built with React.",
      imageUrl: img1,
      liveUrl: 'https://snow-sh.github.io/gym-website/',
      codeUrl: "https://github.com/snow-sh/gym-website",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const carouselTrackRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const calculateOffset = () => {
    if (!carouselTrackRef.current) return;
    const track = carouselTrackRef.current;
    const container = track.parentElement;
    const cards = Array.from(track.children);
    if (cards.length === 0) return;
    const containerWidth = container.offsetWidth;
    const card = cards[currentIndex];
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 32;
    const newOffset = (containerWidth / 2) - (cardWidth / 2) - (currentIndex * (cardWidth + gap));
    setTrackOffset(newOffset);
  };

  useEffect(() => {
    window.addEventListener('resize', calculateOffset);
    calculateOffset();
    return () => {
      window.removeEventListener('resize', calculateOffset);
    };
  }, [currentIndex, projects.length]);


  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    autoplayIntervalRef.current = setInterval(goToNext, 2000);
    return () => clearInterval(autoplayIntervalRef.current);
  }, [projects.length]);

  const handleManualNavigation = (action, index = null) => {
    clearInterval(autoplayIntervalRef.current);
    if (action === 'next') goToNext();
    else if (action === 'previous') goToPrevious();
    else if (action === 'dot' && index !== null) setCurrentIndex(index);
  };

  // --- ANIMATION VARIANTS FOR SCROLL-TRIGGERED ANIMATION ---
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Animates children one after the other
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 px-0 md:px-8 bg-black overflow-hidden">
      {/* Background blobs are NOT animated, as requested */}
      <div className="absolute top-20 left-1/2 w-[80vw] h-[30vh] bg-gradient-to-tr from-orange-400 to-transparent opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-20 right-1/2 w-[80vw] h-[30vh] bg-gradient-to-bl from-violet-400 to-transparent opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none" />

      {/* This motion.div is the container for all scroll animations */}
      <motion.div
        className="relative z-10 container mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 px-4"
          variants={itemVariants} // Animates with the parent
        >
          My Latest Projects
        </motion.h2>

        {/* The carousel and its buttons will animate in as one block */}
        <motion.div className="relative overflow-hidden py-4" variants={itemVariants}>
          <motion.div
            ref={carouselTrackRef}
            className="flex space-x-8 px-[calc(50%-150px)] sm:px-0"
            animate={{ x: trackOffset }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            <AnimatePresence initial={false}>
              {projects.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {projects.length > 1 && (
            <>
              {/* Note: I've preserved your button style changes from the last prompt */}
              <button
                onClick={() => handleManualNavigation('previous')}
                className="absolute left-2 sm:left-[-1rem] md:left-2 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full text-white shadow-lg hover:bg-violet-700 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Previous Project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleManualNavigation('next')}
                className="absolute right-2 sm:right-[-1rem] md:right-2 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full text-white shadow-lg hover:bg-violet-700 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Next Project"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </motion.div>

        {/* The navigation dots will be the last item to animate in */}
        {projects.length > 1 && (
          <motion.div className="flex justify-center mt-8 space-x-3" variants={itemVariants}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-violet-500' : 'bg-gray-700 hover:bg-gray-500'
                }`}
                onClick={() => handleManualNavigation('dot', index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsShowcase;