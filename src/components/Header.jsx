import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div id="header-div">
      <Link to="/">
        <img
          src="https://vectr.com/olwenn/a12nhJzGOR.png?width=275&height=51&select=adRLfA2Ez"
          alt="Titre"
          className="header-title"
          id="header-barman"
        />
      </Link>
      <img
        src="https://vectr.com/olwenn/a12nhJzGOR.png?width=41&height=64&select=hh9itbevX"
        alt="logo Le Barman"
        className="header-title"
        id="header-logo"
      />
    </div>
  );
}

export default Header;
