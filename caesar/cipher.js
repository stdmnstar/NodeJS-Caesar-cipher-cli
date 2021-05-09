const { ALPHABET_TO_LOWER_CASE, ALLOWED_ACTIONS } = require('./const');
const { DECODE } = ALLOWED_ACTIONS;

const cipher = (text, action, shift) => {
    const alphabetLength = ALPHABET_TO_LOWER_CASE.length;
    if (action === DECODE) {
        shift *= -1;
    }

    return (
        text.split('')
            .map((char) => {
                const charToLowerCase = char.toLowerCase();

                if (!ALPHABET_TO_LOWER_CASE.includes(charToLowerCase)) {
                    return char;
                }

                let position = (ALPHABET_TO_LOWER_CASE.indexOf(charToLowerCase) + shift) % alphabetLength;
                if (position < 0) {
                    position += alphabetLength;
                }

                let newChar = ALPHABET_TO_LOWER_CASE[position];
                if (char !== charToLowerCase) {
                    newChar = newChar.toUpperCase();
                }

                return newChar;
            })
            .join('')
    );
};

module.exports = { cipher };
