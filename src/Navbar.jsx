import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const tabs = ["Home", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Determine active tab based on scroll or current path
  const [activeTab, setActiveTab] = useState("Home");

  const handleClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false); 
    
    // If we are on the GPG page, we need to go home first, 
    // but if we are already home, just scroll.
    if (window.location.hash !== "#/") {
       window.location.href = "#/";
       // Small timeout to allow the home page to load before scrolling
       setTimeout(() => {
         const section = document.getElementById(tab.toLowerCase());
         section?.scrollIntoView({ behavior: "smooth" });
       }, 100);
    } else {
      const section = document.getElementById(tab.toLowerCase());
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 sm:flex sm:justify-center sm:items-center bg-gradient-to-r from-orange-400/[0.2] via-black to-violet-400/[0.2] p-6 border-b border-gray-500/30 backdrop-blur-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between w-full">
       
        <div className="text-white font-bold text-lg sm:hidden">Snow</div>

        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden sm:flex p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className={`relative px-5 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeTab === tab && location.pathname === "/" ? "text-black" : "text-white"
              }`}
            >
              {activeTab === tab && location.pathname === "/" && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}

          {/* GPG Link */}
          <Link
            to="/gpg"
            onClick={() => { setActiveTab("GPG"); setIsOpen(false); }}
            className={`relative px-5 py-2 rounded-full text-sm transition-colors duration-300 ${
              location.pathname === "/gpg" ? "text-black" : "text-white"
            }`}
          >
            {location.pathname === "/gpg" && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-white rounded-full z-0"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">GPG</span>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden absolute top-full left-0 w-full flex flex-col items-center bg-black/90 backdrop-blur-md rounded-b-xl py-4 px-4 border-t border-white/20 z-40 gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleClick(tab)}
                className={`w-full text-center px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                  activeTab === tab && location.pathname === "/" ? "bg-white text-black" : "text-white hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
            <Link
              to="/gpg"
              onClick={() => setIsOpen(false)}
              className={`w-full text-center px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                location.pathname === "/gpg" ? "bg-white text-black" : "text-white hover:bg-white/10"
              }`}
            >
              GPG
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}