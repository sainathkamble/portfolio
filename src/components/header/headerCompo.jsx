import React from "react";
import { Navbar } from "../navbar/navbarCompo.jsx";
import "./header.css";
export const Header = () => {
  return (
    <>
      <header className="header center">
        <h3>
          <a href="#home" className="link">
            Sainath.io
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
