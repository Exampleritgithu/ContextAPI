// src/Content.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <main style={{ background: theme === 'light' ? '#f9f9f9' : '#222', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <p>This is the content section.</p>
        </main>
    );
};

export default Content;
