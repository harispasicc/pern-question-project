import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer  text-center bg-dark text-light">
        Developed By: {""}
        <span className="text-warning font-weight-normal">
          Haris Pašić, {""}
        </span>
        <a
          className="link text-warning "
          href="https://www.ministryofprogramming.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MOP
        </a>
      </div>
    </div>
  );
}

export default Footer;
