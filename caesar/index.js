const { getArguments, checkArguments } = require('./argumets');
const { pipeline } = require("stream");
const { errorHandler } = require('./util');
const { inputStream, outputStream, transformStream } = require('./streams');

process.on('exit', code => {
    if (code) {
        console.error(`Exit with code: ${code}`);
    }
});

const programArg = getArguments();

checkArguments(programArg);

const { input, output, shift, action } = programArg;

pipeline(
    inputStream(input),
    transformStream(action, shift),
    outputStream(output),
    err => {
        if (err) {
            errorHandler(7);
        };
    }
);



// $ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
//     input.txt This is secret. Message about "_" symbol!
//     output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!



// let text = 'This is secret. Message about "_" symbol!';
// console.log(text);
// console.log(cipher(text, ENCODE, 7));
// text = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
// console.log(cipher(text, DECODE, 7));
