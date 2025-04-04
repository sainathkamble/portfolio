import React from "react";

import { Typewriter } from "react-simple-typewriter";

export const Type = () => {
  return (
    <>
      <Typewriter
          words={["A Full Stack Developer", "A MERN Stack Developer"]}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          // autoStart: true
          // loop: true
          // deleteSpeed: 50
      />
    </>
  );
};