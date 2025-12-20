import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Layout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const location = useLocation();

    const labels = {
        jp: { home: 'ホーム', profile: 'プロフィール', blog: 'ブログ' },
        en: { home: 'Home', profile: 'Profile', blog: 'Blog' }
    };

    const content = labels[language];

    const navItems = [
        { path: '/', label: content.home },
        { path: '/profile', label: content.profile },
        { path: '/blog', label: content.blog },
    ];

    return (
        <div className="min-h-screen flex flex-col selection:bg-gray-200">
            {/* Navigation - Clean & Minimal */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(247,247,248,0.8)] backdrop-blur-md">
                <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
                    <NavLink to="/" className="text-xl font-bold tracking-tight text-black hover:opacity-60 transition-opacity">
                        RYO.
                    </NavLink>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-xs font-mono ml-4 text-gray-500 hover:text-black border border-gray-200 px-2 py-1 rounded-md"
                        >
                            <Globe size={12} />
                            {language === 'jp' ? 'EN' : 'JP'}
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-xs font-mono text-gray-500"
                        >
                            {language === 'jp' ? 'EN' : 'JP'}
                        </button>
                        <button
                            className="text-black"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                        >
                            <div className="px-6 py-4 flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `text-lg font-medium py-2 block ${isActive ? 'text-black' : 'text-gray-400'
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content */}
            <main className="flex-1 pt-32 pb-24 w-full max-w-4xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Simplified Footer */}
            <footer className="py-8 text-center text-gray-400 text-xs">
                <p>© {new Date().getFullYear()} Ryo.</p>
            </footer>
        </div>
    );
};

export default Layout;
