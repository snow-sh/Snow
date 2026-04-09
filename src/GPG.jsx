import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GPG() {
  const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

[PASTE YOUR ACTUAL KEY CONTENT HERE]

-----END PGP PUBLIC KEY BLOCK-----`;

  return (
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-[80vw] h-[30vh] bg-gradient-to-tr from-orange-400 to-transparent opacity-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none sm:top-52 sm:w-[60vw]" />
      <div className="absolute bottom-0 right-0 w-[80vw] h-[30vh] bg-gradient-to-bl from-violet-400 to-transparent opacity-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none sm:bottom-52 sm:w-[60vw]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 w-full max-w-2xl bg-[#0d1117]/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-mono text-violet-400">~/public_key.gpg</h2>
          <Link to="/" className="text-xs text-white/40 hover:text-white transition-colors">
            [ back to home ]
          </Link>
        </div>

        <div className="relative group">
          <pre className="text-[10px] md:text-xs font-mono text-gray-300 bg-black/50 p-5 rounded-lg border border-white/5 overflow-x-auto leading-relaxed select-all">
            {publicKey}
          </pre>
          
          <button 
            onClick={() => navigator.clipboard.writeText(publicKey)}
            className="mt-4 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-xs text-white/70 transition-all active:scale-95"
          >
            Copy Key to Clipboard
          </button>
        </div>
      </motion.div>
    </div>
  );
}