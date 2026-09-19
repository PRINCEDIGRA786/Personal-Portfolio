import { motion } from "framer-motion";
import WorkExperienceCard from "./WorkExperienceCard";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "75Ways Technologies Pvt Ltd",
    position: "Software Developer Intern",
    time: "Jan 2025 - Present",
    course: "Full-Stack Web Development & Microservices",
    isCurrent: true,
    skills: ["Next.js", "TypeScript", "Python", "FastAPI", "Redux Toolkit", "MongoDB", "AWS", "Stripe"],
  },
  {
    company: "Solitaire Infosys",
    position: "Software Developer Intern",
    time: "June 2024 - July 2024",
    course: "Node.js & Backend Architecture",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Postman"],
  },
  {
    company: "Solitaire Infosys",
    position: "Frontend Developer Intern",
    time: "June 2024 - July 2024",
    course: "React.js & Modern UI Systems",
    skills: ["React.js", "React Hooks", "Tailwind CSS", "Responsive Design", "State Management"],
  },
  {
    company: "Simplilearn",
    position: "Full Stack Web Intern",
    time: "Nov 2023 - Dec 2023",
    course: "MERN Stack Development",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Git & GitHub"],
  },
];

const WorkExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-black dark:via-zinc-950 dark:to-black transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500">Experience</span> 💼
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Hands-on professional experience delivering full-stack products, performant frontends, and robust backend services.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
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
