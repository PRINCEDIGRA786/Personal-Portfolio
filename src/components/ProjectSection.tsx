import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Layers, Code2, Globe } from "lucide-react";

// Project Preview Assets
import bazaarhubImg from "../assets/bazaarhub.png";
import apiappImg from "../assets/apiapp.png";
import instagramImg from "../assets/instagram.png";
import netflixImg from "../assets/netflixcopy.png";
import parcelhanger from "../assets/parcel-hanger.png";
import nexifyIndia from "../assets/nexify.png";
import jobsBankImg from "../assets/jobs-bank.png";
import portfolioImg from "../assets/portfolio.png";
import weatherImg from "../assets/weather.png";
import chatgptImg from "../assets/chatgpt.png";
import dribbleImg from "../assets/dribble.png";
import hairSkinLuxe from "../assets/hair-skin-luxe.png";

// High-fidelity Project Mockups
import immigrationImg from "../assets/immigration.jpg";
import dentistImg from "../assets/dentist.jpg";
import salonImg from "../assets/salon.jpg";

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pic: string;
  link: string;
  category: "featured" | "platform" | "ui";
  tags: string[];
  role: string;
}

const allProjects: Project[] = [
  {
    id: "immigration",
    name: "Aarohan Immigration",
    tagline: "Multi-Country Visa & PR Advisory Platform",
    description:
      "A comprehensive immigration consulting portal featuring automated CRS point calculations for Canada Express Entry, Australia SkillSelect, and Germany Opportunity Card with an intuitive appointment booking workflow.",
    pic: immigrationImg,
    link: "https://immigration-rho-seven.vercel.app/",
    category: "featured",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Lead Flow"],
    role: "Full-Stack Development & Architecture",
  },
  {
    id: "salon",
    name: "Head & Lounge Salon",
    tagline: "Luxury Family Salon & Wellness Sanctuary",
    description:
      "An ultra-premium salon experience platform equipped with 3D spatial interactive service cards, VIP suite bookings, bridal makeover packages, and dynamic treatment price guides.",
    pic: salonImg,
    link: "https://head-lounge-salon.vercel.app/",
    category: "featured",
    tags: ["Next.js", "Tailwind CSS", "3D Tilt Cards", "Booking Engine", "Luxury UI"],
    role: "Frontend Engineering & Motion Design",
  },
  {
    id: "dentist",
    name: "Lumina Dental Studio",
    tagline: "Luxury Healthcare & Appointment Scheduling",
    description:
      "Modern healthcare web application offering interactive doctor appointment scheduling, cosmetic & restorative dental procedure catalogs, and responsive patient care workflows.",
    pic: dentistImg,
    link: "https://dentistui.vercel.app/",
    category: "featured",
    tags: ["React", "Tailwind CSS", "Appointment Engine", "Framer Motion", "Healthcare UI"],
    role: "Full-Stack UI & State Architecture",
  },
  {
    id: "nexify",
    name: "Nexify India",
    tagline: "Beauty & Cosmetics Commercial Portal",
    description:
      "Commercial brand website for a cosmetics and beauty product enterprise, complete with a comprehensive catalog showcase and a dedicated administrative management control panel.",
    pic: nexifyIndia,
    link: "https://www.nexifyindia.in/",
    category: "platform",
    tags: ["React", "Tailwind CSS", "Admin Dashboard", "eCommerce"],
    role: "Full-Stack Engineering & Admin Panel",
  },
  {
    id: "parcel-hanger",
    name: "Parcel Hanger",
    tagline: "Real-Time Package Tracking Platform",
    description:
      "End-to-end logistics and parcel tracking web app built with MERN stack, delivering live delivery status tracking, courier management, and an administrative dispatch suite.",
    pic: parcelhanger,
    link: "https://www.info-parcel-hanger.com/",
    category: "platform",
    tags: ["MERN Stack", "Express.js", "MongoDB", "Tailwind CSS", "Admin Tools"],
    role: "Full-Stack MERN Architecture",
  },
  {
    id: "jobs-bank",
    name: "JobsBank",
    tagline: "Global Employment & Recruitment Hub",
    description:
      "Recruitment portal connecting international candidates and employers with advanced vacancy search filters, applicant tracking, and an administrative dashboard.",
    pic: jobsBankImg,
    link: "https://global-jobs-bank.vercel.app/",
    category: "platform",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Talent Search"],
    role: "Full-Stack Development & DB Design",
  },
  {
    id: "bazaarhub",
    name: "Bazaarhub",
    tagline: "Full-Stack Online Marketplace",
    description:
      "Modern eCommerce web platform with instant product filtering, shopping cart state management, checkout with Stripe payments, and order tracking.",
    pic: bazaarhubImg,
    link: "https://ecommercemern-y3wn-dbfj8m1qv-princedigra786.vercel.app",
    category: "platform",
    tags: ["MERN Stack", "Stripe", "Redux", "Tailwind CSS", "Express.js"],
    role: "Full-Stack & Fintech Integration",
  },
  {
    id: "apiapp",
    name: "Apiapp",
    tagline: "Dynamic REST API Builder & Mock Server",
    description:
      "Developer productivity tool to build, customize, test, and deploy mock REST endpoints dynamically for frontend and mobile prototyping.",
    pic: apiappImg,
    link: "https://apiapp-frontend-i8deug2ca-princedigra786s-projects.vercel.app/",
    category: "platform",
    tags: ["React", "Node.js", "REST APIs", "Express.js", "Developer Tool"],
    role: "API Engine & System Architecture",
  },
  {
    id: "hair-skin-luxe",
    name: "Hair Skin Luxe",
    tagline: "Dermatology & Skin Care Brand",
    description:
      "Sleek commercial brand showcase website featuring premium hair and skincare products with an elegant responsive visual presentation.",
    pic: hairSkinLuxe,
    link: "https://www.hairskinluxe.com/",
    category: "ui",
    tags: ["React", "Tailwind CSS", "Modern UI", "Brand Experience"],
    role: "Frontend Design & Performance",
  },
  {
    id: "chatgpt",
    name: "ChatGPT AI Studio",
    tagline: "Intelligent Conversational Assistant",
    description:
      "Interactive AI chatbot web app powered by OpenAI API, with prompt templates, code syntax highlighting, and conversation history preservation.",
    pic: chatgptImg,
    link: "https://client-ai-iota.vercel.app/",
    category: "ui",
    tags: ["React", "OpenAI API", "Node.js", "Tailwind CSS"],
    role: "AI Integration & UI Streaming",
  },
  {
    id: "netflix",
    name: "Netflix Streaming UI",
    tagline: "Cinematic Media Streaming Experience",
    description:
      "Responsive video streaming UI featuring TMDB API integration, dynamic movie trailer previews, genre carousels, and responsive video players.",
    pic: netflixImg,
    link: "https://netflixcopy-oas4.vercel.app/",
    category: "ui",
    tags: ["React", "TMDB API", "Tailwind CSS", "Video Player"],
    role: "UI Engineering & API Consumption",
  },
  {
    id: "instagram",
    name: "Instagram Web",
    tagline: "Social Media Platform Clone",
    description:
      "Social platform clone built with MERN stack and Tailwind CSS, featuring feed posts, photo uploads, like counters, comments, and profile customization.",
    pic: instagramImg,
    link: "https://instagramclone-frontend.vercel.app/",
    category: "ui",
    tags: ["React", "MongoDB", "Cloudinary", "Express.js"],
    role: "Full-Stack Social Architecture",
  },
  {
    id: "weather",
    name: "Weather Forecast Engine",
    tagline: "Live Meteorological Analytics",
    description:
      "Dynamic weather application providing 7-day predictive analytics, atmospheric indicators, and real-time city weather searches via public APIs.",
    pic: weatherImg,
    link: "https://weatherapp-one-fawn.vercel.app/",
    category: "ui",
    tags: ["React", "OpenWeather API", "Tailwind CSS", "Geolocation"],
    role: "Frontend & Geolocation API",
  },
  {
    id: "dribbble",
    name: "Dribbble Showcase & Auth",
    tagline: "Creative Onboarding & Auth Flow",
    description:
      "Polished onboarding and login/signup interfaces inspired by Dribbble's signature aesthetic, built with fluid animations and responsive form handling.",
    pic: dribbleImg,
    link: "https://dribbleintern-3p6q.vercel.app/",
    category: "ui",
    tags: ["React", "CSS Animation", "Auth UI", "Framer Motion"],
    role: "Design System & Micro-Animations",
  },
  {
    id: "portfolio-old",
    name: "Portfolio v1",
    tagline: "Original Developer Portfolio",
    description:
      "Previous personal portfolio iteration built with MERN stack and Tailwind CSS showcasing earlier projects and experiments.",
    pic: portfolioImg,
    link: "https://portfoliofrontend-eight.vercel.app/",
    category: "ui",
    tags: ["React", "Tailwind CSS", "Node.js", "Express"],
    role: "Web Design & Development",
  },
];

type CategoryFilter = "all" | "featured" | "platform" | "ui";

const categoryTabs: { id: CategoryFilter; label: string; icon: React.ReactNode; count: number }[] = [
  {
    id: "all",
    label: "All Works",
    icon: <Globe className="w-4 h-4" />,
    count: allProjects.length,
  },
  {
    id: "featured",
    label: "Featured Highlights",
    icon: <Sparkles className="w-4 h-4 text-amber-500" />,
    count: allProjects.filter((p) => p.category === "featured").length,
  },
  {
    id: "platform",
    label: "Web Apps & Platforms",
    icon: <Layers className="w-4 h-4 text-purple-500" />,
    count: allProjects.filter((p) => p.category === "platform").length,
  },
  {
    id: "ui",
    label: "UI & Interactive Tools",
    icon: <Code2 className="w-4 h-4 text-blue-500" />,
    count: allProjects.filter((p) => p.category === "ui").length,
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return allProjects;
    return allProjects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto min-h-screen transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Featured Work & Engineering Projects
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
        >
          Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500">Projects</span> 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-gray-600 dark:text-zinc-300 font-light"
        >
          A collection of full-stack platforms, client portals, and interactive web applications engineered with modern technologies and clean architecture.
        </motion.p>
      </div>

      {/* Domain Category Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-14">
        {categoryTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                isActive
                  ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/25 scale-105"
                  : "bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-white/10 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 shadow-sm"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/25 text-white font-bold"
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container with Hover Zoom & Gradient Mask */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                  <img
                    src={project.pic}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-purple-600 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 hover:bg-purple-700 shadow-lg transition-colors"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-1">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-zinc-300 mt-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Role Tag */}
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center gap-1.5 text-xs text-gray-500 dark:text-zinc-400">
                    <span className="font-semibold text-gray-700 dark:text-zinc-300">Focus:</span>
                    <span>{project.role}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-zinc-300 border border-gray-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50/50 dark:bg-zinc-950/40 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Deployment
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <span>Launch Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
