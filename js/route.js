//toujours mettre en debut de require, variable app venant de server.js
module.exports = function(app){
	
//charge mongoose
var mongoose = require('mongoose');
//connexion à la bdd mongoDB sur le site mlab.com
mongoose.connect('mongodb://admin:admin@ds117109.mlab.com:17109/challenge',  function(err, db) {
    if (err) throw err;
	console.log('je suis connecté à mongoose');
});


//création du modèle de table "conference"
var conference = mongoose.model('conference', { titre: String, description: String, date: String, logo: String });


//liste tout les user présent dans la bdd
app.get('/conf', function(req, res) {
	conference.find({}, function(err, response){
		if (err) {
		console.log(err);
		res.send('conference non trouvé');
		} else {
			//response[0].name = 'esrfesfe';
			//response[0].save();
			//response[0].update({name:'fsgds'})
			JSON.parse(response, (key, value) => {console.log(value)});
				
	}});
	
	
	//User.update({name:'dsfds'},{name:'sfds'},function(){
	//	res.fdgdfg
	//})
	
});


//lorsque l'url est égal à "/", renvoi l'url "../index.html"
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../index.html'));
});


//ajout d'un user dans la bdd
app.post('/send', function(req, res){
	console.log('send =', req.body);
	
	var conf = new conference({ titre: req.body.titre, description: req.body.description, date: req.body.date, logo: req.body.logo });
	conf.save(function (err) {
	if (err) {
		console.log(err);
		res.send('conference non envoyée');
	} else {
		res.send(req.body.titre + ' : ' + req.body.description + ' : ' + req.body.date + ' : ' + req.body.logo);
	}
	});
	});
	
	
	
	
	
	
};
