import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="firstRow">
        <span className="link">
          <Link to="/CGU">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/All_rights_reserved_logo.svg/1200px-All_rights_reserved_logo.svg.png"
              alt="Logo CGU"
            />
          </Link>
        </span>{" "}
        <p>
          <span>Alcooliques Anonymes :</span>
          <span>09 69 39 40 20</span>
        </p>
      </div>
      <div className="secondRow">
        <a href="https://www.wildcodeschool.com/fr-FR" target="blank_">
          Wild Code School
        </a>{" "}
        <span className="link">
          <Link to="/ContactUs">Contact Us</Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;
