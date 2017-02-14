// Par défaut, les navigateurs tentent souvent de se connecter à une application en utilisant HTTP et non HTTPS
// Une technique courante est alors de ridiriger toutes les requêtes HTTP vers l'application sécurisée
// Pour y parvenir, il faut créer deux applications : une "vraie", sécurisée et qui utilise HTTPS et une seconde, dont le rôle est simplement de rediriger les connexions vers la première

var fs = require("fs");
var https = require("https");
var express = require("express");

// La première application, qui fonctionnera sur le port 443 (HTTPS)
var app = express();

app.get("/", function (req, res) {
	res.send("<h1>Sécurisé</h1>");
});

// La seonde application, qui fonctionnera sur le port 8080 (HTTP)
var httpApp = express();

// L'application HTTP a pour seul rôle de rediriger les requêtes vers la première
httpApp.get("/", function (req, res) {
	// On utilise ici le code de réponse 301 pour effectuer la redirection (Moved Permanently)
	res.writeHead(301, {
		Location: "https://localhost:443" + req.url
	});
	res.end();
});

var https_options = {
	key: fs.readFileSync("cert/private.pem"),
	cert: fs.readFileSync("cert/public.pem")
};

// Démarrage de l'application non-sécurisée sur le port 8080
httpApp.listen(8080);
// Création du serveur qui fonctionne avec HTTPS
var server = https.createServer(https_options, app).listen(443);
