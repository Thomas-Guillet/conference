//charge et appelle la librairie express
var express = require('express');
var app = express();
//les librairie path et bodyparser sont de base dans nodejs, il suffit de les appeler en les mettant dans une variable
var path = require('path');
var bodyParser = require('body-parser');
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('../'));


//fichier route.js
require('./route')(app);

//3000=port
app.listen(3000, function() {
	console.log('serveur démarré');	
});
