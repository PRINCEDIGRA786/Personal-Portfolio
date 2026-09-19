import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Phone, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);

  const phone = "8264295936";
  const email = "digraprince7@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const ThemeToggle = () => (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="w-9 h-9 flex cursor-pointer items-center justify-center bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-white/10 rounded-full transition-all duration-300 hover:scale-110"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-gray-700" />
      )}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md border-b border-gray-200/80 dark:border-white/10 py-3"
          : "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo with live indicator */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-base shadow-md group-hover:scale-105 transition-transform">
            P
          </span>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
              PRINCE<span className="text-purple-600">.</span>
            </span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AVAILABLE FOR HIRE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="h-4 w-[1px] bg-gray-200 dark:bg-white/10" />

          {/* Quick Recruiter Call Link */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-zinc-300 hover:text-emerald-600 transition-colors"
            title="Call Prince"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            <span>{phone}</span>
          </a>

          <ThemeToggle />

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 text-white shadow-md shadow-purple-500/20 hover:scale-105 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Prince</span>
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2.5">
          <a
            href={`tel:${phone}`}
            className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
            title="Call"
          >
            <Phone className="w-4 h-4" />
          </a>

          <ThemeToggle />

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 px-6 py-5 space-y-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-semibold text-gray-800 dark:text-zinc-200 hover:text-purple-600 py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-white/10 space-y-2">
            <div className="flex flex-col gap-1 text-xs text-gray-600 dark:text-zinc-400">
              <span>📞 Phone: <strong className="text-gray-900 dark:text-white">{phone}</strong></span>
              <span>✉️ Email: <strong className="text-gray-900 dark:text-white">{email}</strong></span>
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md"
            >
              <span>Get In Touch / Hire Prince</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
