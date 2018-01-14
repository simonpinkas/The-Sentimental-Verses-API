# The Sentimental Verses API

A tiny API to request verses from the book of Genesis, by emotion. This API was used to build [The Sentimental Verses](https://github.com/simonpinkas/The-Sentimental-Verses) Facebook Messenger Chat Bot. The API only takes one argument with four possible options: **joy**, **fear**, **anger**, and **sadness**. It returns a single JSON object containnig the text of a verse. Try it out: [https://thesentimentalversesapi.herokuapp.com/verses/{emotion}](https://thesentimentalversesapi.herokuapp.com/verses/joy). The API is built on [Express](https://expressjs.com) and is easily deployable on [Heroku](http://heroku.com). 

## Installation
You must have node and [yarn](https://yarnpkg.com/en/) installed. 

```sh
git clone https://github.com/simonpinkas/The-Sentimental-Verses-API.git

cd The-Sentimental-Verses-API

yarn

node server.js
```
You should then be able to make requests at <http://localhost:3000/verses/anger>