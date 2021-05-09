const { pipeline } = require("stream");
const { errorHandler } = require('./util');
const { inputStream, outputStream, transformStream } = require('./streams');

const main = ({ input, output, shift, action }) => {
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
};

module.exports = { main };
