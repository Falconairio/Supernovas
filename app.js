
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get("/beers", (req, res, next) => {
  punkAPI.getBeers().then( (response) => {
    const data = {
      beers: response,
    }
    res.render("beers",data);
  }).catch();
});

app.get("/random-beers", (req, res, next) => {
  punkAPI.getRandom().then( (response) => {
    const data = {
      beer: response,
    }
    res.render("randomBeer",data);
  }).catch();
});

app.listen(3000);


punkAPI.getRandom()
  .then(beers => {

  })
  .catch(error => {
    console.log(error)
  })