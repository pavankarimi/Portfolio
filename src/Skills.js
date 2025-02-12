// Skills.js
import React from "react";
import "./Skills.css";
import htmlLogo from "./assests/html.png";
import cssLogo from "./assests/css.jpeg";
import jsLogo from "./assests/js.jpeg";
import reactLogo from "./assests/react.png";
import cLogo from "./assests/c.png";
import pythonLogo from "./assests/python.png";
import javaLogo from "./assests/java.png";
import sqlLogo from "./assests/SQl.png";
import dsalogo from "./assests/DSA.png";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "Javascript", logo: jsLogo },
  { name: "React ", logo: reactLogo },
  { name: "C", logo: cLogo },
  { name: "Python", logo: pythonLogo },
  { name: "JAVA", logo: javaLogo },
  { name: "SQL", logo: sqlLogo },
  { name:  "Data Structures & Algorithms",logo: dsalogo},

];

const Skills = () => {
  return (
    <div >
        <h2 className="text-center fw-bold">SKILLS</h2>
        <div className="skills-container">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <p className="skill-name">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Skills;
