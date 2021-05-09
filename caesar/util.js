const { ERROR_MESSAGE } = require('./const');

const errorHandler = (exitCode = 1) => {
    console.error(`Error: ${ERROR_MESSAGE[exitCode]}`);
    process.exit(exitCode);
};

const exitListener = () => {
    process.on('exit', code => {
        if (code) {
            console.error(`Exit with code: ${code}`);
        }
    });
};

module.exports = { errorHandler, exitListener };
