import React from "react";
import styles from "./About.module.css";
// import aboutImage from "../../assets/about/abhiRemove.png";
// import aboutImage from "D:/web dev/FRONTEND PROJECT/REACT-PORTFOLIO/portfolio/src/assets/hero/abhiRem.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

import abhiRem from '../../assets/hero/abhiRem.png';


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.abhiRem}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursior icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in HTML, CSS,
                Javascript, React, Bootstrap, talwindCSS
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optmised back-enc and APIs
              </p>
            </div>
          </li>
        
        </ul>
      </div>
    </section>
  );
};
