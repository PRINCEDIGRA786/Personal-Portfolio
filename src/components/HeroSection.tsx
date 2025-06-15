import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen mt-16 md:mt-0 flex items-center justify-center px-4 bg-white dark:bg-black text-gray-800 dark:text-white transition-colors duration-300"
    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="text-purple-600 dark:text-purple-400">Prince</span> 👋
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-8 font-light leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I craft seamless digital experiences through{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            web development
          </span>
          , blending creativity with code. Whether it’s the{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Full Stack
          </span>{" "}
          or exploring emerging tech, I thrive on building things that matter.
          I’m driven by curiosity, sharpened by consistency, and always ready to embrace the next challenge.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            {
              href: "https://github.com/PRINCEDIGRA786/",
              icon: <FaGithub className="mr-2" />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/prince-368909285/",
              icon: <FaLinkedin className="mr-2" />,
              label: "LinkedIn",
            },
            {
              href: "https://vercel.com/new?teamSlug=princedigra786",
              icon: <SiVercel className="mr-2" />,
              label: "Vercel",
            },
            {
              href: "/resume.pdf",
              icon: <FaFileAlt className="mr-2" />,
              label: "View CV",
              gradient: true,
            },
          ].map(({ href, icon, label, gradient }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-semibold ${
                gradient
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 text-black dark:text-white"
              } hover:scale-105 transition-transform`}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {icon} {label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
