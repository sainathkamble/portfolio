import React from "react";
import "./contact.css";
import { CgMail } from "react-icons/cg";
import { MdPhone } from 'react-icons/md';
export const Contact = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-right">
          <p>
            <CgMail /> sainathkamble232@gmail.com
          </p>
          <p>
            <MdPhone /> +91 9152218814
          </p>
        </div>
      </div>
    </>
  );
};