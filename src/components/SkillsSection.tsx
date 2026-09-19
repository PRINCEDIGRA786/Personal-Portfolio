import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Server, Layout, Cloud, ShieldCheck } from "lucide-react";

// Tech Icons from react-icons
import {
  FaPython,
  FaPhp,
  FaLaravel,
  FaAws,
  FaStripe,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFastapi,
  SiRazorpay,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiVercel,
  SiPostman,
  SiGraphql,
} from "react-icons/si";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "cloud_payments";
  level: number;
  highlight: string;
  icon: React.ReactNode;
  iconColor: string;
  proficiency: "Expert" | "Advanced" | "Proficient";
}

const skillsList: Skill[] = [
  // Backend & APIs
  {
    name: "Python",
    category: "backend",
    level: 85,
    highlight: "FastAPI, Automation, Scripting & Data Parsing",
    icon: <FaPython className="w-6 h-6" />,
    iconColor: "text-[#3776AB]",
    proficiency: "Advanced",
  },
  {
    name: "FastAPI",
    category: "backend",
    level: 85,
    highlight: "Asynchronous APIs, Pydantic, OpenAPI & Swagger",
    icon: <SiFastapi className="w-6 h-6" />,
    iconColor: "text-[#009688]",
    proficiency: "Advanced",
  },
  {
    name: "PHP",
    category: "backend",
    level: 80,
    highlight: "Server-side logic, MVC Architecture & MySQL",
    icon: <FaPhp className="w-6 h-6" />,
    iconColor: "text-[#777BB4]",
    proficiency: "Proficient",
  },
  {
    name: "Laravel",
    category: "backend",
    level: 80,
    highlight: "Eloquent ORM, Blade, RESTful APIs & Auth",
    icon: <FaLaravel className="w-6 h-6" />,
    iconColor: "text-[#FF2D20]",
    proficiency: "Proficient",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 90,
    highlight: "Event-driven runtime, Microservices & Core Modules",
    icon: <FaNodeJs className="w-6 h-6" />,
    iconColor: "text-[#5FA04E]",
    proficiency: "Expert",
  },
  {
    name: "Express.js",
    category: "backend",
    level: 90,
    highlight: "Middleware chains, Routing, REST API architecture",
    icon: <SiExpress className="w-6 h-6" />,
    iconColor: "text-gray-800 dark:text-gray-200",
    proficiency: "Expert",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: 85,
    highlight: "Aggregation pipelines, Mongoose schemas & Indexing",
    icon: <SiMongodb className="w-6 h-6" />,
    iconColor: "text-[#47A248]",
    proficiency: "Advanced",
  },
  {
    name: "GraphQL",
    category: "backend",
    level: 75,
    highlight: "Queries, Mutations, Schemas & Apollo Client",
    icon: <SiGraphql className="w-6 h-6" />,
    iconColor: "text-[#E10098]",
    proficiency: "Proficient",
  },

  // Frontend
  {
    name: "React",
    category: "frontend",
    level: 92,
    highlight: "Custom Hooks, Context API, Performance & Virtual DOM",
    icon: <FaReact className="w-6 h-6" />,
    iconColor: "text-[#61DAFB]",
    proficiency: "Expert",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 88,
    highlight: "App Router, SSR, SSG, Server Actions & SEO",
    icon: <SiNextdotjs className="w-6 h-6" />,
    iconColor: "text-black dark:text-white",
    proficiency: "Advanced",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 85,
    highlight: "Strict type safety, Generics, Interfaces & Zod",
    icon: <SiTypescript className="w-6 h-6" />,
    iconColor: "text-[#3178C6]",
    proficiency: "Advanced",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 95,
    highlight: "Responsive design systems, Arbitrary variants & Animations",
    icon: <SiTailwindcss className="w-6 h-6" />,
    iconColor: "text-[#06B6D4]",
    proficiency: "Expert",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: 92,
    highlight: "Async/Await, Closures, DOM manipulation & Event Loop",
    icon: <SiJavascript className="w-6 h-6" />,
    iconColor: "text-[#F7DF1E]",
    proficiency: "Expert",
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    level: 82,
    highlight: "Global state, Slices, AsyncThunk & RTK Query",
    icon: <SiRedux className="w-6 h-6" />,
    iconColor: "text-[#764ABC]",
    proficiency: "Advanced",
  },

  // Cloud, DevOps & Payments
  {
    name: "AWS",
    category: "cloud_payments",
    level: 80,
    highlight: "EC2, S3 buckets, IAM policies, CloudWatch & Route 53",
    icon: <FaAws className="w-6 h-6" />,
    iconColor: "text-[#FF9900]",
    proficiency: "Advanced",
  },
  {
    name: "Stripe",
    category: "cloud_payments",
    level: 88,
    highlight: "Checkout Sessions, Subscriptions, Webhooks & Card Elements",
    icon: <FaStripe className="w-6 h-6" />,
    iconColor: "text-[#635BFF]",
    proficiency: "Advanced",
  },
  {
    name: "Razorpay",
    category: "cloud_payments",
    level: 88,
    highlight: "Order Creation, UPI/NetBanking, Webhooks & Verification",
    icon: <SiRazorpay className="w-6 h-6" />,
    iconColor: "text-[#0C2340] dark:text-[#3395FF]",
    proficiency: "Advanced",
  },
  {
    name: "Git & GitHub",
    category: "cloud_payments",
    level: 90,
    highlight: "Branching strategies, Merge conflicts, PRs & GitHub Actions",
    icon: <FaGitAlt className="w-6 h-6" />,
    iconColor: "text-[#F05032]",
    proficiency: "Expert",
  },
  {
    name: "Docker",
    category: "cloud_payments",
    level: 75,
    highlight: "Dockerfile, Multi-stage builds, Containerization & Compose",
    icon: <FaDocker className="w-6 h-6" />,
    iconColor: "text-[#2496ED]",
    proficiency: "Proficient",
  },
  {
    name: "Vercel & Cloud CI/CD",
    category: "cloud_payments",
    level: 90,
    highlight: "Automated previews, Edge Functions, Environment Configs",
    icon: <SiVercel className="w-6 h-6" />,
    iconColor: "text-black dark:text-white",
    proficiency: "Expert",
  },
  {
    name: "Postman",
    category: "cloud_payments",
    level: 85,
    highlight: "API documentation, Automated test scripts & Environments",
    icon: <SiPostman className="w-6 h-6" />,
    iconColor: "text-[#FF6C37]",
    proficiency: "Advanced",
  },
];

type CategoryFilter = "all" | "backend" | "frontend" | "cloud_payments";

const categoryPills: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All Skills", icon: <Sparkles className="w-4 h-4" /> },
  { id: "backend", label: "Backend & APIs", icon: <Server className="w-4 h-4" /> },
  { id: "frontend", label: "Frontend", icon: <Layout className="w-4 h-4" /> },
  { id: "cloud_payments", label: "Cloud & Payments", icon: <Cloud className="w-4 h-4" /> },
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    return skillsList.filter((skill) => {
      const matchesCategory =
        selectedCategory === "all" || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-black dark:via-zinc-950 dark:to-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Full-Stack Technical Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500">Skills</span> & Tools ⚡
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light"
          >
            A battle-tested stack spanning Python, FastAPI, PHP, Laravel, Node.js, React, AWS, Stripe, and Razorpay — geared for robust microservices, payment gateways, and scalable cloud architectures.
          </motion.p>
        </div>

        {/* Interactive Recruiter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryPills.map((pill) => {
              const active = selectedCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setSelectedCategory(pill.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer border ${
                    active
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/25 scale-105"
                      : "bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  {pill.icon}
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>

          {/* Recruiter Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Python, AWS, Stripe)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon + Name + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 border border-gray-100 dark:border-white/5 ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400">
                          {skill.category === "backend"
                            ? "Backend & APIs"
                            : skill.category === "frontend"
                            ? "Frontend & UI"
                            : "Cloud & Payments"}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        skill.proficiency === "Expert"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                          : skill.proficiency === "Advanced"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-300 dark:border-purple-800"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300 dark:border-blue-800"
                      }`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>

                  {/* Highlights */}
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                {/* Progress Bar with Percentage */}
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5 text-gray-700 dark:text-gray-300">
                    <span className="text-[11px] text-gray-400">Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No matching skills found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-3 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
