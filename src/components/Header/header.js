import React from "react";
import Example from "../Nav";
import "./header.css";

function Header({ children, home }) {
  return (
    <div className={`header ${!home ? "header--light" : ""}`}>
      <Example />
      {children}
    </div>
  );
}

export default Header;
