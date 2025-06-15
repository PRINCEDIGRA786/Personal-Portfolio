import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = ["Home", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

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
      className="w-10 h-10 flex cursor-pointer items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-white" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </button>
  );
  

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          PRINCE
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 transition-all"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700 px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-purple-600"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
