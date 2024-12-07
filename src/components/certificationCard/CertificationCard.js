import React from "react";
import { motion } from "framer-motion";
import "./CertificationCard.css";
import { style } from "glamor";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;

  const styles = style({
    boxShadow: `0px 2px 5px ${certificate.color_code}`,
    border: `1px solid ${certificate.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${certificate.color_code}`,
    },
  });

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Fade out and slide down
    visible: { opacity: 1, y: 0 }, // Fade in and slide up
  };

  return (
    <motion.div
      className="cert-card"
      {...styles}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="content">
        <a
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-overlay"></div>
          <div
            className="cert-header"
            style={{ backgroundColor: certificate.color_code }}
          >
            <img
              className="logo_img"
              src={require(`../../assests/images/${certificate.logo_path}`)}
              alt={certificate.alt_name}
            />
          </div>
        </a>
      </div>
      <div className="cert-body">
        <h2 className="cert-body-title" style={{ color: theme.text }}>
          {certificate.title}
        </h2>
        <h3
          className="cert-body-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {certificate.subtitle}
        </h3>
      </div>
    </motion.div>
  );
}

export default CertificationCard;
