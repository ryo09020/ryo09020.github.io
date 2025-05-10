// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home';
// import AboutPage from './pages/AboutPage';
// import SkillsPage from './pages/SkillsPage';
// import WorksPage from './pages/WorksPage';
// import NotFoundPage from './pages/NotFoundPage';
import styles from './App.module.scss'; // Appコンポーネント用のスタイル

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="*" element={<NotFoundPage />} /> どのルートにもマッチしない場合 */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;