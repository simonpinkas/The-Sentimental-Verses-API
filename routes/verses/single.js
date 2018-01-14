const data = require('../../data.json');

module.exports = (req, res) => {
  var jsonResponse = [];
  const emotionId = String(req.params.emotionId);
  const verseCategory = data.verses.find(m => m.emotion === emotionId);
  const verseId = Math.floor(Math.random() * verseCategory.content.length);
  const verse = verseCategory.content.find(m => m.sentence_id === verseId);
  var response = verse.text;

  jsonResponse.push({
    "text": response
  });

  res.send(jsonResponse);
};
