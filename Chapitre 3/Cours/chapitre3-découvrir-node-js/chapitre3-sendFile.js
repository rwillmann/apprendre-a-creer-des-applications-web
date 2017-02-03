var express = require("express");
var app = express();

app.get("/", function (req, res) {
	// La méthode sendFile() permet d'envoyer au client un fichier. Elle a pour paramètre le chemin de ce fichier
	// __dirname contient toujours le chemin de l'application, on ajoute après le nom du fichier souhaité
	res.sendFile(__dirname + "/chapitre3-formulaire-get.html");
	// On notera que sendFile() se passe de la méthode end()
});

app.listen(8080);
console.log("Serveur en marche");