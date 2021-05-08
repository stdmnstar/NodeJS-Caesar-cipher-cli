const ALPHABET_TO_LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";

const ALLOWED_ACTIONS = {
    ENCODE: 'encode',
    DECODE: 'decode'
}

const ERROR_MESSAGE = [
    'Ok',
    'Argument "shift" is not number',
    'Argument "shift" is required',
    'Argument "action" is required',
    'Argument "action" has not valid. Need ["encode"|"decode"]',    
]

module.exports = { ALPHABET_TO_LOWER_CASE, ALLOWED_ACTIONS, ERROR_MESSAGE };
