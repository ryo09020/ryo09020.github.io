import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const EXPERIENCE = [
    {
        year: '2022 - Present',
        role: 'Senior Frontend Developer',
        company: 'Tech Innovation Inc.',
        description: 'Leading frontend development for enterprise web applications using React, TypeScript, and modern development practices. Mentoring junior developers and establishing coding standards.',
        technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL']
    },
    {
        year: '2020 - 2022',
        role: 'Frontend Developer',
        company: 'Digital Solutions Co.',
        description: 'Developed responsive web applications and collaborated with design teams to create intuitive user interfaces. Implemented performance optimizations and accessibility improvements.',
        technologies: ['JavaScript', 'Vue.js', 'SCSS', 'Webpack']
    },
    {
        year: '2019 - 2020',
        role: 'UI/UX Designer',
        company: 'Creative Studio',
        description: 'Designed user interfaces for web and mobile applications. Conducted user research and created design systems for consistent brand experiences.',
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    }
];

const EDUCATION = [
    {
        year: '2015 - 2019',
        degree: 'Bachelor of Computer Science',
        school: 'Tokyo University',
        description: 'Focused on software engineering, algorithms, and human-computer interaction. Graduated with honors.'
    }
];

const SKILLS = {
    'Frontend': ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Nuxt.js'],
    'Styling': ['CSS3', 'SCSS', 'Tailwind CSS', 'Styled Components'],
    'Tools': ['Git', 'Webpack', 'Vite', 'Docker', 'Figma'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
};

const Profile = () => {
    const { language } = useLanguage();

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
                        <h1 className="profile__hero-title">About Me</h1>
                        <p className="profile__hero-description">
                            I'm a passionate frontend developer and UI designer based in Tokyo, Japan. 
                            With over 4 years of experience, I specialize in creating modern, 
                            accessible web applications that provide exceptional user experiences.
                        </p>
                        <div className="profile__hero-stats">
                            <div className="profile__stat">
                                <span className="profile__stat-number">4+</span>
                                <span className="profile__stat-label">Years Experience</span>
                            </div>
                            <div className="profile__stat">
                                <span className="profile__stat-number">50+</span>
                                <span className="profile__stat-label">Projects Completed</span>
                            </div>
                            <div className="profile__stat">
                                <span className="profile__stat-number">15+</span>
                                <span className="profile__stat-label">Happy Clients</span>
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
                        Work Experience
                    </motion.h2>
                    <div className="profile__timeline">
                        {EXPERIENCE.map((item, index) => (
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
                        Skills & Technologies
                    </motion.h2>
                    <div className="profile__skills-grid">
                        {Object.entries(SKILLS).map(([category, skills], index) => (
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
                        Education
                    </motion.h2>
                    <div className="profile__education-list">
                        {EDUCATION.map((item, index) => (
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
                        <h2 className="profile__section-title">Beyond Code</h2>
                        <p className="profile__personal-text">
                            When I'm not coding, you can find me exploring Tokyo's coffee shops, 
                            reading about design philosophy, or experimenting with new technologies. 
                            I believe that great design comes from understanding both technology and human behavior.
                        </p>
                        <p className="profile__personal-text">
                            I'm passionate about creating inclusive digital experiences and staying 
                            up-to-date with the latest web technologies. I enjoy mentoring other 
                            developers and contributing to open-source projects.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
