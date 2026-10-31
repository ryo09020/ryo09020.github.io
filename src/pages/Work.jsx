import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    ExternalLink,
    Code2,
    Briefcase,
    GraduationCap,
    Award,
    Layers
} from 'lucide-react';

import { useTranslation } from '../hooks/useTranslation';

const Work = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('all');

    // Tabs including Projects as one of the experience/track record tabs
    const tabs = [
        { id: 'all', label: t('tabAll'), icon: <Layers size={14} /> },
        { id: 'projects', label: t('tabProjectsNav') || 'Projects', icon: <Code2 size={14} /> },
        { id: 'professional', label: t('tabProfessional'), icon: <Briefcase size={14} /> },
        { id: 'academic', label: t('tabAcademic'), icon: <GraduationCap size={14} /> },
        { id: 'extracurricular', label: t('tabExtracurricular'), icon: <Award size={14} /> }
    ];

    const academicList = useMemo(() => {
        return (t('academicExp') || []).map(item => ({
            ...item,
            categoryKey: 'academic',
            categoryLabel: t('tabAcademic'),
            icon: <GraduationCap size={15} />
        }));
    }, [t]);

    const professionalList = useMemo(() => {
        return (t('professionalExp') || []).map(item => ({
            ...item,
            categoryKey: 'professional',
            categoryLabel: t('tabProfessional'),
            icon: <Briefcase size={15} />
        }));
    }, [t]);

    const extracurricularList = useMemo(() => {
        return (t('extracurricularExp') || []).map(item => ({
            ...item,
            categoryKey: 'extracurricular',
            categoryLabel: t('tabExtracurricular'),
            icon: <Award size={15} />
        }));
    }, [t]);

    const currentExperiences = useMemo(() => {
        if (activeTab === 'academic') return academicList;
        if (activeTab === 'professional') return professionalList;
        if (activeTab === 'extracurricular') return extracurricularList;
        return [...professionalList, ...academicList, ...extracurricularList];
    }, [activeTab, academicList, professionalList, extracurricularList]);

    const showProjects = activeTab === 'all' || activeTab === 'projects';
    const showExperiences = activeTab !== 'projects';

    return (
        <div className="work-page">
            <div className="home home--compact">
                {/* Back to Home Navigation */}
                <div className="home__container" style={{ paddingTop: '2rem' }}>
                    <Link to="/" className="home__back-link">
                        <ArrowLeft size={16} />
                        <span>{t('home')}</span>
                    </Link>
                </div>

                {/* Experience & Projects Section */}
                <section className="home__experience" id="work" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
                    <div className="home__container">
                        <div className="home__section-header">
                            <div className="home__section-kicker">
                                <Briefcase size={16} />
                                <span>Track Record & Works</span>
                            </div>
                            <h1 className="home__section-title">{t('experienceTitle')}</h1>
                            <p className="home__section-subtitle">{t('experienceSubtitle')}</p>
                        </div>

                        {/* Filter Tabs (Projects integrated as a tab) */}
                        <div className="home__tabs" style={{ marginBottom: '2.5rem' }}>
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`home__tab-btn ${activeTab === tab.id ? 'home__tab-btn--active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* 1. Projects Section View (when 'all' or 'projects') */}
                        {showProjects && (
                            <div className="work__projects-container" style={{ marginBottom: showExperiences ? '3.5rem' : '0' }}>
                                {activeTab === 'all' && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--c-text-primary)', fontSize: '1.1rem', fontWeight: 700 }}>
                                        <Code2 size={18} color="var(--c-accent)" />
                                        <span>{t('projectsTitle')}</span>
                                    </div>
                                )}
                                <div className="home__projects-grid">
                                    {t('projects').map((project) => (
                                        <article key={project.title} className="home__project-compact-card">
                                            {project.image && (
                                                <div className="home__project-compact-image">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        style={{ objectPosition: project.imagePosition || 'center' }}
                                                    />
                                                </div>
                                            )}
                                            <div className="home__project-compact-body">
                                                <div className="home__project-compact-meta">
                                                    <span className="home__project-compact-cat">{project.category}</span>
                                                    <span className="home__project-compact-status">{project.status}</span>
                                                </div>
                                                <h3 className="home__project-compact-title">{project.title}</h3>
                                                <p className="home__project-compact-desc">{project.description}</p>
                                                <div className="home__project-compact-links">
                                                    {project.links && project.links.map((link, i) => (
                                                        <a
                                                            key={i}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="home__project-compact-link"
                                                        >
                                                            <span>{link.label}</span>
                                                            <ExternalLink size={13} />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. Experience Timeline View (when 'all', 'professional', 'academic', 'extracurricular') */}
                        {showExperiences && (
                            <div className="work__experience-container">
                                {activeTab === 'all' && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--c-text-primary)', fontSize: '1.1rem', fontWeight: 700 }}>
                                        <Briefcase size={18} color="var(--c-accent)" />
                                        <span>{t('experienceTitle')}</span>
                                    </div>
                                )}
                                <div className="home__timeline-compact">
                                    <AnimatePresence mode="popLayout">
                                        {currentExperiences.map((item, index) => (
                                            <motion.div
                                                key={`${item.role}-${item.company}-${index}`}
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                transition={{ duration: 0.25, delay: index * 0.04 }}
                                                className="home__timeline-card"
                                            >
                                                <div className="home__timeline-card-header">
                                                    <div className="home__timeline-card-badge">
                                                        {item.icon}
                                                        <span>{item.categoryLabel}</span>
                                                    </div>
                                                    <span className="home__timeline-card-year">{item.year}</span>
                                                </div>
                                                <h3 className="home__timeline-card-role">{item.role}</h3>
                                                <div className="home__timeline-card-company">{item.company}</div>
                                                <p className="home__timeline-card-desc">{item.description}</p>
                                                {item.links && (
                                                    <div className="home__timeline-card-links">
                                                        {item.links.map((link, i) => (
                                                            <a
                                                                key={i}
                                                                href={link.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="home__timeline-card-link"
                                                            >
                                                                <span>{link.label}</span>
                                                                <ExternalLink size={12} />
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Work;
