import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
// We'll use inline styles or a simple module for now to keep it self-contained, 
// or rely on global CSS variables once we define them. 
// For now, let's use a standard button structure that currently inherits basic styles 
// but we will ensure it looks good with inline styles for position/shape.

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--c-text-primary, #0a0a0a)',
                transition: 'color 0.3s ease',
                borderRadius: '50%',
            }}
            className="theme-toggle"
        >
            {theme === 'light' ? (
                <FiMoon size={20} />
            ) : (
                <FiSun size={20} />
            )}
        </button>
    );
};

export default ThemeToggle;
