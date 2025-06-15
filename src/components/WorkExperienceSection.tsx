import { motion } from "framer-motion";
import WorkExperienceCard from "./WorkExperienceCard";

const experiences = [
  {
    company: "Solitaire Infoyses",
    position: "Intern",
    time: "June-July, 2024",
    course: "React JS",
    skills: ["React", "Hooks", "Tailwind CSS"],
  },
  {
    company: "Solitaire Infoyses",
    position: "Intern",
    time: "June-July, 2024",
    course: "Node JS",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    company: "SimpliLearn",
    position: "Intern",
    time: "Nov-Dec, 2023",
    course: "MERN STACK",
    skills: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    company: "75Ways Pvt Ltd",
    position: "Developer Intern",
    time: "Jan 2025 - Present",
    course: "Full-stack Development",
    isCurrent: true,
    skills: ["Next.js", "TypeScript", "Redux", "MongoDB", "Vercel"],
  },
];

const WorkExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-100 to-white dark:from-black dark:to-gray-900 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <WorkExperienceCard {...exp} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkExperienceSection;
