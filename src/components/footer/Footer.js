import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <motion.p
        className="footer-text"
        style={{ color: props.theme.secondaryText }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Made with <span role="img">❤️</span> by {greeting.title2}
      </motion.p>
    </div>
  );
}
