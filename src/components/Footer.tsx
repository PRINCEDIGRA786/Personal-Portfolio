// Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 w-full py-8 mt-20 border-t border-gray-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Prince. All rights reserved.
        </p>

        <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-lg">
          <a
            href="https://github.com/princedigra786"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/princedigra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
  href="mailto:digraprince7@gmail.com?subject=Hello%20Prince&body=I%20found%20your%20portfolio%20interesting!"
  className="hover:text-purple-600 transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

        </div>
      </div>
    </footer>
  );
}
