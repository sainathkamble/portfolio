import React from "react";
import "./techstacks.css";
import { SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript, 
  SiDjango, SiSpringboot, SiNodedotjs, SiNextdotjs,  SiExpress, SiAngular, SiTailwindcss, SiBootstrap,
  SiMui, SiHtml5, SiCss3, SiMongodb, SiMysql, SiPostgresql,  SiPostman, SiGit,
  SiKubernetes, SiDocker, SiNpm, SiWordpress, SiLinux, SiReact,
} from 'react-icons/si';

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div><SiC /><h6>C</h6></div>
          <div><SiCplusplus /><h6>C++</h6></div>
          <div><SiPython /><h6>Python</h6></div>
          {/* <div><SiJava /><h5>Java</h5></div> */}
          <div><SiJavascript /><h6>JavaScript</h6></div>
          <div><SiTypescript /><h6>TypeScript</h6></div>
          {/* <div><SiSql /><h5>SQL</h5></div> */}
          <div><SiDjango /><h6>Django</h6></div>
          <div><SiSpringboot /><h6>Spring Boot</h6></div>
          <div><SiReact /><h6>React.js</h6></div>
          <div><SiNextdotjs /><h6>Next.js</h6></div>
          <div><SiNodedotjs /><h6>Next.js</h6></div>
          <div><SiExpress /><h6>Express.js</h6></div>
          <div><SiAngular /><h6>Angular.js</h6></div>
          <div><SiTailwindcss /><h6>TailwindCSS</h6></div>
          <div><SiBootstrap /><h6>Bootstrap</h6></div>
          <div><SiMui /><h6>Material UI</h6></div>
          <div><SiHtml5 /><h6>HTML</h6></div>
          <div><SiCss3 /><h6>CSS</h6></div>
          <div><SiMongodb /><h6>MongoDB</h6></div>
          <div><SiMysql /><h6>MySQL</h6></div>
          <div><SiPostgresql /><h6>PostgreSQL</h6></div>
          <div><SiPostman /><h6>Postman</h6></div>
          <div><SiGit /><h6>Git</h6></div>
          {/* <div><SiAmazonaws /><h5>AWS</h5></div>
          <div><SiMicrosoftazure /><h5>Azure</h5></div> */}
          <div><SiKubernetes /><h6>Kubernetes</h6></div>
          <div><SiDocker /><h6>Docker</h6></div>
          <div><SiNpm /><h6>NPM</h6></div>
          {/* <div><SiVisualstudiocode /><h5>VS Code</h5></div> */}
          <div><SiWordpress /><h6>WordPress</h6></div>
          <div><SiLinux /><h6>Linux</h6></div>
        </div>
      </div>
    </>
  );
};