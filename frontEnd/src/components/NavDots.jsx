import React from "react";
import { HashLink } from "react-router-hash-link";

const navDotsLinks = ["home", "about", "work", "skills", "contact"];

const NavDots = ({ active }) => {
  <div className="app__navigation">
    {navDotsLinks.map((item, index) => (
      <HashLink
        smooth
        to={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
        title={item}
      />
    ))}
  </div>;
};

export default NavDots;
