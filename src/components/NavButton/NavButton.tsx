import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ route }) => {
  return (
    <NavLink className="" to={route.path}>
      {route.title}
    </NavLink>
  );
};

export default NavButton;
