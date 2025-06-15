import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Frontend", "Backend", "Others"] as const;

const descriptions: Record<(typeof categories)[number], string> = {
  Frontend: "Tools for UI & Interaction",
  Backend: "Logic, APIs & Databases",
  Others: "Programming Tools, Deployment & Essentials",
};

const tasks: Record<(typeof categories)[number], string> = {
  Frontend: "Building interactive UIs, animations, and responsive design.",
  Backend: "Handling APIs, database logic, and server communication.",
  Others: "Managing version control, deployments, and tooling.",
};

const skillsData = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Redux", level: 75 },
    { name: "Framer Motion", level: 70 },
    { name: "Bootstrap", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "JWT/Auth", level: 70 },
    { name: "TypeScript", level: 80 },
    { name: "GraphQL", level: 70 },
    { name: "Socket.io", level: 65 },
  ],
  Others: [
    { name: "Git & GitHub", level: 90 },
    { name: "Vercel", level: 85 },
    { name: "Render", level: 80 },
    { name: "Netlify", level: 85 },
    { name: "REST APIs", level: 85 },
    { name: "Postman", level: 80 },
    { name: "C/C++", level: 85 },
  ],
};

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % categories.length);
  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));

  return (
    <section
      id="skills"
      className="min-h-screen px-4 py-6 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Card with AnimatePresence */}
          <div className="relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="backdrop-blur-xl border border-white/20 bg-white/30 dark:bg-white/10 transition-all duration-300 hover:shadow-2xl h-[400px]">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col justify-center text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activeCategory}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {descriptions[activeCategory]}
                    </p>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      <p>{tasks[activeCategory]}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 hidden group-hover:flex p-2 rounded-full bg-white/70 dark:bg-white/10 hover:bg-purple-500 transition"
            >
              <ChevronLeft className="text-black dark:text-white cursor-pointer" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 hidden group-hover:flex p-2 rounded-full bg-white/70 dark:bg-white/10 hover:bg-purple-500 transition"
            >
              <ChevronRight className="text-black dark:text-white cursor-pointer" />
            </button>
          </div>

          {/* Right: Skill Cards with Animation */}
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skillsData[activeCategory].map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full flex flex-col justify-between rounded-xl p-4 shadow-md border border-white/20 bg-gradient-to-r from-purple-400/30 to-blue-400/20 dark:from-purple-800/20 dark:to-blue-700/10 backdrop-blur-sm">
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 shadow-md shadow-purple-400 dark:shadow-purple-700" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
