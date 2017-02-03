var express = require("express");
var app = express();

// La méthode get() permet d'ajouter une route (une page) à une application
app.get("/", function (req, res) {
	// La méthode send() permet d'envoyer au client du texte, notamment du code HTML
	res.send("<h1>Bonjour!</h1>");
	// Une fois que la réponse est faite, on utilise la méthode end(). La page chargerait sinon indéfiniment
	res.end();
});

// On peut se rendre à l'adresse http://localhost:8080 avec un navigateur pour voir le résultat
app.listen(8080);
console.log("Serveur en marche");