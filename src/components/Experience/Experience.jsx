import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";

// Import all skill images dynamically
const skillImages = import.meta.glob(
  "../../assets/skills/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const Experience = () => {
  const experienceItems = [
    {
      title: "Social Media Platform | Full Stack Application (MERN)",
      period: "2025",
      details: [
        "Developed a scalable MERN-based social media platform with real-time interactions and secure authentication.",
        "Designed responsive UI and optimized backend APIs for better performance."
      ],
    },
    {
      title: "News Portal (TheLocalMirror) | Full Stack Web Application (Next.js, MongoDB, Express.js, Node.js)",
      period: "2025",
      details: [
        "Developed an SEO-optimized news platform with fast rendering and structured content delivery.",
        "Improved performance and scalability using modern full-stack technologies."
      ],
    },
    {
      title: "99 Vihar | Real Estate Platform",
      period: "2024",
      details: [
        "Developed a component-based static web app using React.",
        "SEO optimized property listings with fast UI performance.",
      ],
    },
    {
      title: "Leader Portfolio | jawaharlalray.in",
      period: "2025",
      details: [
        "Developed a personal portfolio website using React + CSS.",
        "Fully responsive, SEO-optimized, and hosted live on Google.",
      ],
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        {/* Skills Section */}
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

        {/* Right Side Experience Cards */}
        <ul className={styles.history}>
          {experienceItems.map((item, index) => (
            <li key={index} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{item.title}</h3>
                <p>{item.period}</p>

                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {item.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
