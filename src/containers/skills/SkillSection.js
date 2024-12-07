import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { motion } from "framer-motion";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;

  // Animation Variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div key={skill.title} className="skills-main-div">
              <motion.div
                className="skills-image-div"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5 }}
              >
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </motion.div>

              <motion.div
                className="skills-text-div"
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5 }}
              >
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
                <SoftwareSkill logos={skill.softwareSkills} />
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1.5 }}
                >
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        key={skillSentence}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          );
        } else {
          return (
            <div key={skill.title} className="skills-main-div">
              <motion.div
                className="skills-text-div"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5 }}
              >
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
                <SoftwareSkill logos={skill.softwareSkills} />
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1.5 }}
                >
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        key={skillSentence}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </motion.div>
              </motion.div>

              <motion.div
                className="skills-image-div"
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5 }}
              >
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </motion.div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
