// Une application avec un moteur de rendu, Swig
// Il permet de créer des pages dynamiquement

// Chargement des modules Swig et Express
var express = require("express");
var swig = require("swig");

var app = express();

// Configuration d'Express pour qu'il fonctionne avec le moteur de rendu
app.engine("html", swig.renderFile);
// Indique que les mo
app.set("view engine", "html");

app.get("/", function (req, res) {
	// La méthode render() permet de créer une page. Elle prend 2 paramètres : le chemin du modèle et les éléments à insérer dynamiquement
	res.render (__dirname + "/chapitre3-un-template-basique", {
		// Les éléments à insérer, au format JSON
		titre : "Accueil",
		lien : "https://www.google.com/",
		balise : "<a href='/a'> Aller vers la page A<\a>"
	});
});

app.get("/a", function (req, res) {
	// Un même modèle peut servir à créer une multitude de pages
	res.render (__dirname + "/chapitre3-un-template-basique", {
		titre :"Page A",
		lien : "http://www.twitter.com/",
		balise : "<a href='/'> Revenir à l'accueil<\a>"
	});
});

app.listen(8080);
