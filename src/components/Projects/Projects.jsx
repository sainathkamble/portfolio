import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./f1projectimage.jpg"
                  alt="F1 Streaming Platform"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>F1 Streaming Platform</h2>
              <p>
              Developed a full-stack web application enabling users to watch live F1 races with real-time data updates using RESTful APIs. 
              Optimized frontend performance with React and backend scalability using Node.js. Deployed the application using Vercel and Git with CI/CD pipelines for automated deployment and scaling.
              </p>
              <div>
                <FaReact />
                <SiTailwindcss/>
              </div>
              <div>
                <a
                  href="https://f1withsainath.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sainathkamble/f1withsainath/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};