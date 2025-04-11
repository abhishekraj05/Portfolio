import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

// Dynamically import project images
const projectImages = import.meta.glob(
  "../../assets/projects/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const Projects = () => {
  const project = {
    title: "Airbnb Clone",
    description: "Developed a full-stack Airbnb clone ",
    imageSrc: projectImages["../../assets/projects/proj.jpg"],
    skills: [],
    demoLink: "https://airnibs.onrender.com/listing", // You can update this to the real demo if available
    sourceLink: "https://github.com/abhishekraj05/abhishek555272", //update your own
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard project={project} />
      </div>
    </section>
  );
};
