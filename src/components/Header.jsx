import React, { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

import ThemeToggle from './ThemeToggle';

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
        { path: '/work', label: t('work') },
        { path: '/card', label: 'Card' },
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
                <Link to="/" className="header__logo">
                    <motion.div
                        className="header__logo-text"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <motion.span
                            variants={{
                                rest: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 1 },
                                hover: {
                                    y: 15,
                                    x: 50,
                                    rotate: 45,
                                    scale: 0,
                                    opacity: 0,
                                    transition: { duration: 0.4, ease: "easeIn" }
                                }
                            }}
                            style={{ display: 'inline-block' }}
                        >
                            R
                        </motion.span>
                        <motion.span
                            variants={{
                                rest: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 1 },
                                hover: {
                                    y: 15,
                                    x: 20,
                                    rotate: -45,
                                    scale: 0,
                                    opacity: 0,
                                    transition: { duration: 0.4, delay: 0.1, ease: "easeIn" }
                                }
                            }}
                            style={{ display: 'inline-block' }}
                        >
                            y
                        </motion.span>
                        <motion.span
                            variants={{
                                rest: {
                                    scale: 1,
                                    rotateX: 0,
                                    y: 0,
                                    color: 'var(--c-text-primary)'
                                },
                                hover: {
                                    // Sequence: Normal -> Hole -> Hole(Eat) -> Fat O -> Burp -> Normal
                                    scale: [1, 2.5, 2.5, 1.5, 1.6, 1],
                                    rotateX: [0, 75, 75, 0, -10, 0],
                                    y: [0, 10, 10, -5, -8, 0],
                                    color: [
                                        'var(--c-text-primary)',
                                        'var(--c-accent)',
                                        'var(--c-accent)',
                                        'var(--c-accent)',
                                        'var(--c-accent)',
                                        'var(--c-text-primary)'
                                    ],
                                    transition: {
                                        duration: 2.5,
                                        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                                        ease: "easeInOut"
                                    }
                                }
                            }}
                            style={{
                                display: 'inline-block',
                                transformOrigin: "bottom center"
                            }}
                        >
                            o
                        </motion.span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header__nav">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                        >
                            <span>{item.label}</span>
                            {item.badge && <span className="header__nav-badge">{item.badge}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* Actions */}
                <div className="header__actions">
                    <ThemeToggle />
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
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span className="header__lang-text">
                            {language === 'en' ? 'JP' : 'EN'}
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
                                        className={({ isActive }) => `header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span>{item.label}</span>
                                        {item.badge && <span className="header__nav-badge">{item.badge}</span>}
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
