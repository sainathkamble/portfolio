import React from "react";
import "./about.css";
import { Type } from "./type.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from "@mui/icons-material/Description";
import { Introduction } from "./introduction.jsx";
import { Timeline } from "./timeline.jsx";
import { Techstacks } from "./techstacks.jsx";
import { SiLeetcode } from 'react-icons/si';
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
            href="https://leetcode.com/u/sainath_io/"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <SiLeetcode />
          </a>
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
            href="https://twitter.com/sainathkamble"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
            className="link link--icon"
          >
            <TwitterIcon/>
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
}