import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const Profile = () => {
    const { t } = useTranslation();

    return (
        <div className="profile">
            {/* Hero Section */}
            <section className="profile__hero">
                <div className="profile__hero-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="profile__hero-content"
                    >
                        <h1 className="profile__hero-title">{t('aboutMeTitle')}</h1>
                        <p className="profile__hero-description">
                            {t('profileDescription')}
                        </p>
                        <div className="profile__hero-stats">
                            <div className="profile__stat">
                                <span className="profile__stat-number">4+</span>
                                <span className="profile__stat-label">{t('yearsExperience')}</span>
                            </div>
                            <div className="profile__stat">
                                <span className="profile__stat-number">50+</span>
                                <span className="profile__stat-label">{t('projectsCompleted')}</span>
                            </div>
                            <div className="profile__stat">
                                <span className="profile__stat-number">15+</span>
                                <span className="profile__stat-label">{t('happyClients')}</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="profile__hero-image"
                    >
                        <div className="profile__avatar">
                            <div className="profile__avatar-bg"></div>
                            <span className="profile__avatar-text">RY</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="profile__experience">
                <div className="profile__container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="profile__section-title"
                    >
                        {t('workExperience')}
                    </motion.h2>
                    <div className="profile__timeline">
                        {t('experience').map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="profile__timeline-item"
                            >
                                <div className="profile__timeline-marker"></div>
                                <div className="profile__timeline-content">
                                    <div className="profile__timeline-header">
                                        <h3 className="profile__timeline-role">{item.role}</h3>
                                        <span className="profile__timeline-year">{item.year}</span>
                                    </div>
                                    <div className="profile__timeline-company">{item.company}</div>
                                    <p className="profile__timeline-description">{item.description}</p>
                                    <div className="profile__timeline-tech">
                                        {item.technologies.map(tech => (
                                            <span key={tech} className="profile__tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="profile__skills">
                <div className="profile__container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="profile__section-title"
                    >
                        {t('skillsTechnologies')}
                    </motion.h2>
                    <div className="profile__skills-grid">
                        {Object.entries(t('skillsCategories')).map(([category, skills], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="profile__skill-category"
                            >
                                <h3 className="profile__skill-category-title">{category}</h3>
                                <div className="profile__skill-list">
                                    {skills.map(skill => (
                                        <span key={skill} className="profile__skill-item">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="profile__education">
                <div className="profile__container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="profile__section-title"
                    >
                        {t('education')}
                    </motion.h2>
                    <div className="profile__education-list">
                        {t('educationData').map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="profile__education-item"
                            >
                                <div className="profile__education-header">
                                    <h3 className="profile__education-degree">{item.degree}</h3>
                                    <span className="profile__education-year">{item.year}</span>
                                </div>
                                <div className="profile__education-school">{item.school}</div>
                                <p className="profile__education-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Section */}
            <section className="profile__personal">
                <div className="profile__container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="profile__personal-content"
                    >
                        <h2 className="profile__section-title">{t('beyondCode')}</h2>
                        <p className="profile__personal-text">
                            {t('personalText1')}
                        </p>
                        <p className="profile__personal-text">
                            {t('personalText2')}
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
