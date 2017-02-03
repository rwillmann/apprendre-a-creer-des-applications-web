// Réception de données envoyées à l'aide de la méthode GET

var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/chapitre3-formulaire-get.html");
});

// Il faut une route dont le nom est identique à la valeur de l'attribut action du formulaire
app.get("/recherche", function (req, res) {

	// On stocke les données reçues dans une variable (ici celle de la balise qui a un attribut 'nom')
	// L'objet req représente la requête, dont on lit le contenu avec les propriétés query et nom
	var data = req.query.nom;
	
	res.send("<h1> Vous avez tapé " + data +"</h1>");
	res.end();
});

app.listen(8080);
console.log("Serveur en marche");