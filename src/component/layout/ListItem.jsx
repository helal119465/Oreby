import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ className, activeClass, item, link }) => {
  return (
    <li className={`${className}`}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? `${activeClass}` : "")}
      >
        {item}
      </NavLink>
    </li>
  );
};

export default ListItem;
