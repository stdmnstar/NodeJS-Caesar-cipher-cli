const { ERROR_MESSAGE } = require('./const');

const errorHandler = (exitCode = 1) => {
    console.error(`Error: ${ERROR_MESSAGE[exitCode]}`);
    process.exit(exitCode);
};

module.exports = { errorHandler };
