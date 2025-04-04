import React from "react";
import "./Introduction.css";
//import ExitToAppIcon from "@mui/icon-material/ExitToApp";

export const Introduction = () => {
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className="introduction">
            <div className="introduction_logocontainer">
              <img
                src="./favicon.ico"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Sainath Kamble </span> from{" "}
                <span className="different"> Mumbai, Maharashtra, India</span>. I am
                currently pursuing graduation in Bachelor of Engineering from
                SSJCET, Mumbai University.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};