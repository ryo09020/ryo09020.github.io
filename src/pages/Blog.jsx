import React from 'react';
import { motion } from 'framer-motion';

const BLOG_POSTS = [
    {
        id: 1,
        title: 'Building Modern React Applications',
        excerpt: 'A comprehensive guide to building scalable React applications with modern tools and best practices.',
        date: '2024-01-15',
        readTime: '8 min read',
        category: 'Development'
    },
    {
        id: 2,
        title: 'The Future of Web Design',
        excerpt: 'Exploring upcoming trends in web design and how they will shape user experiences in the coming years.',
        date: '2024-01-10',
        readTime: '6 min read',
        category: 'Design'
    },
    {
        id: 3,
        title: 'TypeScript Best Practices',
        excerpt: 'Essential TypeScript patterns and practices for writing maintainable and type-safe code.',
        date: '2024-01-05',
        readTime: '10 min read',
        category: 'Development'
    }
];

const Blog = () => {
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
                    <h1 className="blog__title">Blog & Insights</h1>
                    <p className="blog__description">
                        Thoughts on development, design, and technology trends
                    </p>
                </motion.header>

                {/* Posts */}
                <div className="blog__posts">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="blog__post"
                        >
                            <div className="blog__post-header">
                                <span className="blog__post-category">{post.category}</span>
                                <div className="blog__post-meta">
                                    <time className="blog__post-date">{post.date}</time>
                                    <span className="blog__post-read-time">{post.readTime}</span>
                                </div>
                            </div>
                            <h2 className="blog__post-title">{post.title}</h2>
                            <p className="blog__post-excerpt">{post.excerpt}</p>
                            <button className="blog__post-link">
                                Read More
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
                    <h3 className="blog__coming-soon-title">More Content Coming Soon</h3>
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
