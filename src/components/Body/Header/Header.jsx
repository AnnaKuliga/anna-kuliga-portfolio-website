import React from "react";
import "./Header.css";

//imported icons ====>
import { FaReact } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
const Header = () => {
  return (
    <div className="Header">
      <div className="logoDiv flex">
        <div className="name">
          <h2>
            Anna Kuliga
            <p className="logo-text">Web Development</p>
          </h2>
        </div>
        <div className="menu">
          <ul className="header-menu">
            <li className="listItem">
              <a href="/" className="menuLink flex">
                <AiOutlineHome className="icon" />
                <span className="smallText">Home</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#about" className="menuLink flex">
                <BsPerson className="icon" />
                <span className="smallText">About</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#skills" className="menuLink flex">
                <HiOutlineLightBulb className="icon" />
                <span className="smallText">Skills</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#projects" className="menuLink flex">
                <MdWorkOutline className="icon" />
                <span className="smallText">Projects</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#reviews" className="menuLink flex">
                <AiOutlineStar className="icon" />
                <span className="smallText">Reviews</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#contact" className="menuLink flex">
                <AiOutlinePhone className="icon" />
                <span className="smallText">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
