const errorHandler = (errorMessage, exitCode = 1) => {
    console.error(`Error: ${errorMessage}`);
    process.exit(exitCode);
};

module.exports = { errorHandler };
