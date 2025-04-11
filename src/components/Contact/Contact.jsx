import React from "react";

import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import resume from "../../assets/contact/resume.png";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="abhishekraj995554@gmail.com">abhishekraj995554@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abhishekraj2004/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/abhishekraj05/abhishek555272">github.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.resume} src={resume} alt="Resume icon" />
          <a href="https://drive.google.com/file/d/1Kk7x3xEhx9og1pOJXugSVsCoETq_5Vk0/view?usp=sharing">Download Resume</a>
        </li>
      </ul>
    </footer>
  );
};