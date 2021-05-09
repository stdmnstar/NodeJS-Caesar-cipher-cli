const fs = require("fs");
const { Transform } = require("stream");
const { errorHandler } = require('./util');
const { cipher } = require('./cipher');

const inputStream = (filename) => {
    if (!filename) {
        return process.stdin;
    };

    fs.access(filename, fs.R_OK, (err) => {
        if (err) {
            errorHandler(5);
            return;
        }
    });
    return fs.createReadStream(filename);
};

const outputStream = (filename) => {
    if (!filename) {
        return process.stdout;
    };

    fs.access(filename, fs.W_OK, (err) => {
        if (err) {
            errorHandler(6);
            return;
        }
    });
    return fs.createWriteStream(filename, { flags: 'a+' });
};

const transformStream = (action, shift) => {
    return new Transform({
        transform(chunk, _encoding, callback) {
            this.push(cipher(chunk.toString("utf8"), action, shift));
            callback();
        }
    });
};

module.exports = { inputStream, outputStream, transformStream };
