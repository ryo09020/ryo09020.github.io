// src/pages/AboutPage/index.tsx
import React from 'react';
import styles from './index.module.scss';
// import myProfileImage from '../../assets/profile.jpg'; // プロフィール画像 (assetsフォルダに配置)

const AboutPage: React.FC = () => {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h1>自己紹介</h1>
      {/* <img src={myProfileImage} alt="[あなたの名前]" className={styles.profileImage} /> */}
      <section>
        <h2>基本情報</h2>
        <p>氏名: [あなたの名前]</p>
        <p>拠点: 宮城県仙台市</p>
        <p>目指す職種: フロントエンドエンジニア / Webデベロッパー など</p>
      </section>
      <section>
        <h2>経歴</h2>
        <ul>
          <li>20XX年 YYYY大学卒業</li>
          <li>20XX年 プログラミング学習開始</li>
          {/* ... */}
        </ul>
      </section>
      <section>
        <h2>パーソナリティ・趣味</h2>
        <p>[あなたの性格や好きなこと、価値観などを記述]</p>
      </section>
      <section>
        <h2>このサイトについて</h2>
        <p>このポートフォリオサイトはReact、TypeScript、SCSS Modulesを使用して作成しました。学習の記録とアウトプットを兼ねています。</p>
      </section>
    </div>
  );
};
export default AboutPage;