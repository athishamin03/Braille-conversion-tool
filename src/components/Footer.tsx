import React from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer className={`py-8 mt-auto ${
      theme === 'light'
        ? 'text-gray-600'
        : 'text-gray-400'
    }`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          Built by XL Coders at Hacknight • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}