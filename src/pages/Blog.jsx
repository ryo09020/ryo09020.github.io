import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

const BlogItem = ({ title, date, category }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group py-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-gray-50 transition-colors cursor-pointer px-4 -mx-4 rounded-lg"
    >
        <div>
            <h3 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4">{title}</h3>
            <div className="flex gap-3 text-xs text-gray-400 mt-1 md:mt-2">
                <span className="font-mono">{date}</span>
                <span>•</span>
                <span>{category}</span>
            </div>
        </div>
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" size={20} />
    </motion.div>
);

const Blog = () => {
    const { language } = useLanguage();

    const content = {
        jp: {
            title: "思考の断片",
            posts: [
                { title: "なぜ、今シンプルさが求められるのか", date: "2024.12.20", category: "Design" },
                { title: "React Server Components に対する懐疑的な視点", date: "2024.11.15", category: "Tech" },
                { title: "毎日の習慣がクリエイティビティを作る", date: "2024.10.03", category: "Life" },
                { title: "AIと共生するコーディングスタイル", date: "2024.09.22", category: "AI" },
            ]
        },
        en: {
            title: "Fragments of Thought",
            posts: [
                { title: "Why Simplicity is Needed Now", date: "Dec 20, 2024", category: "Design" },
                { title: "A Skeptical View on React Server Components", date: "Nov 15, 2024", category: "Tech" },
                { title: "Daily Habits Create Creativity", date: "Oct 03, 2024", category: "Life" },
                { title: "Coding Style Co-existing with AI", date: "Sep 22, 2024", category: "AI" },
            ]
        }
    }

    const c = content[language];

    return (
        <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-12 tracking-tight">{c.title}</h1>

            <div className="flex flex-col">
                {c.posts.map((post, i) => (
                    <BlogItem key={i} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
