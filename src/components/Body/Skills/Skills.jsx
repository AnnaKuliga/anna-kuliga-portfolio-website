import React from "react";
import "./Skills.css";

//imported icons ------->
import { VscDeviceCamera } from "react-icons/vsc";
import { BsCodeSquare } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import { SiAdobelightroom } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { LiaFigma } from "react-icons/lia";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { DiResponsive } from "react-icons/di";
import { TbSeo } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";

const Skills = () => {
  return (
    <div className="Skills full-height" id="skills">
      <div className="skills-categories">
        <div className="skills-card">
          <div className="skill-icon">
            <VscDeviceCamera className="skill-icon" />
          </div>
          <div className="skill-title">
            <h3>Photography</h3>
          </div>
          <div className="skill-description">
            <p>
              My passion for photography started in high school. I love taking
              photos of nature. When I travel, I always take my camera with me.
              You can see some of my photos on my professional Instagram
              account. I encourage you to follow it and if you like what you
              see, let us talk about cooperation.
            </p>
          </div>
        </div>
        <div className="skills-card">
          <div className="skill-icon">
            <BsCodeSquare className="skill-icon" />
          </div>
          <div className="skill-title">
            <h3>Web Development</h3>
          </div>
          <div className="skill-description">
            <p>
              Do you need help with writing blogs, post, and publications? Give
              me the topic and you will find aa well-written and captivating
              text. If you need a professional resume, we can work on it, too.
            </p>
          </div>
        </div>
        <div className="skills-card">
          <div className="skill-icon">
            <FiEdit className="skill-icon" />
          </div>
          <div className="skill-title">
            <h3>Editing & Tech Writing</h3>
          </div>
          <div className="skill-description">
            <p>
              My passion for photography started in high school. I love taking
              photos of nature. When I travel, I always take my camera with me.
              You can see some of my photos on my professional Instagram
              account. I encourage you to follow it and if you like what you
              see, let us talk about cooperation.
            </p>
          </div>
        </div>
      </div>

      <div className="icons">
        <SiAdobelightroom className="icon" title="Adobe Lightroom" />
        <SiAdobephotoshop className="icon" title="Adobe Photoshop" />
        <TbBrandVscode className="icon" title="VS Code" />
        <LiaFigma className="icon" title="Figma" />
        <AiFillHtml5 className="icon" title="HTML 5" />
        <BiLogoCss3 className="icon" title="CSS" />
        <BsFiletypeScss className="icon" title="SCSS" />
        <BiLogoJavascript className="icon" title="JavaScript" />
        <FaReact className="icon" title="React.js" />
        <TbApi className="icon" title="APIs" />
        <BsBootstrapFill className="icon" title="Bootstrap" />
        <DiResponsive className="icon" title="Responsive" />
        <TbSeo className="icon" title="SEO" />
        <MdOutlineWeb className="icon" title="Hosting" />
      </div>
    </div>
  );
};

export default Skills;
