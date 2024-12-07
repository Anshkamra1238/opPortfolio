import React, { useState, useEffect } from "react";

function Type() {
  const strings = [
    "Software Developer",
    "MERN Stack Developer",
    "Cloud Engineer",
    "UI/UX Designer",
  ];
  
  const typingSpeed = 100; // Speed for typing each character
  const pauseTime = 1000;  // Time to pause before typing the next string

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[currentIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setCurrentText((prev) => currentString.slice(0, prev.length + 1));
      }

      // Handle typing completion or deletion
      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length); // Move to the next string
      }
     
    };

    const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timer); // Cleanup timer
  }, [currentText, isDeleting, currentIndex, strings]);

  return (
    
    <div
      style={{
        fontSize: "24px",
        // fontWeight: "bold",
        // textAlign: "left", // Align text to the left
        color: "white", // Set text color to white
        padding: "110", // Remove padding
        margin: "0px", // Remove margin
        // position: "absolute", // Position the text absolutely
        // left: "0", // Align to the extreme left
        // top: "20px", // Optional: Adjust vertical position
      }}
    >
      {currentText}
      <span style={{ color: "gray" }}>|</span> {/* Cursor effect */}
    </div>
  );
}

export default Type;
