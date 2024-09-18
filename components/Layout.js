import React from 'react';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { theme, isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}
         style={{ 
           backgroundColor: theme.colors.background, 
           color: theme.colors.text,
         }}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center">
        <p>&copy; 2024 Portfolio Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
