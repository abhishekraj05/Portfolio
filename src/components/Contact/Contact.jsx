import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./src/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="abhishekraj995554@gmail.com">abhishekraj995554@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="./src/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abhishekraj2004/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src="./src/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/abhishekraj05/abhishek555272">github.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.resume} src="./src/assets/contact/resume.jpg" alt="Resume icon" />
          <a href="https://drive.google.com/file/d/1_5BE5lbHl52mXqX4Pz-ZNPgNwBY7LYpO/view?usp=sharing">Download Resume</a>
        </li>
      </ul>
    </footer>
  );
};