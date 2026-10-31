import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Download,
    ExternalLink,
    ArrowLeft,
    Sparkles,
    Zap,
    Bell,
    Target,
    Globe,
    ShieldCheck,
    Laptop,
    CheckCircle2
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const KetchupDesktop = () => {
    const { t } = useTranslation();

    return (
        <div className="ketchup-page">
            <div className="home home--compact">
                {/* Back to Home Navigation */}
                <div className="home__container" style={{ paddingTop: '2rem' }}>
                    <Link to="/" className="home__back-link">
                        <ArrowLeft size={16} />
                        <span>{t('home')}</span>
                    </Link>
                </div>

                {/* KetchUp Desktop Spotlight Section */}
                <section className="home__featured" id="featured" style={{ paddingTop: '1rem' }}>
                    <div className="home__container">
                        <div className="home__featured-card">
                            <div className="home__featured-glow"></div>

                            <div className="home__featured-header">
                                <div className="home__featured-badge">
                                    <Sparkles size={14} />
                                    <span className="home__featured-badge-text">{t('featuredBadge')}</span>
                                    <span className="home__featured-badge-version">v0.2.4</span>
                                </div>
                                <h1 className="home__featured-title">{t('featuredTitle')}</h1>
                                <p className="home__featured-tagline">{t('featuredTagline')}</p>
                                <p className="home__featured-description">{t('featuredDescription')}</p>
                            </div>

                            {/* 3 Highlights */}
                            <div className="home__featured-highlights">
                                <div className="home__featured-highlight">
                                    <div className="home__highlight-icon">
                                        <Zap size={18} />
                                    </div>
                                    <div>
                                        <h4 className="home__featured-highlight-title">{t('featuredFeature1Title')}</h4>
                                        <p className="home__featured-highlight-desc">{t('featuredFeature1Desc')}</p>
                                    </div>
                                </div>
                                <div className="home__featured-highlight">
                                    <div className="home__highlight-icon">
                                        <Bell size={18} />
                                    </div>
                                    <div>
                                        <h4 className="home__featured-highlight-title">{t('featuredFeature2Title')}</h4>
                                        <p className="home__featured-highlight-desc">{t('featuredFeature2Desc')}</p>
                                    </div>
                                </div>
                                <div className="home__featured-highlight">
                                    <div className="home__highlight-icon">
                                        <Target size={18} />
                                    </div>
                                    <div>
                                        <h4 className="home__featured-highlight-title">{t('featuredFeature3Title')}</h4>
                                        <p className="home__featured-highlight-desc">{t('featuredFeature3Desc')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="home__featured-actions">
                                <a
                                    href="https://github.com/ryo09020/ketchup-desktop/releases/latest"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="home__featured-btn home__featured-btn--primary"
                                >
                                    <Download size={17} />
                                    <span>{t('featuredDownloadBtn')}</span>
                                    <ExternalLink size={14} style={{ opacity: 0.8 }} />
                                </a>
                            </div>

                            {/* Reassuring download notice */}
                            <p className="home__featured-download-note">
                                <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                                {t('featuredDownloadNote')}
                            </p>

                            {/* macOS Window Mockup */}
                            <div className="home__featured-mockup">
                                <div className="home__featured-window">
                                    <div className="home__featured-window-bar">
                                        <div className="home__featured-window-dots">
                                            <span className="dot dot--red"></span>
                                            <span className="dot dot--yellow"></span>
                                            <span className="dot dot--green"></span>
                                        </div>
                                        <span className="home__featured-window-title">KetchUp — Desktop v0.2.4</span>
                                        <div className="home__featured-window-spacer"></div>
                                    </div>
                                    <div className="home__featured-window-body">
                                        <img
                                            src="/images/ketchup.png"
                                            alt="KetchUp Desktop"
                                            className="home__featured-window-img"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Quick specs / updates card */}
                            <div className="home__featured-footer-info" style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', textAlign: 'left' }}>
                                <div style={{ background: 'var(--c-bg-secondary)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--c-border-subtle)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                                        <Laptop size={16} color="var(--c-accent)" />
                                        <span>System Compatibility</span>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--c-text-secondary)', lineHeight: 1.5 }}>
                                        macOS (Apple Silicon & Intel). Continuous improvements and auto-updates are tracked via GitHub Releases.
                                    </p>
                                </div>
                                <div style={{ background: 'var(--c-bg-secondary)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--c-border-subtle)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                                        <CheckCircle2 size={16} color="var(--c-accent)" />
                                        <span>Release Strategy</span>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--c-text-secondary)', lineHeight: 1.5 }}>
                                        Always pointing to <code>/releases/latest</code> ensuring you can get the newest desktop enhancements seamlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default KetchupDesktop;
