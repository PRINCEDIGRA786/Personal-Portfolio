import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileAlt, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

const roles = [
  "Full-Stack Software Engineer",
  "Python, FastAPI & Node.js Developer",
  "React & Next.js Frontend Architect",
  "Cloud & Fintech Specialist (AWS, Stripe, Razorpay)",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "digraprince7@gmail.com";
  const phone = "+91 8264295936";
  const phoneRaw = "8264295936";

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-[#09090B] dark:via-[#111116] dark:to-[#09090B] text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Top Recruiter Alert & Status Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 sm:px-5 sm:py-2.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-500/5 mb-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-zinc-200">
              Available for Opportunities · Contact: <span className="text-purple-600 dark:text-purple-400 font-bold">{phone}</span>
            </span>
          </div>

          {/* Quick Contact Micro-Actions */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 transition-colors"
              title="Send direct email"
            >
              <FaEnvelope className="w-3 h-3" />
              <span className="hidden sm:inline">{email}</span>
              <span className="sm:hidden">Email</span>
            </a>

            <a
              href={`tel:${phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
              title="Call directly"
            >
              <FaPhoneAlt className="w-3 h-3" />
              <span>{phoneRaw}</span>
            </a>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wide uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Software Engineer Portfolio
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-4 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            I Engineer High-Impact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500">
              Web Systems
            </span>
          </motion.h1>

          {/* Dynamic Role Switcher */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400"
              >
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{roles[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Value Proposition */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello! I'm <strong className="font-bold text-gray-900 dark:text-white">Prince</strong>, a full-stack engineer building fast, responsive applications from database logic to modern frontend interactions. Proficient across <span className="text-purple-600 dark:text-purple-400 font-semibold">Python, FastAPI, Node.js, PHP/Laravel, React, Next.js, AWS</span>, and payment gateways (<span className="text-purple-600 dark:text-purple-400 font-semibold">Stripe & Razorpay</span>).
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
            >
              <span>Explore Featured Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-white dark:bg-zinc-900 border border-gray-300 dark:border-white/15 text-gray-900 dark:text-white shadow-sm hover:border-purple-500 hover:scale-105 transition-all duration-300"
            >
              <FaFileAlt className="text-purple-500" />
              <span>Download CV</span>
            </a>

            <a
              href={`https://wa.me/918264295936?text=Hi%20Prince,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Me</span>
            </a>
          </motion.div>
        </div>

        {/* Recruiter "Why Hire Me" Bento Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12"
        >
          {/* Card 1: Full Stack Delivery */}
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:border-purple-500/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Full-Stack Architecture
            </h3>
            <p className="text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
              End-to-end web apps using React, Next.js, Node.js, Python, FastAPI & PHP.
            </p>
          </div>

          {/* Card 2: Fintech & Payments */}
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:border-pink-500/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-950/60 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Fintech & Payments
            </h3>
            <p className="text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
              Battle-tested checkout, webhooks & subscriptions with Stripe and Razorpay.
            </p>
          </div>

          {/* Card 3: Cloud & DevOps */}
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:border-indigo-500/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              AWS & Scalable Cloud
            </h3>
            <p className="text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
              Cloud deployments on AWS (EC2, S3), Docker containers, and CI/CD pipelines.
            </p>
          </div>

          {/* Card 4: Contact & Availability */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-indigo-900/10 dark:from-purple-950/40 dark:to-zinc-900/60 backdrop-blur-md border border-purple-300/50 dark:border-purple-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Direct Contact
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-gray-700 dark:text-zinc-300 font-medium">
                {phone}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-zinc-400 truncate">
                {email}
              </p>
            </div>

            <div className="flex gap-2 mt-3">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-1.5 px-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 text-[11px] font-semibold text-gray-700 dark:text-zinc-200 flex items-center justify-center gap-1 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                <span>{copiedEmail ? "Copied!" : "Email"}</span>
              </button>

              <button
                onClick={handleCopyPhone}
                className="flex-1 py-1.5 px-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-white/10 text-[11px] font-semibold text-gray-700 dark:text-zinc-200 flex items-center justify-center gap-1 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                <span>{copiedPhone ? "Copied!" : "Phone"}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links Bar */}
        <div className="flex justify-center items-center gap-4 text-gray-500 dark:text-zinc-400">
          <a
            href="https://github.com/PRINCEDIGRA786/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-368909285/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all shadow-sm"
            aria-label="Direct Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
