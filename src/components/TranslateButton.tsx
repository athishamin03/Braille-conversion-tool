// import React from 'react';
import TextToSpeech from './TextToSpeech';
import React, { useState, useEffect } from 'react';

interface TranslateButtonProps {
  onClick: () => void;
  isTranslating: boolean;
  text:any
}

// export function TranslateButton({ onClick, isTranslating,text }: TranslateButtonProps) {
//   return (
//     <div className="flex justify-center pt-4">
//       <button
//         onClick={onClick}
//         disabled={isTranslating}
//         className={`px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
//           hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-lg
//           focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none
//           disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5
//           active:translate-y-0 shadow-lg hover:shadow-xl`}
//       >
//         {isTranslating ? (
//           <div className="flex items-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//             </svg>
//             Translating...
//           </div>
//         ) : (
//           'Translate'
//         )}
//       </button>
//       <TextToSpeech text={text} />
//     </div>
//   );
// }





export function TranslateButton({ onClick, isTranslating, text }: TranslateButtonProps) {
  return (
    <div className="flex justify-center pl-2">
      <div className="flex items-center">  {/* Added a flex container to align buttons vertically */}
        <button
          onClick={onClick}
          disabled={isTranslating}
          className={`px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
            hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-lg
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none
            disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5
            active:translate-y-0 shadow-lg hover:shadow-xl
            min-height: 48px /* Set a minimum height for consistent appearance */`}
        >
          {isTranslating ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                {/* ... */}
              </svg>
              Translating...
            </div>
          ) : (
            'Translate'
          )}
        </button>
        <TextToSpeech text={text} />
      </div>
    </div>
  );
}