import React from "react";
import { motion } from "framer-motion";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { style } from "glamor";

export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 }, // Fade out and slide down
    visible: { opacity: 1, y: 0 }, // Fade in and slide up
  };

  return (
    <div>
      <motion.div
        {...styles}
        key={project.name}
        onClick={() => openRepoinNewTab(project.url)}
        style={{ backgroundColor: theme.projectCard }}
        // Animation props
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {project.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {project.description}
        </p>
        <div className="repo-details">
          <ProjectLanguages logos={project.languages} />
        </div>
      </motion.div>
    </div>
  );
}
