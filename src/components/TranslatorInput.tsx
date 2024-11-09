import React from 'react';

interface TranslatorInputProps {
  id: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  placeholder: string;
  theme: 'light' | 'dark';
  readOnly?: boolean;
  isOutput?: boolean;
}

export function TranslatorInput({
  id,
  value,
  onChange,
  label,
  placeholder,
  theme,
  readOnly = false,
  isOutput = false,
}: TranslatorInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={id}
        className={`text-lg font-semibold tracking-tight ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}
      >
        {label}
      </label>
      <div className={`relative group ${isOutput ? 'animate-fade-in' : ''}`}>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          aria-label={label}
          className={`w-full h-36 p-4 rounded-xl border-2 focus:ring-2 focus:ring-offset-2 focus:outline-none transition-all duration-200 resize-none font-medium ${
            theme === 'light'
              ? `bg-${readOnly ? 'gray-50/50' : 'white'} border-gray-200 focus:ring-blue-500 focus:border-blue-500`
              : `bg-gray-700/50 border-gray-600 focus:ring-blue-400 focus:border-blue-400 text-white ${
                  readOnly ? 'bg-gray-800/50' : ''
                }`
          } ${
            readOnly 
              ? 'cursor-default select-all' 
              : 'hover:border-gray-300 dark:hover:border-gray-500'
          }`}
          placeholder={placeholder}
          style={{ fontSize: '1.1rem', lineHeight: '1.6' }}
        />
        {isOutput && value && (
          <div className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${
            theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-700 text-gray-300'
          }`}>
            {value.length} characters
          </div>
        )}
      </div>
    </div>
  );
}