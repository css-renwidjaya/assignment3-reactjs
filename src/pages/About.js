import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="condiv">
      <div className="content">
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Hey there,",
            "I am Rendi Widjaya",
            "I am full stack developer",
          ]}
          speed={100}
          eraseDelay={700}
        />
        <h3>
          Full Stack <u>Developer</u> | UI/UX <u>Designer</u>
        </h3>
        <br></br>
        <p>
          I started my journey in the world of computers from an young age, now
          I’m 29 years old, Pursuing my Software Engineering Degree in VIT
          University Vellore. Web development is my center of interest, i always
          love the idea of cross-platform development, 1-n one code base deploy
          into almost any platform, which web technology like Javascript enables
          me to do. I also like creating Interactive UI components for better UX
          and share those desgin and codes to the world through Github, Codepen
          and Instagram.
        </p>
      </div>
      <br />
      <br />
      <FontAwesomeIcon icon={faLinkedin} size="3x" /> &nbsp;&nbsp;
      <FontAwesomeIcon icon={faGithub} size="3x" />
    </div>
  );
};

export default About;
