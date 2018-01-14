const data = require('../../data.json');

module.exports = (req, res) => {
  const verses = data.sentences_tone;

  res.status(200).json({ verses });
};