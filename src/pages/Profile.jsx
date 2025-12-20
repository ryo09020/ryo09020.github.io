import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Profile = () => {
    const { language } = useLanguage();

    const content = {
        jp: {
            title: "私について",
            bio: `ソフトウェアエンジニアとして活動しています。
      
      新しい技術に触れること、そしてそれを使いこなして誰も見たことのないものを作ることが好きです。
      現在は主にウェブフロントエンド、バックエンド、そしてAI技術の統合に焦点を当てています。
      
      「技術」はあくまで手段であり、本当に大切なのは「それを使って誰をどう幸せにするか」だと信じています。`,
            skillsTitle: "できること",
            skills: [
                "React / Next.js を用いたモダンなフロントエンド開発",
                "直感的で心地よいUI/UXデザイン",
                "Rust / Go による堅牢なバックエンド設計",
                "LLMを活用した新しい体験の創出"
            ],
            historyTitle: "経歴",
            history: [
                { year: "2023-", desc: "現在、ステルススタートアップにてリードエンジニアとして開発を主導。" },
                { year: "2021-2023", desc: "受託開発企業にて、様々な規模のWebアプリケーション構築に従事。" },
            ]
        },
        en: {
            title: "About Me",
            bio: `I work as a software engineer.
      
      I enjoy exploring new technologies and using them to create things no one has seen before.
      Currently, I focus mainly on web frontend, backend, and the integration of AI technologies.
      
      I believe that "technology" is just a means, and what truly matters is "who we make happy with it and how."`,
            skillsTitle: "What I Do",
            skills: [
                "Modern frontend development with React / Next.js",
                "Intuitive and pleasant UI/UX design",
                "Robust backend design with Rust / Go",
                "Creating new experiences leveraging LLMs"
            ],
            historyTitle: "History",
            history: [
                { year: "2023-", desc: "Currently leading development as a Lead Engineer at a stealth startup." },
                { year: "2021-2023", desc: "Engaged in building web applications of various scales at a dev agency." },
            ]
        }
    };

    const c = content[language];

    return (
        <div className="flex flex-col gap-20">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold mb-10 tracking-tight">{c.title}</h1>
                <div className="whitespace-pre-line text-lg leading-loose text-gray-700 max-w-2xl font-light">
                    {c.bio}
                </div>
            </motion.section>

            <section className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">{c.skillsTitle}</h2>
                    <ul className="flex flex-col gap-4">
                        {c.skills.map((skill, i) => (
                            <li key={i} className="text-gray-600 flex items-start gap-3">
                                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-black shrink-0"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">{c.historyTitle}</h2>
                    <div className="flex flex-col gap-6">
                        {c.history.map((item, i) => (
                            <div key={i}>
                                <span className="font-mono text-sm text-gray-400 block mb-1">{item.year}</span>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Profile;
