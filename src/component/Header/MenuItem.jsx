import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ menu }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link active" to={menu.url}>
        {menu.title}
      </Link>
    </li>
  );
};

export default MenuItem;
