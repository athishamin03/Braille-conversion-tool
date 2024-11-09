import React from 'react';
import { ArrowDownUp } from 'lucide-react';

interface TranslatorToggleProps {
  theme: 'light' | 'dark';
  onClick: () => void;
}

export function TranslatorToggle({ theme, onClick }: TranslatorToggleProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        aria-label="Switch translation direction"
        className={`p-4 rounded-full hover:bg-opacity-10 transition-all duration-200 
          transform hover:scale-110 active:scale-95 focus:outline-none 
          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          theme === 'light'
            ? 'hover:bg-gray-900 text-gray-600'
            : 'hover:bg-white text-gray-300'
        }`}
      >
        <ArrowDownUp className="w-6 h-6" />
      </button>
    </div>
  );
}