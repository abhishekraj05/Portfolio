import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import resume from "../../assets/contact/resume.jpg";

<script>
  const eml = document.querySelector(".email");
  eml.style.color = "purple";
</script>

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
          <a className={styles.email} href="abhishekraj995554@gmail.com">abhishekraj995554@gmail.com</a>
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
          <a href="https://drive.google.com/file/d/1ByliTpsokTYdxk7mVDCuGxZGoSKPC7yp/view?usp=sharing">Download Resume</a>
        </li>
      </ul>
    </footer>
  );
};


