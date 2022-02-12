import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Awards = () => {
  return (
    <div className="condiv">
      <div className="content">
        <ReactTypingEffect
          className="typingeffect"
          text={["Awards"]}
          speed={100}
          eraseDelay={700}
        />
        <br></br>
        <br></br>
        <FontAwesomeIcon icon={faAward} size="1x" color="blue" /> Udemi Android{" "}
        <br />
        <br />
        <FontAwesomeIcon icon={faAward} size="1x" color="blue" /> Hacktiv8{" "}
      </div>
    </div>
  );
};

export default Awards;
