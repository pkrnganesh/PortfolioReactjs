import styles from './ProjectsStyles.module.css';
import camponline from '../../assets/camponline.png';
import clgweb from '../../assets/clgweb.png';
import emoji from '../../assets/emoji.png';
import vsexten from '../../assets/vsexten.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={camponline}
          link="https://github.com/pkrnganesh"
          h3="Campus online"
          p="E-commerce"
        />
        <ProjectCard
          src={clgweb}
          link="https://github.com/pkrnganesh"
          h3="College Web"
          p="College Website"
        />
        <ProjectCard
          src={emoji}
          link="https://github.com/pkrnganesh"
          h3="EmojipediaHub"
          p="Emoji Meanings"
        />
        <ProjectCard
          src={vsexten}
          link="https://github.com/pkrnganesh"
          h3="Quick Share"
          p="Vs Extension"
        />
      </div>
    </section>
  );
}

export default Projects;
