// Exercice 1, chapitre 3 : récupérer deux chiffres envoyés par un formulaire HTML, les soustraire côté serveur puis renvoyer le résultat dans une réponse HTML

//Chargement des modules Express
var express = require("express");

//Configuration d'Express
var app = express();

//Envoi du formulaire lorsqu'un utilisateur se connecte sur l'application 
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/formulaire.html");
});

//Le calcul se fait ici sur la page /calcul
app.get("/calcul", function(req, res) {
	res.send(String(Number(req.query.a) - Number(req.query.b)));
	res.end();
});

//Démarrage de l'application sur le port 8080
app.listen(8080);