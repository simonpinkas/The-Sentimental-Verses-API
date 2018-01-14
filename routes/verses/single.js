const data = require('../../data.json');

module.exports = (req, res) => {
  const verseId = Math.floor(Math.random() * data.sentences_tone.length);
//  const verseId = req.params.verseId * 1;
  const verse = data.sentences_tone.find(m => m.sentence_id === verseId);

  res.status(200).json({ verse });
};