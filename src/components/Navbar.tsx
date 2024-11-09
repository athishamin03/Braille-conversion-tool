import React from 'react';
import { Github, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Navbar({ theme, onThemeToggle }: NavbarProps) {
  return (
    <nav className={`backdrop-blur-sm bg-opacity-90 transition-colors duration-300 ${
      theme === 'light' ? 'bg-white/80 border-b border-gray-200/50' : 'bg-gray-800/80 border-b border-gray-700/50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold tracking-tight ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          Braille Translator
        </h1>
        <div className="flex gap-3">
          <a
            href="https://github.com/athishamin03/Braille-conversion-tool.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className={`p-2 rounded-lg hover:bg-opacity-10 transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              theme === 'light' 
                ? 'text-gray-600 hover:bg-gray-900' 
                : 'text-gray-300 hover:bg-white'
            }`}
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className={`p-2 rounded-lg hover:bg-opacity-10 transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              theme === 'light' 
                ? 'text-gray-600 hover:bg-gray-900' 
                : 'text-gray-300 hover:bg-white'
            }`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}