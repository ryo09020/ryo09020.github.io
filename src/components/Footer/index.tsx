// src/components/Footer/index.tsx
import React from 'react';
import styles from './index.module.scss';
// FontAwesomeなどのアイコンライブラリを使うと見栄えが良くなります
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          {/* <FaGithub /> または "GitHub" テキスト */} GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {/* <FaLinkedin /> または "LinkedIn" テキスト */} LinkedIn
        </a>
        <a href="mailto:youremail@example.com" aria-label="Email">
          Email
        </a>
        {/* 他のSNSリンク */}
      </div>
      <p className={styles.copyright}>
        &copy; {currentYear} [あなたの名前]. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;