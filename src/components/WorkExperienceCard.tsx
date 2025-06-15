import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaBriefcase } from "react-icons/fa";

interface WorkExperienceCardProps {
  company: string;
  position: string;
  time: string;
  course: string;
  isCurrent?: boolean;
  skills?: string[];
}

const WorkExperienceCard = ({
  company,
  position,
  time,
  course,
  isCurrent = false,
  skills = [],
}: WorkExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative pl-6"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400 border-4 border-white dark:border-black" />

      {/* Connecting Line */}
      <div className="absolute left-[6px] top-10 w-1 h-full bg-gradient-to-b from-purple-400 to-purple-700 dark:from-purple-600 dark:to-purple-900 opacity-30" />

      <Card
        className={`p-6 border-l-[6px] ${
          isCurrent
            ? "border-green-500 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-800/30 dark:to-green-900/10"
            : "border-purple-500 bg-white/60 dark:bg-white/5"
        } backdrop-blur-xl shadow-md transition-all duration-300`}
      >
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-purple-500 dark:text-purple-400 text-lg" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {company}
            </h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{position}</span> — {course}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">{time}</p>

          {/* Tech Skills */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-white font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WorkExperienceCard;
