const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Nastasia - Qui prend quoi ?' });
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));

