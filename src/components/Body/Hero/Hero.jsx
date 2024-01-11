import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import { TypeAnimation } from "react-type-animation";

//imported icons ====>
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero full-height">
      <div className="left">
        <Header />

        <div className="hero-text">
          <span className="intro">
            Let's make your website perfect together
          </span>
          <h1 class="text-brand">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I am Frontend Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I am React Developer",
                1000,
                "I am Photographer",
                1000,
                "Check it out!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p>
            My name is Anna Kuliga and I am a React Developer, based in Europe.
          </p>
          <div className="contact">
            <a href="tel:+48 785 036 017" className="tel custom-link">
              Call +48 785 036 017
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="social">
          <a
            href="https://github.com/AnnaKuliga"
            title="Anna Kuliga GitHub "
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <AiOutlineGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/annakuliga/"
            title="Anna Kuliga LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <BiLogoLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com/youniverse_photography/"
            title="Youniverse Photography"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.shecodes.io/graduates/57519-anna-kuliga"
            title="Anna Kuliga SheCodes"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <IoSchool className="icon" />
          </a>
        </div>

        <FaReact className="hero-icon" />
      </div>
    </div>
  );
};

export default Hero;
