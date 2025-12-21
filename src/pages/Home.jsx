import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const PROJECTS = [
    {
        id: '01',
        title: 'E-Commerce Platform',
        description: 'Modern React-based e-commerce solution with advanced filtering and real-time inventory management.',
        tags: ['React', 'Node.js', 'MongoDB'],
        year: '2024',
        status: 'Live'
    },
    {
        id: '02',
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for complex data analysis with D3.js and custom chart components.',
        tags: ['D3.js', 'TypeScript', 'Python'],
        year: '2023',
        status: 'Live'
    },
    {
        id: '03',
        title: 'Mobile Banking App',
        description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
        tags: ['React Native', 'Firebase', 'Security'],
        year: '2023',
        status: 'Development'
    }
];

const SKILLS = [
    'Frontend Development',
    'React & Next.js',
    'TypeScript',
    'UI/UX Design',
    'Node.js',
    'Database Design',
    'API Development',
    'Mobile Development'
];

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="home__hero">
                <div className="home__hero-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="home__hero-content"
                    >
                        <h1 className="home__hero-title">
                            Frontend Developer
                            <br />
                            <span className="home__hero-title-accent">& UI Designer</span>
                        </h1>
                        <p className="home__hero-description">
                            I create digital experiences that bridge the gap between design and technology. 
                            Based in Tokyo, I specialize in building modern web applications with a focus 
                            on user experience and clean code.
                        </p>
                        <div className="home__hero-actions">
                            <NavLink to="/profile" className="home__hero-btn home__hero-btn--primary">
                                View My Work
                            </NavLink>
                            <NavLink to="/profile" className="home__hero-btn home__hero-btn--secondary">
                                About Me
                            </NavLink>
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
                            <span className="home__hero-avatar-text">R</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="home__skills">
                <div className="home__skills-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__skills-title"
                    >
                        Skills & Expertise
                    </motion.h2>
                    <div className="home__skills-grid">
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="home__skills-item"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="home__projects">
                <div className="home__projects-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__projects-header"
                    >
                        <h2 className="home__projects-title">Selected Projects</h2>
                        <p className="home__projects-subtitle">
                            A showcase of my recent work and personal projects
                        </p>
                    </motion.div>

                    <div className="home__projects-list">
                        {PROJECTS.map((project, index) => (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="home__project-card"
                            >
                                <div className="home__project-header">
                                    <span className="home__project-number">{project.id}</span>
                                    <div className="home__project-meta">
                                        <span className="home__project-year">{project.year}</span>
                                        <span className={`home__project-status home__project-status--${project.status.toLowerCase()}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="home__project-title">{project.title}</h3>
                                <p className="home__project-description">{project.description}</p>
                                <div className="home__project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="home__project-tag">{tag}</span>
                                    ))}
                                </div>
                                <button className="home__project-link">
                                    View Project
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="home__contact">
                <div className="home__contact-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="home__contact-content"
                    >
                        <h2 className="home__contact-title">Let's Work Together</h2>
                        <p className="home__contact-description">
                            I'm always interested in new opportunities and collaborations. 
                            Feel free to reach out if you'd like to discuss a project.
                        </p>
                        <div className="home__contact-actions">
                            <a href="mailto:hello@ryo.dev" className="home__contact-btn">
                                Get In Touch
                            </a>
                            <div className="home__contact-links">
                                <a href="https://github.com/ryo09020" target="_blank" rel="noopener noreferrer" className="home__contact-link">
                                    GitHub
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="home__contact-link">
                                    LinkedIn
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="home__contact-link">
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
