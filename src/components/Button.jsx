import styles from '../styles/Button.module.scss';

export function Button({outline, children}) {
  return (
    <button className={`${styles.button} ${outline && styles.outline}`}>{children}</button>
  );
}