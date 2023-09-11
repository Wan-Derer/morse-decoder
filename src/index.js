const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let res = '';

  for (let i = 0; i < expr.length; i += 10) {
    const block = expr.slice(i, i + 10);
    if (block === '**********'){
      res += ' ';
    } else {
      let morseCode = '';
      for (let j = 0; j < block.length; j += 2) {
        if (block[j] === '1' && block[j + 1] === '0') {
          morseCode += '.';
        } else if (block[j] === '1' && block[j + 1] === '1') {
          morseCode += '-';
        }
      }
      res += MORSE_TABLE[morseCode]
    }
  }

  return res;
}

module.exports = {
    decode
}


