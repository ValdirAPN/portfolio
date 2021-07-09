import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import styles from './styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
