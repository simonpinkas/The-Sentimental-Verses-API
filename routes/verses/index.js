const verses = require('express').Router();
const all = require('./all');
const single = require('./single');

verses.get('/:emotionId', single);

module.exports = verses;