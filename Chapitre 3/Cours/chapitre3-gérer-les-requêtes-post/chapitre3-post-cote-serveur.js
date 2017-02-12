// Le module body-parser permet de lire les requêtes POST
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Configuration d'Express pour qu'il fonctionne avec Express
app.use(bodyParser.urlencoded({
	extended : true
}));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/chapitre3-formulaire-post.html");
});

// Il faut configurer une route avec la m"thode post() pour recevoir ces requêtes
app.post('/recherche', function (req, res) {
	// Le contenu de la requête se manipule ensuite avec req.body
	res.send("Reçu POST : " + req.body.nom);
});

app.listen(8080);
