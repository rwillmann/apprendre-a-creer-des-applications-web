// Exercice 4, chapitre 3 : manipulation de cookies côté serveur 

//Chargement des modules Express et cookie-parser
var express = require("express");
var cookieParser = require("cookie-parser");

//Configuration d'Express pour qu'il fonctionne avec cookie-parser
var app = express();
app.use(cookieParser());

//Création d'une route GET pour la page A et son cookie associé
app.get("/a", function(req, res) {
	res.cookie("exo4", "/a", { expires : new Date(Date.now()+3600*1000*24*30)});// Durée de conservation : 30 jours
	res.send("Page A");
	res.end();
});

//Création d'une route GET pour la page B et son cookie associé
app.get("/b", function(req, res) {
	res.cookie("exo4", "/b", { expires : new Date(Date.now() + 3600*1000*24*30)});
	res.send("Page B");
	res.end();
});

//Création d'une route GET pour rendre accessible la page d'accueil
app.get("/", function(req, res) {

	if(req.cookies.exo4 === "/a"){
		res.send("<a href='/a'>Page A visitée</a>");
		res.end();
	}
	else if(req.cookies.exo4 === "/b"){
		res.send("<a href='/b'>Page B visitée</a>");
		res.end();
	}
	else{
		res.send("Bienvenue");
		res.end();
	}
});

//Démarrage de l'application sur le port 8080
app.listen(8080);