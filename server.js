// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

// Setting up express app

var PORT = process.env.PORT || 8080;
var app = express();

// Sets up express to use body parser

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Sets up Handlebars

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Sets up the static directory
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT)
})