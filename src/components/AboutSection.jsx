import { SocialMediaBar } from './SocialMediaBar';

import Avatar from '../assets/images/avatar.png'

import styles from '../styles/AboutSection.module.scss';
import { Button } from './Button';

export function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <section>
          <img className={styles.myPhoto} src={Avatar} alt="" />
          <div className={styles.textArea}>
            <SocialMediaBar />
            <span>Olá, meu nome é</span>
            <h1>Valdir Aires.</h1>
            <p>
              Tenho 19 anos, e estudo Desenvolvimento Web
              há mais de 2 anos. Estou sempre buscando aprender
              coisas novas e aprimorar minhas habilidades técnicas
              e sociais.
            </p>
            <Button>Currículo</Button>
            <Button outline >Contato</Button>
          </div>
      </section>
    </div>
  );
}