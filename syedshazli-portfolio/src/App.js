import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Particles from "react-tsparticles";
import Timeline from "./components/Timeline";
import Coursework from "./components/Coursework"; // Import the Coursework component
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: darkMode ? "#1a1a1a" : "#ffffff",
            },
          },
          particles: {
            number: {
              value: 50,
            },
            color: {
              value: darkMode ? "#ffffff" : "#000000",
            },
            links: {
              color: darkMode ? "#ffffff" : "#000000",
            },
          },
        }}
      />

      {/* Dark/Light Mode Toggle */}
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h1>Syed Shazli</h1>
          <p>Software Developer | Open Source Enthusiast</p>
          <div className="social-links">
            <a
              href="https://github.com/syedshazli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/syedshazli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* About Me */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hi, I'm Syed Shazli! I'm passionate about building software and
            contributing to open-source projects. I enjoy working with Python,
            JavaScript, and exploring new technologies.
          </p>
        </div>
      </motion.section>

      {/* Timeline */}
      <Timeline />

      {/* Coursework */}
      <Coursework />

      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1.</p>
              <a
                href="https://github.com/syedshazli/project1"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2.</p>
              <a
                href="https://github.com/syedshazli/project2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* GitHub Contributions */}
      <motion.section
        id="github"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h2>GitHub Contributions</h2>
          <img
            src="https://ghchart.rshah.org/syedshazli"
            alt="Syed Shazli's GitHub Contributions"
          />
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out at{" "}
            <a href="mailto:your-email@example.com">your-email@example.com</a>.
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default App;