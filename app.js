
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const apod = require('nasa-apod');

var client = new apod.Client({
    apiKey: 'MTEty7iFcefUWiODoYRu77lZxxPbeFv880puqA2L',
    conceptTags: true
});

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res, next) => {
    client().then(function(body) {
        console.log(body);
        res.render('index',{ spacepic: body});
    })
  
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