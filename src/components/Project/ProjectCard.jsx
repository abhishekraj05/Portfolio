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
        <div className={styles.links}>
          <a
            href={project.sourceLink}
            className={styles.link}
            target="_blank"
            rel="noreferrer">
            Source
          </a>
          <a
            href={project. projectLink}
            className={styles.link}
            target="_blank"
            rel="noreferrer">
            Link
          </a>
        </div>
      </div>
    </div>
  );
};
