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
        var string = '';
        for(let i = 0; i < body.explanation.length; i++) {
            string += body.explanation.charAt(i);
            if(body.explanation.charAt(i) === '.') {
                break;
            }
        }
        res.render('index',{ spacepic: body, description: string});
    })
  
});
app.get('/search',(req,res,next) => {
    res.render('searchResult',{id: req.query.id})
})

app.listen(3000);