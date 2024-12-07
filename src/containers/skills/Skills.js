import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
        
        <h1 className="skills-header" style={{ color: theme.text }}>
        LET ME INTRODUCE MYSELF
          </h1>
        <p style={{ color: "#8A8A8A", fontSize: "18px", }}>Driven by a passion for technology,  I specialize in crafting efficient and user-centric web applications. My expertise spans <span style={{ color: "#C21E56",fontWeight: 'bold'}}> AWS, the MERN stack, C++,  Java, Python, SQL, and UI/UX tools like Figma.</span> From crafting intuitive user interfaces to optimizing back-end performance, I love tackling challenges and delivering innovative solutions.<span style={{ color: "#C21E56",fontWeight: 'bold'}}></span> <span style={{ color: "#C21E56",fontWeight: 'bold'}}></span> </p>

{/* <p style={{ color: "#C0C0C0", fontSize: "18px",  }}>
<span style={{ color: "#C21E56",fontWeight: 'bold'}}>What drives me?</span> Consistency, discipline, and an unwavering desire to learn. Whether it’s mastering a new programming language or solving complex coding problems, I am always eager to take on challenges that push my boundaries. Beyond technical work, I’m passionate about leveraging technology for <span style={{ color: "#C21E56",fontWeight: 'bold'}}>social good,</span> demonstrated through my contributions as a volunteer with <span style={{ color: "#C21E56",fontWeight: 'bold'}}>Hamari Pahchan NGO.</span></p>
<p style={{ color: "#C0C0C0", fontSize: "18px", }}>
<span style={{ color: "#C21E56",fontWeight: 'bold'}}>Key Skills:</span><br></br>
- Cloud Computing <span style={{ color: "#C21E56",fontWeight: 'bold'}}>(AWS)</span><br></br>
- Full-Stack Development <span style={{ color: "#C21E56",fontWeight: 'bold'}}>(JavaScript, ReactJS, NodeJS, MongoDB, ExpressJS, JWT, Redux)</span><br></br>
- UI/UX Design <span style={{ color: "#C21E56",fontWeight: 'bold'}}>(Figma)</span><br></br>
- Version Control <span style={{ color: "#C21E56",fontWeight: 'bold'}}> (Git, GitHub) </span><br></br>
- Database Management <span style={{ color: "#C21E56",fontWeight: 'bold'}}>(SQL , MongoDB)</span><br></br>
- Programming Languages <span style={{ color: "#C21E56",fontWeight: 'bold'}}>(C++, Java, Python)</span><br></br>
</p> */}
<p style={{ color: "#8A8A8A", fontSize: "18px", }}>
I am constantly seeking opportunities to expand my knowledge and apply my skills in real-world scenarios. Dive into my <span style={{ color: "#C21E56",fontWeight: 'bold'}}>portfolio</span> to explore projects that highlight my technical expertise. <span style={{ color: "#C21E56",fontWeight: 'bold'}}>Let’s connect and turn great ideas into impactful realities!</span>
<br></br><br></br>
</p>
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}