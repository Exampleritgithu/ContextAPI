// src/App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';

const App = () => {
    return (
        <ThemeProvider>
            <div>
                <Header />
                <Content />
            </div>
        </ThemeProvider>
    );
};

export default App;
