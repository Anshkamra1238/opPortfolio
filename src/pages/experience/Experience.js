import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { motion } from "framer-motion"; // Import Framer Motion
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;

  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        {/* Experience Heading with Framer Motion for Animation */}
        <motion.div
          className="experience-heading-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="experience-heading-img-div">
            <ExperienceImg theme={theme} />
          </div>
          <div className="experience-heading-text-div">
            <h1
              className="experience-heading-text"
              style={{ color: theme.text }}
            >
              {experience.title}
            </h1>
            <h3
              className="experience-heading-sub-text"
              style={{ color: theme.text }}
            >
              {experience["subtitle"]}
            </h3>
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {experience["description"]}
            </p>
          </div>
        </motion.div>
      </div>
      {/* Experience Accordion */}
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
