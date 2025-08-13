import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 bg-purple-950 bg-opacity-40 backdrop-blur-lg border-t border-violet-500/30">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Khushi-Ranjan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-violet-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/khushiranjan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-violet-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:khushiranjan2004@gmail.com"
            className="text-violet-300 hover:text-violet-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-violet-400/70 text-center">
          © {new Date().getFullYear()} Khushi Ranjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
