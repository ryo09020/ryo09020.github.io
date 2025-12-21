import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const Header = () => {
    const { language, toggleLanguage } = useLanguage();
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', label: t('home') },
        { path: '/profile', label: t('about') },
        { path: '/blog', label: t('work') },
    ];

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`header ${scrolled ? 'header--scrolled' : ''}`}
        >
            <div className="header__container">
                {/* Logo */}
                <NavLink to="/" className="header__logo">
                    <span className="header__logo-text">Ryo</span>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="header__nav">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => 
                                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Actions */}
                <div className="header__actions">
                    <button
                        onClick={toggleLanguage}
                        className="header__lang-btn"
                        aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
                    >
                        <svg 
                            className="header__lang-icon" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M2 12h20"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                        <span className="header__lang-text">
                            {language === 'en' ? 'EN' : 'JP'}
                        </span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="header__menu-toggle"
                        aria-label="Toggle menu"
                    >
                        <span className={`header__menu-line ${isMenuOpen ? 'header__menu-line--open' : ''}`}></span>
                        <span className={`header__menu-line ${isMenuOpen ? 'header__menu-line--open' : ''}`}></span>
                        <span className={`header__menu-line ${isMenuOpen ? 'header__menu-line--open' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="header__mobile-menu"
                    >
                        <nav className="header__mobile-nav">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => 
                                            `header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
