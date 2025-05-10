// src/pages/HomePage/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className="container"> {/* グローバルCSSのコンテナクラスを利用 */}
      <section className={styles.hero}>
        <h1 className={styles.title}>こんにちは、[あなたの名前]です。</h1>
        <p className={styles.subtitle}>
          [あなたのキャッチフレーズや目指す職種など。例: フロントエンドエンジニアを目指して日々学習中です。]
        </p>
        <Link to="/works" className={styles.ctaButton}>制作物を見る</Link>
      </section>

      <section className={styles.section}>
        <h2>私について</h2>
        <p>
          [簡単な自己紹介と、詳細ページへの誘導。例: 仙台でWeb技術を学んでいます。詳しい経歴やスキルは「自己紹介」ページをご覧ください。]
        </p>
        <Link to="/about">もっと詳しく</Link>
      </section>

      <section className={styles.section}>
        <h2>最新情報 (任意)</h2>
        <p>[ブログ記事へのリンクやお知らせなど。なければこのセクションは不要。]</p>
      </section>
    </div>
  );
};

export default HomePage;