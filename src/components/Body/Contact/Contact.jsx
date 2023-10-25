import React from "react";
import "./Contact.css";

//imported icons ---->
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="Contact full-height" id="contact">
      <div className="contact-info">
        <h2>Contact information</h2>
        <h5>
          If you like my projects and want to work together, you can call or
          send me an email.
        </h5>
        <h6>CET Time Zone</h6>
        <div className="phone">
          <p>
            <a href="tel:+48 785 036 017" title="Poland">
              <BsTelephone className="phone-icon" />
              +48 785 036 017
            </a>
          </p>
          <p>
            <a href="tel:+47 925 35 197" title="Norway">
              <BsTelephone className="phone-icon" />
              +47 925 35 197
            </a>
          </p>
          <p>
            <a href="mailto:a.kuliga2@gmail.com" title="Email me">
              <HiOutlineMailOpen className="phone-icon" />
              <span className="email"> a.kuliga2@gmail.com</span>
            </a>
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/AnnaKuliga"
            title="Anna Kuliga GitHub "
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/annakuliga/"
            title="Anna Kuliga LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <BiLogoLinkedin />
          </a>
          <a
            href="https://www.shecodes.io/graduates/57519-anna-kuliga"
            title="Anna Kuliga SheCodes"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <IoSchool />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
