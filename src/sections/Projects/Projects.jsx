import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectsCard from '../../common/ProjectsCard';
import viberr from "../../assets/viberr.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectsCard 
                src={viberr} 
                link='https://github.com/RakshithNalgonda17/Email_Extraction_Web_Application.git'
                h3="Email Extraction Web Application"
                p="App that extracts email-content"
            />
        </div>
        <div className={styles.projectsContainer}>
            <ProjectsCard 
                src={viberr} 
                link='https://github.com/RakshithNalgonda17/Email_Extraction_Web_Application.git'
                h3="Email Extraction Web Application"
                p="App that extracts email-content"
            />
        </div>
        <div className={styles.projectsContainer}>
            <ProjectsCard 
                src={viberr} 
                link='https://github.com/RakshithNalgonda17/Email_Extraction_Web_Application.git'
                h3="Email Extraction Web Application"
                p="App that extracts email-content"
            />
        </div>
    </section>
  );
}

export default Projects;