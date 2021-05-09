const fs = require("fs");
const { Transform } = require("stream");
const { errorHandler } = require('./util');
const { cipher } = require('./cipher');

const inputStream = (filename) => {
    if (!filename) {
        return process.stdin;
    };

    try {
        fs.accessSync(filename, fs.R_OK);
        return fs.createReadStream(filename);       
    } catch (err) {
        errorHandler(5);
        return;
    }
};

const outputStream = (filename) => {
    if (!filename) {
        return process.stdout;
    };

    try {
        fs.accessSync(filename, fs.W_OK);
        return fs.createWriteStream(filename, { flags: 'a+' });       
    } catch (err) {
        errorHandler(6);
        return;
    }
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
