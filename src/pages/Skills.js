import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faAngular,
  faAppStoreIos,
  faCss3,
  faHtml5,
  faJava,
  faLaravel,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="condiv">
      <div className="content">
        <ReactTypingEffect
          className="typingeffect"
          text={["SKILLS SUMMARY"]}
          speed={100}
          eraseDelay={700}
        />
        <div className="divGrid">
          <div>
            <br></br>
            <br></br>
            <FontAwesomeIcon icon={faHtml5} size="1x" /> Html
            <br />
            <br />
            <FontAwesomeIcon icon={faCss3} size="1x" /> Css
            <br />
            <br />
            <FontAwesomeIcon icon={faPhp} size="1x" /> Php
            <br />
            <br />
            <FontAwesomeIcon icon={faPython} size="1x" /> Python
            <br />
            <br />
            <FontAwesomeIcon icon={faLaravel} size="1x" /> Laravel
          </div>
          <div>
            <br />
            <br />
            <FontAwesomeIcon icon={faJava} size="1x" /> Javascript
            <br />
            <br />
            <FontAwesomeIcon icon={faAngular} size="1x" /> Angular
            <br />
            <br />
            <FontAwesomeIcon icon={faAndroid} size="1x" /> Android App
            <br />
            <br />
            <FontAwesomeIcon icon={faAppStoreIos} size="1x" /> IOS App
            <br />
            <br />
            <FontAwesomeIcon icon={faReact} size="1x" /> React Js And React
            Native
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
