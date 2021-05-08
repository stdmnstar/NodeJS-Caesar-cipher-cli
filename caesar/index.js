const { getArguments, checkArguments } = require('./argumets');
const { cipher } = require('./cipher');
const { ALLOWED_ACTIONS } = require('./const');
const { ENCODE, DECODE } = ALLOWED_ACTIONS;

const programmArg = getArguments()
console.log(programmArg);


checkArguments(programmArg);


// $ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
//     input.txt This is secret. Message about "_" symbol!
//     output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!



// let text = 'This is secret. Message about "_" symbol!';
// console.log(text);
// console.log(cipher(text, ENCODE, 7));
// text = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
// console.log(cipher(text, DECODE, 7));
