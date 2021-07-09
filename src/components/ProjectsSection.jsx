import { ProjectCard } from './ProjectCard';

import ProjectTrafalgar from '../assets/images/project-trafalgar.png';
import Moveit from '../assets/images/moveit.png';
import DevFinance from '../assets/images/dev-finance.png';

import styles from '../styles/ProjectsSection.module.scss';

export function ProjectsSection() {
  return (
    <div className={styles.projectsSection}>
      <section>
        <h2>Projetos</h2>
        <div className={styles.projectsCards}>
          <ProjectCard
            title="Landing page para empresa de Healthcare"
            imageSrc={ProjectTrafalgar}
            projectUrl="https://github.com/ValdirAPN/trafalgar-landing-pange"
            pageUrl="https://trafalgar-vpn.vercel.app/"
          />
          <ProjectCard
            title="Web App de Pomodoro com recomendação de exercícios"
            imageSrc={Moveit}
            projectUrl="https://github.com/ValdirAPN/moveit-nlw"
            pageUrl="https://moveit-vpn.vercel.app/"
          />
          <ProjectCard
            title="Web App de Gerenciamento de finanças para Devs"
            imageSrc={DevFinance}
            projectUrl="https://github.com/ValdirAPN/dev-finance-maratona-discover"
            pageUrl="https://dev-finance-maratona-discover.vercel.app/#"
          />
        </div>
      </section>
    </div>
  );
}