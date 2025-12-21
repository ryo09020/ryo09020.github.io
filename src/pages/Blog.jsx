import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const Blog = () => {
    const { t } = useTranslation();

    return (
        <div className="blog">
            <div className="blog__container">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="blog__header"
                >
                    <h1 className="blog__title">{t('blogTitle')}</h1>
                    <p className="blog__description">
                        {t('blogDescription')}
                    </p>
                </motion.header>

                {/* Posts */}
                <div className="blog__posts">
                    {t('blogPosts').map((post, index) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="blog__post"
                        >
                            <div className="blog__post-header">
                                <span className="blog__post-category">{post.category}</span>
                                <div className="blog__post-meta">
                                    <time className="blog__post-date">2024-01-15</time>
                                    <span className="blog__post-read-time">8 {t('minRead')}</span>
                                </div>
                            </div>
                            <h2 className="blog__post-title">{post.title}</h2>
                            <p className="blog__post-excerpt">{post.excerpt}</p>
                            <button className="blog__post-link">
                                {t('readMore')}
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </motion.article>
                    ))}
                </div>

                {/* Coming Soon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="blog__coming-soon"
                >
                    <h3 className="blog__coming-soon-title">{t('moreContentSoon')}</h3>
                    <p className="blog__coming-soon-text">
                        I'm working on more articles about web development, design patterns, and industry insights. 
                        Stay tuned for updates!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;
