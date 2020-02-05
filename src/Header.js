import React from "react";

import Aboutme from "./Aboutme";
const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Welcome to my own piece of the Web.</h1>
      </div>
      <Aboutme />{" "}
    </div>
  );
};

export default Header;
