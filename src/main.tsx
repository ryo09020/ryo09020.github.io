// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/global.scss'; // グローバルSCSSをインポート

// GitHub Pagesでプロジェクトサイト (例: username.github.io/repo-name/) の場合、
// basename を設定する必要があるかもしれません。
// const basename = process.env.PUBLIC_URL || '/your-repo-name'; // Create React App的な書き方
// Viteの場合は import.meta.env.BASE_URL が使えますが、通常package.jsonのhomepageで設定し、
// gh-pagesコマンドでデプロイすれば自動でパスが解決されることも期待できます。
// 明示的に設定する場合は以下のようにします。
// <BrowserRouter basename={import.meta.env.BASE_URL}>

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* basenameが必要な場合はここに設定 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);