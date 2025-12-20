import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MoveDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { language } = useLanguage();

    const content = {
        jp: {
            label: "ポートフォリオ",
            headline: "シンプルに、考える。",
            sub: "本質を捉え、情報と体験をシームレスに紡ぐ。",
            intro: "こんにちは、Ryoです。複雑な世界をコードとデザインで紐解き、誰もが直感的に理解できる形へと再構築します。",
            cta: "プロフィールを見る",
        },
        en: {
            label: "PORTFOLIO 2024",
            headline: "Think Simply.",
            sub: "Capturing the essence, weaving information and experience seamlessly.",
            intro: "Hi, I'm Ryo. I unravel the complex world through code and design, reconstructing it into forms anyone can intuitively understand.",
            cta: "View Profile",
        }
    };

    const c = content[language];

    return (
        <div className="flex flex-col min-h-[80vh] justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl"
            >
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 block en-font">
                    {c.label}
                </span>

                <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-balance text-[#111]">
                    {c.headline}
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl mb-12 leading-relaxed tracking-wide">
                    {c.sub}
                </p>

                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                    <p className="text-gray-600 max-w-md text-sm leading-7">
                        {c.intro}
                    </p>

                    <Link to="/profile" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors border-b border-black pb-1 hover:border-gray-400">
                        {c.cta}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-[-10vh] left-0 md:left-auto md:right-0 flex items-center gap-2 text-xs text-gray-300 en-font"
            >
                <span>SCROLL</span>
                <div className="h-px w-12 bg-gray-300"></div>
            </motion.div>
        </div>
    );
};

export default Home;
