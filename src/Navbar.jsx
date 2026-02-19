
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // uses lucide icons

const tabs = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false); // close menu on click
    const section = document.getElementById(tab.toLowerCase());
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <div className="sticky top-0 sm:top-6 z-50 sm:flex sm:justify-center sm:items-center bg-transparent p-4">
 <div className="sticky top-0 sm:top-0 z-50 sm:flex sm:justify-center sm:items-center bg-gradient-to-r from-orange-400/[0.2] via-black to-violet-400/[0.2] p-6 border border-b-gray-500">


      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        {/* Logo or Site name */}
        <div className="text-white font-bold text-lg sm:hidden">Snow</div>

        {/* Hamburger button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className={`relative px-5 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeTab === tab ? "text-black" : "text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          // <motion.div
          //   initial={{ opacity: 0, height: 0 }}
          //   animate={{ opacity: 1, height: "auto" }}
          //   exit={{ opacity: 0, height: 0 }}
          //   className="sm:hidden mt-3 flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl py-2 px-4 border border-white/20"
          // >
          <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  className="sm:hidden absolute top-full left-0 w-full flex flex-col items-center bg-white/10 backdrop-blur-md rounded-b-xl py-2 px-4 border-t border-white/20 z-40"
>

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleClick(tab)}
                className={`relative w-full text-left px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                  activeTab === tab ? "text-black bg-white" : "text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
