import React, { useState } from "react";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

import styles from "./Navbar.module.css";
import { getImageurl } from "../../utlis";

export const Navbar = () => {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <nav className={styles.Navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuopen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setmenuopen(!menuopen)}
        />
        <ul className={`${styles.menuItems} ${menuopen && styles.menuopen}`}
        onClick={ () => setmenuopen(false)} >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
