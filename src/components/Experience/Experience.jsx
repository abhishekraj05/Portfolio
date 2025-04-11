import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import airbnb from "../../assets/history/airbnb.jpg";

// Import all skill images dynamically
const skillImages = import.meta.glob("../../assets/skills/*.png", {
  eager: true,
  import: "default",
});

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const imagePath = `../../assets/skills/${skill.imageSrc}`;
            const imageUrl = skillImages[imagePath];

            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={imageUrl} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img src={airbnb} alt="Personal Project logo" />

            <div className={styles.historyItemDetails}>
              <h3>Full Stack Developer, Personal Project</h3>

              <p>Jan, 2024 - Mar, 2024</p>

              <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                <li>
                  Built a full-featured Airbnb clone using HTML, CSS,
                  JavaScript, and Node.js
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
