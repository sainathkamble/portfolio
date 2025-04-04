import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Type = () => {
  return (
    <>
      <Typewriter
          words={["A Software Engineer", "A Fullstcak Developer", "A Software Developer"]}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
      />
    </>
  );
};