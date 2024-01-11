import React from "react";
import "./Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer" id="footer">
      <div>
        <p>
          {" "}
          <AiOutlineCopyrightCircle /> Coded by Anna Kuliga.
        </p>
      </div>
    </div>
  );
};

export default Footer;
