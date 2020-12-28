import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router"

const NavBar = () => {
  return (
    <nav>
      <h1>The Perfume Api</h1>
      <div className={styles.links}>
        <Link to='/'>About</Link>
        <Link to="dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default NavBar;
