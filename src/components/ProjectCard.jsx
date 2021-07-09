import styles from '../styles/ProjectCard.module.scss';

export function ProjectCard({ title, imageSrc, projectUrl, pageUrl }) {
  return (
    <div className={styles.projectCard}>
      <img src={imageSrc} alt="" />
      <div className={styles.textArea}>
        <h3>{title}</h3>
        <div className={styles.links}>
          <a href={projectUrl} target="_blank" rel="noreferrer">ver código</a>
          <a href={pageUrl} target="_blank" rel="noreferrer">ver página</a>
        </div>
      </div>
    </div>
  );
}