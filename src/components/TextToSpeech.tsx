import React, { useState, useEffect } from 'react';

interface TextToSpeechProps {
  text: string; // Accept the text prop from parent component
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false); // flag to indicate if speech is playing

  // Convert text to speech using the SpeechSynthesis API
  const convertTextToSpeech = () => {
    if (!text.trim()) return; // Don't do anything if the text is empty or just spaces

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text); // Create a new speech utterance
      const voices = speechSynthesis.getVoices(); // Get available voices

      // Optional: Set the voice and language for the speech
      utterance.voice = voices.find((voice) => voice.lang === 'en-US') || null;
      utterance.volume = 1; // Volume (0 to 1)
      utterance.rate = 1; // Speed (0.1 to 10)
      utterance.pitch = 1; // Pitch (0 to 2)

      // Play the speech
      speechSynthesis.speak(utterance);

      // Set the speaking state to true
      setIsSpeaking(true);

      // When the speech ends, set the speaking state back to false
      utterance.onend = () => setIsSpeaking(false);
    }
  };

  return (
    
    <div className="flex justify-center ">&nbsp;&nbsp; &nbsp;
        
      <button
        onClick={convertTextToSpeech}
        disabled={isSpeaking || !text}
        // className={`px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
        //   hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-lg
        //   focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none
        //   disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5
        //   active:translate-y-0 shadow-lg hover:shadow-xl
        //   ${isSpeaking ? 'bg-blue-400' : ''}`}
        className={`px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
            hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-lg
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none
            disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5
            active:translate-y-0 shadow-lg hover:shadow-xl
            min-height: 48px /* Set a minimum height for consistent appearance */`}
      >
        {isSpeaking ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Speaking...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            Text to Speech
          </div>
        )}
      </button>
    </div>
  );
};

export default TextToSpeech;