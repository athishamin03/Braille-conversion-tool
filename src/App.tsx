import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TranslatorInput } from './components/TranslatorInput';
import { TranslatorToggle } from './components/TranslatorToggle';
import { TranslateButton } from './components/TranslateButton';
import { translateTextToBraille, translateBrailleToText } from './utils/translator';
import TextToSpeech from './components/TextToSpeech';

function App() {
  const [text, setText] = useState('');
  const [braille, setBraille] = useState('');
  const [mode, setMode] = useState<'text' | 'braille'>('text');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = () => {
    setIsTranslating(true);
    setTimeout(() => {
      if (mode === 'text') {
        setBraille(translateTextToBraille(text));
      } else {
        setText(translateBrailleToText(braille));
      }
      setIsTranslating(false);
    }, 500);
  };

  const toggleMode = () => {
    setMode(mode === 'text' ? 'braille' : 'text');
    setText('');
    setBraille('');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-blue-50 to-indigo-50'
          : 'bg-gradient-to-br from-gray-900 to-gray-800'
      }`}
    >
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div
          className={`backdrop-blur-sm bg-opacity-90 rounded-2xl p-6 sm:p-8 shadow-xl transform transition-all duration-300 ${
            theme === 'light'
              ? 'bg-white/80 hover:shadow-2xl'
              : 'bg-gray-800/80 hover:shadow-2xl hover:shadow-gray-900/20'
          }`}
        >
          <div className="flex flex-col gap-8">
            <TranslatorInput
              id="input"
              value={mode === 'text' ? text : braille}
              onChange={(e) => (mode === 'text' ? setText(e.target.value) : setBraille(e.target.value))}
              label={mode === 'text' ? 'Text to Braille' : 'Braille to Text'}
              placeholder={mode === 'text' ? 'Enter text here...' : 'Enter braille here...'}
              theme={theme}
            />

            <TranslatorToggle theme={theme} onClick={toggleMode} />

            <TranslatorInput
              id="output"
              value={mode === 'text' ? braille : text}
              label={mode === 'text' ? 'Braille Output' : 'Text Output'}
              placeholder={mode === 'text' ? 'Braille translation will appear here...' : 'Text translation will appear here...'}
              theme={theme}
              readOnly
              isOutput
            />

            <TranslateButton onClick={handleTranslate} text={mode === 'text' ? text : braille} isTranslating={isTranslating} />
          </div>
        </div>
      </main>

      {/* Pass the text to TextToSpeech */}
      {/* <TextToSpeech } /> */}

      <Footer theme={theme} />
    </div>
  );
}

export default App;
