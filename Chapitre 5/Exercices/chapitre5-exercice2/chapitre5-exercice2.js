// Exercice 2, chapitre 5 : renommer un document, côté serveur

// Chargement d'Express et connexion à MongoDB avec le module mongolab-provider
var express = require("express");
var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

var app = express();
	
// La page d'accueil avec un formulaire
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/chapitre5-exercice2.html");
});

// Récupération du nouveau et de l'ancien nom
app.get("/exo", function (req, res) {
	// Recherche d'un document selon le contenu de la propriété nom
	var params = {
		where : {
			nom : req.query.ancien
		}
	};
	
	// On écrase l'ancienne valeur par celle qui vient d'être reçue
	var up = {
		$set : {
			nom : req.query.nouveau
		}
	};	
	// Exécution de la requête
	mongodb.update("exo-3", up, params);
});

app.listen(8080);
