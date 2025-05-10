// src/components/Header/index.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">[あなたの名前/サイト名]</Link>
      </div>
      <nav className={styles.navLinks}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''} end>ホーム</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>自己紹介</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? styles.active : ''}>スキル</NavLink>
        <NavLink to="/works" className={({ isActive }) => isActive ? styles.active : ''}>制作物</NavLink>
      </nav>
    </header>
  );
};

export default Header;