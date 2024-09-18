import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';

const Navbar = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Portfolio Tracker
          </Link>
          <div className="flex items-center space-x-4">
            <NavLink href="/portfolio" isActive={isActive('/portfolio')}>Portfolio</NavLink>
            <NavLink href="/add_transaction" isActive={isActive('/add_transaction')}>Add Transaction</NavLink>
            <NavLink href="/add_dividend_record" isActive={isActive('/add_dividend_record')}>Add Dividend</NavLink>
            <NavLink href="/check_transaction" isActive={isActive('/check_transaction')}>Transactions</NavLink>
            <Button onClick={toggleTheme} variant="outline" size="sm">
              {isDarkMode ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isActive }) => (
  <Link href={href} className={`px-3 py-2 rounded-md text-sm font-medium ${
    isActive 
      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
  }`}>
    {children}
  </Link>
);

export default Navbar;
