
import React, { useState, useRef } from 'react';
import { FaGithub, FaFacebook, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const res = await fetch('https://formsubmit.co/snoww.here@proton.me', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setMessageSent(true);
        formRef.current.reset();
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit form.');
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24 px-4 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-10 left-0 w-[60vw] h-[40vh] bg-gradient-to-tr from-violet-500 to-transparent opacity-20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[60vw] h-[40vh] bg-gradient-to-bl from-orange-400 to-transparent opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <motion.div
        className="max-w-xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="text-violet-400 uppercase font-semibold tracking-widest mb-2">Contact Me</p>
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-white/70 mb-8">
          Have a project in mind? Let's work together to bring it to life.
        </p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-5 mb-12"
          variants={fadeUp}
          custom={2}
        >
          <a
            href="https://github.com/snow-sh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552133309014"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://discord.gg/yKJhF5HSrm"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <FaDiscord size={20} />
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#0d1117] p-6 rounded-xl shadow-xl border border-white/10 space-y-5"
          variants={fadeUp}
          custom={3}
        >
          <h3 className="text-xl font-semibold flex items-center gap-2 text-white mb-2">
            <FaEnvelope className="text-orange-400" /> Send Me a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-black border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-black border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-black border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />

          {/* <button
            type="submit"
            className="w-full bg-gradient-to-br from-violet-500 via-purple-600 to-orange-400 text-white py-3 rounded-md font-semibold relative overflow-hidden group transition-all"
          >
            <span className="relative z-10">Send Message ✈️</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-10 transition duration-300" />
          </button> */}
<motion.button
  type="submit"
  whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)' }}
  whileTap={{ scale: 0.95 }}
  className="w-full bg-gradient-to-r from-orange-400/10 via-black to-violet-600/10 text-white py-3 rounded-md font-semibold relative overflow-hidden group transition-all shadow-md hover:shadow-lg"
>
  <span className="relative z-10">Send Message ✈️</span>
  <span className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-10 transition duration-300" />
</motion.button>



          {messageSent && (
            <p className="text-green-400 text-sm text-center mt-3">✅ Message sent successfully!</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
