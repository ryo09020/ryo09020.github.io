// src/pages/SkillsPage/index.tsx
import React from 'react';
import styles from './index.module.scss';
// import SkillItem from '../../components/SkillItem'; // 任意で作成するSkillItemコンポーネント

interface Skill {
  name: string;
  level: number; // 例: 1-5段階評価
  experience?: string; // 例: "業務で1年使用", "個人開発で使用"
}

const skillsData: Skill[] = [
  { name: 'HTML', level: 4, experience: '基本的なサイト構造を問題なく記述できます。' },
  { name: 'CSS/SCSS', level: 4, experience: 'レスポンシブデザイン、CSS Modulesの経験があります。' },
  { name: 'JavaScript', level: 3, experience: 'ES6+の基本的な構文を理解し、DOM操作が可能です。' },
  { name: 'TypeScript', level: 3, experience: 'Reactプロジェクトで基本的な型付けが可能です。' },
  { name: 'React', level: 3, experience: '関数コンポーネント、Hooks、React Routerを使ったSPA開発経験があります。' },
  { name: 'Git/GitHub', level: 3, experience: '基本的なバージョン管理、プルリクエストの経験があります。' },
  // 他のスキルを追加
];

const SkillsPage: React.FC = () => {
  return (
    <div className={`container ${styles.skillsContainer}`}>
      <h1>テクニカルスキル</h1>
      <p>私がこれまでに学習・使用してきた主な技術スタックです。</p>
      <div className={styles.skillsGrid}>
        {skillsData.map(skill => (
          // <SkillItem key={skill.name} name={skill.name} level={skill.level} experience={skill.experience} />
          // 上記の代わりにシンプルな表示
          <div key={skill.name} className={styles.skillCard}>
            <h3>{skill.name}</h3>
            <div className={styles.skillLevelBarContainer}>
              <div className={styles.skillLevelBar} style={{ width: `${skill.level * 20}%` }}>
                Lv.{skill.level}
              </div>
            </div>
            {skill.experience && <p className={styles.skillExperience}>{skill.experience}</p>}
          </div>
        ))}
      </div>
      <section>
        <h2>学習中の技術</h2>
        <p>[現在学習中の技術や今後習得したい技術などを記述]</p>
      </section>
    </div>
  );
};
export default SkillsPage;