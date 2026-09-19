import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const email = "digraprince7@gmail.com";
  const phone = "+91 8264295936";
  const phoneRaw = "8264295936";

  return (
    <footer className="bg-gray-50 dark:bg-zinc-950 w-full py-12 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gray-200 dark:border-white/10">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-sm">
                P
              </span>
              <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
                PRINCE<span className="text-purple-600">.</span>
              </span>
            </a>
            <p className="text-xs text-gray-500 dark:text-zinc-400 max-w-sm">
              Full-Stack Software Engineer building scalable, performant web platforms with modern frameworks, cloud architectures & fintech integrations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 hover:text-purple-600 transition-colors"
            >
              <FaEnvelope className="text-purple-500" />
              <span>{email}</span>
            </a>

            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300 hover:text-emerald-600 transition-colors"
            >
              <FaPhoneAlt className="text-emerald-500" />
              <span>{phone}</span>
            </a>

            <a
              href={`https://wa.me/918264295936`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              <FaWhatsapp className="text-emerald-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Prince. Built with React, TypeScript, Tailwind CSS & Framer Motion.
          </p>

          <div className="flex items-center gap-3 text-gray-500 dark:text-zinc-400">
            <a
              href="https://github.com/PRINCEDIGRA786"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-368909285/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-all"
              aria-label="Email Prince"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
