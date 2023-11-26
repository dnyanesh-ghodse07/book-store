import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ route }) => {
  return (
    <NavLink
      className="border-2 px-2 py-1 hover:bg-slate-600 hover:text-cyan-100"
      to={route.path}
    >
      {route.title}
    </NavLink>
  );
};

export default NavButton;
