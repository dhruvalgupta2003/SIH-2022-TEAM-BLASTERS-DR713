import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
};