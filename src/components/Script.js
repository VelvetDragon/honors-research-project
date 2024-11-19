// src/components/Script.js
import styles from '@/styles/Script.module.css';

const Script = ({ content }) => {
  return <pre className={styles.script}>{content}</pre>;
};

export default Script;
