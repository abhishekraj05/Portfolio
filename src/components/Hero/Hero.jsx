import React from "react";
import styles from "./Hero.module.css";
import abhiRem from "../../assets/hero/abhiRem.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi i'm Abhishek</h1>
        <p className={styles.description}>
        I’m a MERN stack developer passionate about building full-stack web
          applications using MongoDB, Express, React, and Node.js. I enjoy
          creating responsive, user-friendly interfaces and robust backends.
        </p>
        <a href="abhishekraj995554@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={abhiRem} alt="hero image of me" className={styles.heroimg} />
      <div className={styles.topBlur} />
      <div className={styles.BottomBlur} />
    </section>
  );
};


export default Hero;