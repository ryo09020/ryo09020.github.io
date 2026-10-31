import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Using HashRouter for GitHub Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import KetchupDesktop from './pages/KetchupDesktop';
import Work from './pages/Work';
import BusinessCard from './pages/BusinessCard';
import ScrollToTop from './components/ScrollToTop';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/card" element={<BusinessCard />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="ketchup" element={<KetchupDesktop />} />
              <Route path="work" element={<Work />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
