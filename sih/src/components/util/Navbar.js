import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 >IAM ADMIN</h1>
      <ul>
        <li>
          <Link to="/home">Products</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};