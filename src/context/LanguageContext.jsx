import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Get language from localStorage or default to 'en'
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'en';
    });

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLanguage = prev === 'en' ? 'jp' : 'en';
            localStorage.setItem('language', newLanguage);
            return newLanguage;
        });
    };

    // Save language to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
