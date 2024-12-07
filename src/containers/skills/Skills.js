import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;

  // Animation variants for the header and content
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Fade out and slide down
    visible: { opacity: 1, y: 0 }, // Fade in and slide up
  };

  const containerVariants = {
    hidden: { opacity: 0 }, // Container fade-out
    visible: {
      opacity: 1, // Container fade-in
      transition: { staggerChildren: 0.3 }, // Stagger animations for children
    },
  };

  return (
    <motion.div
      className="main"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="skills-header-div" variants={textVariants}>
        <motion.h1
          className="skills-header"
          style={{ color: theme.text }}
          variants={textVariants}
        >
          LET ME INTRODUCE MYSELF
        </motion.h1>

        <motion.p
          style={{ color: "#C0C0C0", fontSize: "18px" }}
          variants={textVariants}
        >
          Driven by a passion for technology, I specialize in crafting
          efficient and user-centric web applications. My expertise spans{" "}
          <span style={{ color: "#C21E56", fontWeight: "bold" }}>
            AWS, the MERN stack, C++, Java, Python, SQL, and UI/UX tools like
            Figma.
          </span>{" "}
          From crafting intuitive user interfaces to optimizing back-end
          performance, I love tackling challenges and delivering innovative
          solutions.
        </motion.p>

        <motion.p
          style={{ color: "#C0C0C0", fontSize: "18px" }}
          variants={textVariants}
        >
          I am constantly seeking opportunities to expand my knowledge and
          apply my skills in real-world scenarios. Dive into my{" "}
          <span style={{ color: "#C21E56", fontWeight: "bold" }}>portfolio</span>{" "}
          to explore projects that highlight my technical expertise.{" "}
          <span style={{ color: "#C21E56", fontWeight: "bold" }}>
            Let’s connect and turn great ideas into impactful realities!
          </span>
          <br />
          <br />
        </motion.p>

        <motion.h1
          className="skills-header"
          style={{ color: theme.text }}
          variants={textVariants}
        >
          Here's what I do
        </motion.h1>
      </motion.div>

      <SkillSection theme={theme} />
    </motion.div>
  );
}
