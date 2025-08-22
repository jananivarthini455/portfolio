// app.js
import React from "react";
import "./App.css"; // optional for styling

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>

      {/* Sections */}
      <section id="home" style={styles.section}>
        <h1>Hi, I'm Janani</h1>
        <p>Welcome to my portfolio!</p>
      </section>

      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>I am a passionate developer with skills in web development, React, and more.</p>
      </section>

      <section id="projects" style={styles.section}>
        <h2>My Projects</h2>
        <ul>
          <li>Project 1 - Description</li>
          <li>Project 2 - Description</li>
          <li>Project 3 - Description</li>
        </ul>
      </section>

      <section id="contact" style={styles.section}>
        <h2>Contact Me</h2>
        <p>Email: janani@example.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </section>
    </div>
  );
}

// Basic inline styling
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    background: "#eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  section: {
    padding: "100px 20px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
  },
};

export default App;


