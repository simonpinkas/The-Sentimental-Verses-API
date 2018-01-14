const verses = require('express').Router();
const single = require('./single');

verses.get('/:emotionId', single);

module.exports = verses;