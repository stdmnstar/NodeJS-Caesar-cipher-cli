const { program } = require('commander');

const { errorHandler } = require('./util');
const { ALLOWED_ACTIONS } = require('./const');
const { ENCODE, DECODE } = ALLOWED_ACTIONS;

const getArguments = () => {
    program.storeOptionsAsProperties(false);
    program.option('-s, --shift <number>', 'required: a shift', value => parseInt(value, 10));
    program.option('-a, --action <type>', 'required: an action');
    program.option('-i, --input <type>', 'an input file');
    program.option('-o, --output <type>', 'an output file');
    program.parse(process.argv);
    return program.opts();
};

const checkArguments = ({ shift, action }) => {
    if (shift === undefined) {
        errorHandler(2);
    }

    if (action === undefined) {
        errorHandler(3);
    }

    if (isNaN(shift) && typeof shift === 'number') {
        errorHandler(1);
    }

    if (action !== ENCODE && action !== DECODE) {
        errorHandler(4);
    }
};

module.exports = { getArguments, checkArguments };
