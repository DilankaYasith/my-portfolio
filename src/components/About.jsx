import React from "react";
import "../styles/About.css";

function About() {
    return (
      <div className="about-section">
        <div className="about-photo">
          <img src="https://avatars.githubusercontent.com/u/123799744?v=4" alt="Dilanka Ranepurage" />
        </div>
        <div className="about-content">
          <h2>Hello! <br/> I'M DILANKA RANEPURAGE</h2>
          <p>I am Dilanka Yasith, a passionate beginner in the world of technology and software development.
           I am constantly seeking for opportunities to learn and grow in the tech world with deep enthusiasm.
           I am enjoying and believing the power of team work to create new innovative ideas and solutions. Let's connect
           and make the world easier! </p>
           <br/>
           <button className="about-button">Resume</button>
        </div>
        
      </div>
      );
    }

export default About;