import Contact from "./components/Contact";
import Footer from "./components/Footer";
import chess from './img/chess.png';

export default function App() {

  const projects = [
    {
      title: "Chess Game",
      description:
        "A modern chess game built with React. Play online and challenge your friends.",
      link: "https://chess-theta-green.vercel.app/",
      image: chess
    },
   
    {
      title: "Project 2",
      description: "A short description about Project 2 and its features.",
      link: "#",
      image: "", // Add image URL if available
    },
    {
      title: "Project 3",
      description: "A short description about Project 3 and its features.",
      link: "#",
      image: "", // Add image URL if available
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-purple-950 bg-opacity-40 backdrop-blur-lg sticky top-0">
        <h1 className="text-3xl font-bold text-violet-400 tracking-wide">
          PORTFOLIO
        </h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <a
              href="#home"
              className="hover:text-violet-300 cursor-pointer transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-violet-300 cursor-pointer transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-violet-300 cursor-pointer transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-violet-300 cursor-pointer transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center mt-20 px-4"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-violet-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]">
          Hello, I'm Khushi Ranjan
        </h2>
        <p className="mt-6 text-xl max-w-2xl text-gray-300">
          I create beautiful, functional, and modern web experiences.
        </p>
        <a href="#projects">
          <button className="mt-8 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-lg font-semibold rounded-full shadow-lg shadow-violet-500/50 transition">
            View My Work
          </button>
        </a>
      </section>

      {/* Projects Section */}
      <section className="mt-32 px-8" id="projects">
        <h3 className="text-4xl font-bold text-violet-300 mb-12 text-center drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          My Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-purple-950 bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl border border-violet-500/30 hover:border-violet-400 transition-all hover:scale-105 shadow-lg hover:shadow-violet-500/50"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title + " preview"}
                  className="h-40 w-full object-cover rounded-xl mb-4"
                />
              )}
              <h4 className="text-2xl font-semibold text-violet-300">
                {project.title}
              </h4>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-full shadow-lg shadow-violet-500/50">
                  View More
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mt-32 px-8 max-w-4xl mx-auto" id="about">
        <h3 className="text-4xl font-bold text-violet-300 mb-8 text-center drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          About Me
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          I’m a passionate developer who loves building sleek, user-friendly
          interfaces with modern tools like React and Tailwind CSS. My focus is
          on creating experiences that are not just functional, but visually
          stunning — blending technology and design into something magical. 💜
        </p>
      </section>

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

