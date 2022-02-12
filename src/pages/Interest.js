import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Interest = () => {
  return (
    <div className="condiv">
      <div className="content">
        <ReactTypingEffect
          className="typingeffect"
          text={["Interest"]}
          speed={100}
          eraseDelay={700}
        />
        <br />
        <br />
        <p>
          Fully committed to designing and developing innovative web based
          materials that users will love. <br />
          Always eager to learn more tricks from anyone - regardless of the
          industry they work in.
        </p>
      </div>
    </div>
  );
};

export default Interest;
