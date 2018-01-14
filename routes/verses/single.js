const data = require('../../data.json');

module.exports = (req, res) => {
  var jsonResponse = [];

  const verseId = Math.floor(Math.random() * data.sentences_tone.length);
  const verse = data.sentences_tone.find(m => m.sentence_id === verseId);
  var response = verse.text;

  jsonResponse.push({
    "text": "\01F604" response
  });

  res.send(jsonResponse);
  //  res.status(200).json({ response });
};
