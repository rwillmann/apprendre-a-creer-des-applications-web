// Une application avec deux pages. La page d'accueil contient un lien vers la seconde page

var express = require("express");
var app = express();

// Une première route
app.get("/", function (req, res) {
	// La page contient un titre et un lien hypertexste relatif vers la seconde page
	res.send("<h1>Bienvenue !</h1><br><a href='/a'>Page A</a>");
	res.end();
});

// La seconde route, accessible à l'adresse http://localhost:8080/a
app.get("/a", function (req, res) {
	res.send("<h1>Page A</h1>");
	res.end();
});

// Gestion des erreurs 404 : toute autre page demandée déclenchera l'affichage d'un message d'erreur
app.use(function (req, res) {
	res.status(404).send("404 : la page n'existe pas");
});

app.listen(8080);
console.log("Serveur en marche");