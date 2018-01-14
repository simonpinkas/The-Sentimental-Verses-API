const routes = require('express').Router();
const verses = require('./verses');

routes.use('/verses', verses);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});


module.exports = routes;