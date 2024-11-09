import { textToBrailleMap, brailleToTextMap } from './brailleMap';

export function translateTextToBraille(text: string): string {
  return text
    .toLowerCase()
    .split('')
    .map(char => textToBrailleMap[char] || char)
    .join('');
}

export function translateBrailleToText(braille: string): string {
  // Split the braille string into individual characters while preserving multi-character symbols
  const brailleChars: string[] = [];
  let i = 0;
  
  while (i < braille.length) {
    // Check for two-character braille symbols
    if (i + 1 < braille.length && brailleToTextMap[braille.slice(i, i + 2)]) {
      brailleChars.push(braille.slice(i, i + 2));
      i += 2;
    } else {
      brailleChars.push(braille[i]);
      i += 1;
    }
  }

  return brailleChars
    .map(char => brailleToTextMap[char] || char)
    .join('');
}