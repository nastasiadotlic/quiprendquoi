const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
  res.render('index', { title: 'Nastasia - Qui prend quoi ?' });
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));

app.post('/party', function(req, res) {
  axios
  .post(`${process.env.API_URL}/party`, req.body)
  .then(({data}) => console.log(data))
  .catch((err) => console.error(err));
});

app.get('/party/:id', function(req, res) {
  res.render('party', { title: 'Page événement' });
});

