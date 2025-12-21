import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="layout">
            <Header />

            <main className="layout__main">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="layout__footer">
                <div className="layout__footer-container">
                    <div className="layout__footer-content">
                        <div className="layout__footer-info">
                            <h3 className="layout__footer-title">Ryo</h3>
                            <p className="layout__footer-description">
                                Frontend Developer & UI Designer based in Tokyo, Japan
                            </p>
                        </div>
                        <div className="layout__footer-links">
                            <div className="layout__footer-section">
                                <h4 className="layout__footer-section-title">Connect</h4>
                                <div className="layout__footer-link-list">
                                    <a href="https://github.com/ryo09020" target="_blank" rel="noopener noreferrer" className="layout__footer-link">
                                        GitHub
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="layout__footer-link">
                                        LinkedIn
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="layout__footer-link">
                                        Twitter
                                    </a>
                                </div>
                            </div>
                            <div className="layout__footer-section">
                                <h4 className="layout__footer-section-title">Contact</h4>
                                <div className="layout__footer-link-list">
                                    <a href="mailto:hello@ryo.dev" className="layout__footer-link">
                                        hello@ryo.dev
                                    </a>
                                    <span className="layout__footer-text">Tokyo, Japan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout__footer-bottom">
                        <span className="layout__footer-copyright">
                            © 2024 Ryo. All rights reserved.
                        </span>
                        <span className="layout__footer-made">
                            Made with ❤️ in Tokyo
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
