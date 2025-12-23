import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BusinessCard = () => {
    const { t } = useTranslation();
    const profile = t('personalProfile');

    return (
        <div className="business-card-page">
            <div className="business-card-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <motion.div
                className="business-card"
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
            >
                <div className="business-card__glass-reflection" />

                <div className="business-card__content">
                    <div className="business-card__header">
                        <div className="business-card__logo">RYO.</div>
                    </div>

                    <div className="business-card__main">
                        <motion.h1
                            className="business-card__name"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            RYO OTA
                        </motion.h1>
                        <motion.p
                            className="business-card__role"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Software Engineer & Graduate Student
                        </motion.p>
                    </div>

                    <div className="business-card__footer">
                        <div className="business-card__contact">
                            <motion.a
                                href="mailto:ryo9240info@gmail.com"
                                className="business-card__link"
                                whileHover={{ x: 5 }}
                            >
                                <FaEnvelope /> ryo9240info@gmail.com
                            </motion.a>
                            <motion.div
                                className="business-card__link"
                                whileHover={{ x: 5 }}
                            >
                                <FaMapMarkerAlt /> {profile.location}
                            </motion.div>
                        </div>

                        <div className="business-card__socials">
                            <motion.a
                                href="https://github.com/ryo09020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="business-card__social-link"
                                aria-label="GitHub"
                                whileHover={{ y: -3, color: "var(--c-accent)" }}
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/%E4%BA%AE-%E5%A4%AA%E7%94%B0-a68540328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="business-card__social-link"
                                aria-label="LinkedIn"
                                whileHover={{ y: -3, color: "var(--c-accent)" }}
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BusinessCard;
