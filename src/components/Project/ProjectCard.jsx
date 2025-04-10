import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={project.imageSrc}
          alt={project.title}
          className={styles.image}
        />
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.skills}>
          {project.skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a
            href={project.demoLink}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            href={project.sourceLink}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};