import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Terminal,
    User,
    MessageSquare,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Cpu
} from 'lucide-react';
import {
    SiRubyonrails,
    SiGo,
    SiRust,
    SiReact,
    SiTypescript,
    SiPostgresql,
    SiMysql,
    SiPython,
    SiR,
    SiDocker,
    SiTerraform,
    SiTensorflow
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { useTranslation } from '../hooks/useTranslation';
import AIChatbot from '../components/AIChatbot';

const Home = () => {
    const { t } = useTranslation();

    // Technology icons
    const SKILL_ICONS = {
        rails: <SiRubyonrails size={30} className="skill-icon skill-icon--rails" />,
        go: <SiGo size={30} className="skill-icon skill-icon--go" />,
        rust: <SiRust size={30} className="skill-icon skill-icon--rust" />,
        react: <SiReact size={30} className="skill-icon skill-icon--react" />,
        typescript: <SiTypescript size={30} className="skill-icon skill-icon--typescript" />,
        aws: <FaAws size={30} className="skill-icon skill-icon--aws" />,
        postgresql: <SiPostgresql size={30} className="skill-icon skill-icon--postgresql" />,
        mysql: <SiMysql size={30} className="skill-icon skill-icon--mysql" />,
        python: <SiPython size={30} className="skill-icon skill-icon--python" />,
        r: <SiR size={30} className="skill-icon skill-icon--r" />,
        tensorflow: <SiTensorflow size={30} className="skill-icon skill-icon--tensorflow" />,
        docker: <SiDocker size={30} className="skill-icon skill-icon--docker" />,
        terraform: <SiTerraform size={30} className="skill-icon skill-icon--terraform" />
    };

    return (
        <div className="home-wrapper">
            <div className="home">
                {/* 1. Top Pill Alert for KetchUp Desktop (Round Toggle-like Single Line) */}
                <div className="home__pill-alert-wrapper">
                    <Link to="/ketchup" className="home__pill-alert">
                        <span className="home__pill-badge">
                            <Sparkles size={12} />
                            <span>NEW</span>
                        </span>
                        <span className="home__pill-text">
                            <strong>KetchUp Desktop v0.2.4</strong> is out now
                        </span>
                        <span className="home__pill-action">
                            <span>Detail</span>
                            <ArrowRight size={13} />
                        </span>
                    </Link>
                </div>

                {/* 2. Main Hero: Prominent Avatar & AI Chat Interaction */}
                <section className="home__hero" id="home">
                    <div className="home__hero-container">
                        {/* Left Column: Avatar Photo (Large) & Profile Identifiers */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="home__hero-profile"
                        >
                            <div className="home__hero-avatar">
                                <img src="/images/night.jpg" alt="Ryo" className="home__hero-avatar-img" />
                            </div>

                            <div className="home__hero-info">
                                <div className="home__hero-badge">
                                    <Terminal size={14} />
                                    <span>{t('heroTitle')}</span>
                                </div>
                                <h1 className="home__hero-name">Ryo</h1>
                            </div>
                        </motion.div>

                        {/* Right Column: AI Chatbot (Prominent conversation area) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="home__hero-chat-wrapper"
                        >
                            <div className="home__hero-chat-header">
                                <MessageSquare size={20} />
                                <h2>{t('heroChatTitle')}</h2>
                            </div>

                            <div className="home__hero-chat-box">
                                <AIChatbot />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. About & Personality Section */}
                <section className="home__personality" id="about" style={{ paddingTop: '2.5rem' }}>
                    <div className="home__container">
                        <div className="home__section-header">
                            <div className="home__section-kicker">
                                <User size={16} />
                                <span>Personality & Strengths</span>
                            </div>
                            <h2 className="home__section-title">{t('personalityTitle')}</h2>
                            <p className="home__personality-concept">{t('personalityConcept')}</p>
                        </div>

                        {/* 3 Personality Cards */}
                        <div className="home__personality-grid">
                            {t('personalityPoints').map((point, index) => (
                                <div key={index} className="home__personality-card">
                                    <div className="home__personality-card-header">
                                        <CheckCircle2 size={18} className="home__personality-check" />
                                        <span className="home__personality-card-number">0{index + 1}</span>
                                    </div>
                                    <h4 className="home__personality-card-title">{point.title}</h4>
                                    <p className="home__personality-card-description">{point.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Profile Summary Card */}
                        <div className="home__profile-card" style={{ maxWidth: '800px', margin: '2.5rem auto 0' }}>
                            <h3 className="home__profile-title">{t('briefProfile')}</h3>
                            <div className="home__personal-profile">
                                {[
                                    { key: 'name', label: t('profileLabels').name, value: t('personalProfile').name },
                                    { key: 'age', label: t('profileLabels').age, value: t('personalProfile').age },
                                    { key: 'education', label: t('profileLabels').education, value: t('personalProfile').education },
                                    { key: 'interests', label: t('profileLabels').interests, value: t('personalProfile').interests }
                                ].map(item => (
                                    <React.Fragment key={item.key}>
                                        <div className="home__personal-label">{item.label}</div>
                                        <div className="home__personal-value">{item.value}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                            <p className="home__personal-text" style={{ marginTop: '1.25rem' }}>
                                {t('personalText1')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Skills & Technologies Section */}
                <section className="home__skills" id="skills" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
                    <div className="home__container">
                        <div className="home__section-header">
                            <div className="home__section-kicker">
                                <Cpu size={16} />
                                <span>Tech Stack</span>
                            </div>
                            <h2 className="home__section-title">{t('skillsTitle')}</h2>
                        </div>

                        {/* Skills Grid */}
                        <div className="home__skills-grid-compact">
                            {t('skills').map(skill => (
                                <div key={skill.key} className="home__skill-pill">
                                    {SKILL_ICONS[skill.key]}
                                    <span className="home__skill-pill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
