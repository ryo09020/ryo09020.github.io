// src/pages/WorksPage/index.tsx
import React from 'react';
import styles from './index.module.scss';
// import WorkCard from '../../components/WorkCard'; // 任意で作成するWorkCardコンポーネント
// import workImage1 from '../../assets/work1.png'; // 各作品の画像 (assetsフォルダに配置)

interface Work {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string; // 画像のパス
  liveUrl?: string;  // 公開URL
  repoUrl?: string;  // GitHubリポジトリURL
}

const worksData: Work[] = [
  {
    id: 'work1',
    title: 'ポートフォリオサイト (このサイト)',
    description: 'React, TypeScript, SCSS Modules, React Routerを使用して作成した自己紹介と制作物を掲載するサイトです。',
    technologies: ['React', 'TypeScript', 'SCSS', 'Vite', 'React Router'],
    // imageUrl: workImage1,
    repoUrl: 'https://github.com/yourusername/your-portfolio-repo', // あなたのリポジトリ
  },
  {
    id: 'work2',
    title: 'プロジェクト名B',
    description: '[プロジェクトBの簡単な説明。どのような目的で何を作ったか。]',
    technologies: ['使用技術A', '使用技術B', '使用技術C'],
    // imageUrl: ...,
    liveUrl: '[公開URLがあれば]',
    repoUrl: '[GitHubリポジトリURLがあれば]',
  },
  // 他の制作物を追加
];

const WorksPage: React.FC = () => {
  return (
    <div className={`container ${styles.worksContainer}`}>
      <h1>制作物</h1>
      <p>これまでに取り組んだプロジェクトや作品の一部です。</p>
      <div className={styles.worksGrid}>
        {worksData.map(work => (
          // <WorkCard key={work.id} work={work} />
          // 上記の代わりにシンプルな表示
          <article key={work.id} className={styles.workCard}>
            {work.imageUrl && <img src={work.imageUrl} alt={work.title} className={styles.workImage} />}
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <p><strong>使用技術:</strong> {work.technologies.join(', ')}</p>
            <div className={styles.workLinks}>
              {work.liveUrl && <a href={work.liveUrl} target="_blank" rel="noopener noreferrer">サイトを見る</a>}
              {work.repoUrl && <a href={work.repoUrl} target="_blank" rel="noopener noreferrer">コードを見る (GitHub)</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default WorksPage;