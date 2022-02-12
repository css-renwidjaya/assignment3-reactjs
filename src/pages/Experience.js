import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Experience = () => {
  return (
    <div className="condiv">
      <div className="content">
        <ReactTypingEffect
          className="typingeffect"
          text={["WORK EXPERIENCE"]}
          speed={100}
          eraseDelay={700}
        />
        <br />
        <br />
        <h2>
          Full Stack <u>Developer</u> And <u>Web Aplication</u>
        </h2>
        <p>
          KB Insurance Indonesia | Jun 2020 - Jul 2021 <br />- Create new
          aplication and rest ful api
        </p>
        <br />
        <h2>
          Backend <u>Developer</u>
        </h2>
        <p>
          Lapaktrip | Des 2019 - April 2020 <br />
          - create rest full api and maintenant program <br />- Collaborated
          with other designers
        </p>
      </div>
    </div>
  );
};

export default Experience;
