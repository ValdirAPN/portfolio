import GithubIcon from '../assets/images/github.svg';
import LinkedinIcon from '../assets/images/linkedin.svg';

import styles from '../styles/SocialMediaBar.module.scss';

export function SocialMediaBar() {
  return (
    <div className={styles.socialMediaBar}>
      <a href="http://github.com/valdirapn" target="_blank" rel="noreferrer" >
        <img src={GithubIcon} alt="Github icon"  />
      </a>
      <a href="http://linkedin.com/in/valdirpn" target="_blank" rel="noreferrer" >
        <img src={LinkedinIcon} alt="Linkedin icon" />
      </a>
    </div>
  );
}