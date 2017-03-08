// Exercice 4, chapitre 5 : un formulaire de connexion sécurisé, côté serveur
// Ce formulaire n'est PAS sécurisé tant que HTTPS et des modules comme helmet ne sont pas implémentés

// Chargement du module crypto
var crypto = require("crypto");

// Chargement des modules body-parser, express et conenxion à la base de données
var bodyParser = require("body-parser");
var express = require("express");
var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// Création d'une fonction hachage, qui crée un hash en fonction du texte et de la clef reçue
function hachage(texte, clef) {
	var hash = crypto.createHmac("sha512", clef)
		.update(texte)
		.digest("hex");

	return hash;
}

// Création de l'application
var app = express();
// Notre clef secrète
var clef = "exo_4";

// La page d'accueil (création d'un utilisateur)
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/nouveau.html");
});

// La page de login (utilisateur déjà existant)
app.get("/login", function (req, res) {
	res.sendFile(__dirname + "/login.html");
});

// Analyse d'une requête de création d'utilisateur
app.post("/nouveau", function (req, res) {
	
	// Un objet JSON qui représente un utilisateur
	var user = {
		id : req.body.id,
		mdp : hachage(req.body.mdp, clef)
	};
	
	// Ajout à la base de données
	mongodb.insert("ex-4", user);

	res.redirect("/login");
});

// Analyse d'une requête de connexion d'un utilisateur déjà existant
app.post("/login", function (req, res) {
	
	// On recherchera d'abord l'identifiant de l'utilisateur
	var params = {
		where : {
			id : req.body.id
		}
	};

	mongodb.documents("ex-4", params, function (err, obj) {
		if (hachage(req.body.mdp, clef) === obj[0]["mdp"]) {
			res.send("OK");
			res.end();
		} else {
			res.send("Accès refusé");
			res.end();
		}

	});

});

app.listen(8080);
