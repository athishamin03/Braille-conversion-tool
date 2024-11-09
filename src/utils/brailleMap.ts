// Mapping for text to Braille conversion
export const textToBrailleMap: Record<string, string> = {
  'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
  'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
  'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
  'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
  'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
  'z': '⠵', ' ': '⠀',
  '0': '⠚', '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙',
  '5': '⠑', '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊',
  '.': '⠲', ',': '⠂', '!': '⠖', '?': '⠦', "'": '⠄',
  '"': '⠐⠂', ';': '⠆', ':': '⠒', '-': '⠤'
};

// Reverse mapping for Braille to text conversion
export const brailleToTextMap: Record<string, string> = Object.entries(textToBrailleMap).reduce(
  (acc, [text, braille]) => ({
    ...acc,
    [braille]: text
  }),
  {}
);