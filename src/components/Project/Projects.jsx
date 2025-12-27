import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

// Dynamically import all project images
const projectImages = import.meta.glob(
  "../../assets/Projectt/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const Projects = () => {
  const projects = [
    {
      title: "Social Media Platform",
      imageSrc: projectImages["../../assets/Projectt/nexus.png"],
      skills: ["React", "Node.js", "MongoDB", "OpenAI"],
      sourceLink: "https://github.com/abhishekraj05/Nexus",
      projectLink: "https://crjoin.online/",
    },

    {
      title: "CRM Web Application  (In Progress)",

      imageSrc: projectImages["../../assets/Projectt/crm.png"],
      skills: ["React", "Express", "Node.js", "MongoDB"],
      sourceLink: "https://github.com/infocodrexa/CodRexa-CRM",
    },

    {
      title: "99 Vihar — Real Estate UI",
      imageSrc: projectImages["../../assets/Projectt/realestate.png"],
      skills: ["React", "CSS", "SEO", "Node.js", "Express"],
      sourceLink: "https://github.com/infocodrexa/REAL-ESTATE",
      projectLink: "https://99vihar.in/",
    },

    {
      title: "Leader Portfolio – jawaharlalray.in",
      imageSrc: projectImages["../../assets/Projectt/leader.png"],
      skills: ["React", "CSS", "SEO", "Node.js", "Express"],
      sourceLink: "https://github.com/infocodrexa/LeaderProject",
      projectLink: "https://jawaharlalray.in",
    },
  ];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
