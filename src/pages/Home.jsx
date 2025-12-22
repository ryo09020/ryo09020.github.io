import { motion } from 'framer-motion';
import { SiRubyonrails, SiGo, SiReact, SiTypescript, SiPostgresql, SiMysql, SiPython, SiR, SiDocker, SiTerraform, SiTensorflow } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { useTranslation } from '../hooks/useTranslation';

const Home = () => {
    const { t } = useTranslation();

    const SKILL_ICONS = {
        rails: <SiRubyonrails size={40} color="#CC0000" />,
        go: <SiGo size={40} color="#00ADD8" />,
        react: <SiReact size={40} color="#61DAFB" />,
        typescript: <SiTypescript size={40} color="#3178C6" />,
        aws: <FaAws size={40} color="#FF9900" />,
        postgresql: <SiPostgresql size={40} color="#4169E1" />,
        mysql: <SiMysql size={40} color="#4479A1" />,
        python: <SiPython size={40} color="#3776AB" />,
        r: <SiR size={40} color="#276DC3" />,
        tensorflow: <SiTensorflow size={40} color="#FF6F00" />,
        docker: <SiDocker size={40} color="#2496ED" />,
        terraform: <SiTerraform size={40} color="#7B42BC" />
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="home__hero" id="home">
                <div className="home__hero-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="home__hero-content"
                    >
                        <h1 className="home__hero-title">
                            {t('heroTitle')}
                            <br />
                            <span className="home__hero-title-accent">{t('heroTitleAccent')}</span>
                        </h1>
                        <p className="home__hero-description">
                            {t('heroDescription')}
                        </p>
                        <div className="home__hero-actions">
                            <a href="#work" className="home__hero-btn home__hero-btn--primary">
                                {t('viewMyWork')}
                            </a>
                            <a href="#about" className="home__hero-btn home__hero-btn--secondary">
                                {t('aboutMe')}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="home__hero-visual"
                    >
                        <div className="home__hero-avatar">
                            <div className="home__hero-avatar-bg"></div>
                            <img src="/images/night.jpg" alt="Profile" className="home__hero-avatar-img" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Personality Section (About) */}
            <section className="home__personality" id="about">
                <div className="home__container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__section-header"
                    >
                        <h2 className="home__section-title">{t('personalityTitle')}</h2>
                        <h3 className="home__personality-concept">{t('personalityConcept')}</h3>
                        <p className="home__personality-intro">{t('personalityIntro')}</p>
                    </motion.div>

                    <div className="home__personality-grid">
                        {t('personalityPoints').map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="home__personality-card"
                            >
                                <div className="home__personality-card-number">0{index + 1}</div>
                                <h4 className="home__personality-card-title">{point.title}</h4>
                                <p className="home__personality-card-description">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="home__personality-tags"
                    >
                        {t('personalityTags').map((tag, index) => (
                            <span key={index} className="home__personality-tag">{tag}</span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Journey / Experience Section */}
            <section className="home__experience">
                <div className="home__container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__section-title"
                    >
                        {t('academicExperience')}
                    </motion.h2>
                    <div className="home__timeline">
                        {t('academicExp').map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="home__timeline-item"
                            >
                                <div className="home__timeline-marker home__timeline-marker--academic"></div>
                                <div className="home__timeline-content">
                                    <div className="home__timeline-header">
                                        <h3 className="home__timeline-role">{item.role}</h3>
                                        <span className="home__timeline-year">{item.year}</span>
                                    </div>
                                    <div className="home__timeline-company">{item.company}</div>
                                    <p className="home__timeline-description">{item.description}</p>
                                    <div className="home__timeline-tech">
                                        {item.technologies.map(tech => (
                                            <span key={tech} className="home__tech-tag home__tech-tag--academic">{tech}</span>
                                        ))}
                                    </div>
                                    {item.image && (
                                        <img src={item.image} alt={item.company} className="home__timeline-image" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home__experience">
                <div className="home__container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__section-title"
                    >
                        {t('professionalExperience')}
                    </motion.h2>
                    <div className="home__timeline">
                        {t('professionalExp').map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="home__timeline-item"
                            >
                                <div className="home__timeline-marker home__timeline-marker--professional"></div>
                                <div className="home__timeline-content">
                                    <div className="home__timeline-header">
                                        <h3 className="home__timeline-role">{item.role}</h3>
                                        <span className="home__timeline-year">{item.year}</span>
                                    </div>
                                    <div className="home__timeline-company">{item.company}</div>
                                    <p className="home__timeline-description">{item.description}</p>
                                    <div className="home__timeline-tech">
                                        {item.technologies.map(tech => (
                                            <span key={tech} className="home__tech-tag home__tech-tag--professional">{tech}</span>
                                        ))}
                                    </div>
                                    {item.image && (
                                        <img src={item.image} alt={item.company} className="home__timeline-image" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home__experience">
                <div className="home__container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__section-title"
                    >
                        {t('extracurricularActivities')}
                    </motion.h2>
                    <div className="home__timeline">
                        {t('extracurricularExp').map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="home__timeline-item"
                            >
                                <div className="home__timeline-marker home__timeline-marker--extracurricular"></div>
                                <div className="home__timeline-content">
                                    <div className="home__timeline-header">
                                        <h3 className="home__timeline-role">{item.role}</h3>
                                        <span className="home__timeline-year">{item.year}</span>
                                    </div>
                                    <div className="home__timeline-company">{item.company}</div>
                                    <p className="home__timeline-description">{item.description}</p>
                                    <div className="home__timeline-tech">
                                        {item.technologies.map(tech => (
                                            <span key={tech} className="home__tech-tag home__tech-tag--extracurricular">{tech}</span>
                                        ))}
                                    </div>
                                    {item.image && (
                                        <img src={item.image} alt={item.company} className="home__timeline-image" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Section */}
            <section className="home__personal">
                <div className="home__container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__personal-content"
                    >
                        <h2 className="home__section-title">{t('beyondCode')}</h2>
                        <div className="home__personal-image-container">
                            <img src="/images/pixar.jpg" alt="Personal" className="home__personal-image" />
                        </div>
                        <p className="home__personal-text">
                            {t('personalText1')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="home__skills">
                <div className="home__skills-marquee-wrapper">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__skills-title"
                    >
                        {t('skillsTitle')}
                    </motion.h2>

                    <div className="home__marquee">
                        {(() => {
                            // Filter skills that have a defined icon
                            const validSkills = t('skills').filter(skill => SKILL_ICONS[skill.key]);
                            const midPoint = Math.ceil(validSkills.length / 2);
                            const row1Skills = validSkills.slice(0, midPoint);
                            const row2Skills = validSkills.slice(midPoint);

                            return (
                                <>
                                    {/* Row 1: Left to Right */}
                                    <div className="home__marquee-row">
                                        <div className="home__marquee-track">
                                            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
                                                <div key={`row1-${skill.key}-${index}`} className="home__marquee-item" title={skill.name}>
                                                    {SKILL_ICONS[skill.key]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Row 2: Right to Left */}
                                    <div className="home__marquee-row home__marquee-row--reverse">
                                        <div className="home__marquee-track">
                                            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
                                                <div key={`row2-${skill.key}-${index}`} className="home__marquee-item" title={skill.name}>
                                                    {SKILL_ICONS[skill.key]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="home__projects" id="work">
                <div className="home__projects-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__projects-header"
                    >
                        <h2 className="home__projects-title">{t('projectsTitle')}</h2>
                        <p className="home__projects-subtitle">
                            {t('projectsSubtitle')}
                        </p>
                    </motion.div>

                    <div className="home__projects-list">
                        {t('projects').map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="home__project-card"
                            >
                                <div className="home__project-header">
                                    <span className="home__project-number">{String(index + 1).padStart(2, '0')}</span>
                                    <div className="home__project-meta">
                                        <span className="home__project-year">2024</span>
                                        <span className={`home__project-status home__project-status--${project.status.toLowerCase()}`}>
                                            {t(project.status.toLowerCase())}
                                        </span>
                                    </div>
                                </div>
                                {project.image && (
                                    <div className="home__project-image-container">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="home__project-image"
                                            style={{ objectPosition: project.imagePosition || 'center' }}
                                        />
                                    </div>
                                )}
                                <h3 className="home__project-title">{project.title}</h3>
                                <p className="home__project-description">{project.description}</p>
                                <div className="home__project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="home__project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="home__project-links">
                                    {project.links && project.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="home__project-link">
                                            {link.label}
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    ))}
                                    {/* Fallback for single link if any exist in other entries not updated (safety) */}
                                    {project.link && !project.links && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="home__project-link">
                                            {t('viewProject')}
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
