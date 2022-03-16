import React from "react";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header: React.FC = () => (
  <div className="header">
    <img src="logo.png" className="logo" />
    <Logo />
  </div>
);

export default Header;
