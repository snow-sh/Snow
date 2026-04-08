import { motion } from "framer-motion";


export default function TechStackSection() {
  const techs = [
    "Unity 6", "Next.js", "Node.js", "Express", "MongoDB", "Linux", "IRC"
  ];

  return (
    <section className="relative w-full py-20 bg-black text-white px-4 md:px-8 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[60vw] h-[40vh] bg-gradient-to-bl from-orange-400 to-transparent opacity-30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <motion.div
        className="z-10 max-w-4xl mx-auto text-center flex flex-col gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Tech Stack</h3>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              className="px-4 py-2 border border-white/20 rounded-full text-white/80 backdrop-blur-md text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
