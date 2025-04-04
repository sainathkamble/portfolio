import React from "react";
import "./About.css";
import { Type } from "./Type.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
// import PublicIcon from "@mui/icons-material/Public";
import { Introduction } from "./Introduction.jsx";
import { Timeline } from "./Timeline.jsx";
import { Techstacks } from "./Techstacks.jsx";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Sainath Kamble</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A passionate Full Stack Software Developer having an experience of
          building Web applications with MERN stcak / Django / Spring
          and some other cool libraries and frameworks.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/sainathkamble"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="sainathkamble232@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sainathkamble/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://docs.google.com/document/d/10oKtt_N6-HLl6xY8bFAtDWB0edzV4tPXGQxtj6WjT34/edit?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};