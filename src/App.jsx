import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Using HashRouter for GitHub Pages
import Layout from './components/Layout';
import Home from './pages/Home';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
