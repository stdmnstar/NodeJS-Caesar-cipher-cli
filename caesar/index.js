const { getArguments, checkArguments } = require('./argumets');
const { main } = require('./main');
const { exitListener } = require('./util');

exitListener();

const programArg = getArguments();
checkArguments(programArg);

main(programArg);
