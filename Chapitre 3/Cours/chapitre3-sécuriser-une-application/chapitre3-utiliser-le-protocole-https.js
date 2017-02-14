// Création d'une application Node.js qui utilise le protocole HTTPS (version sécurisée du HTTP)
// Ce protocole repose sur un système d'échange de clefs (ou certificats). Pour en savoir plus : https://en.wikipedia.org/wiki/HTTPS
// Il est possible de créer des certificats pour un usage pédagogique sur le site : http://www.mobilefish.com/services/ssl_certificates/ssl_certificates.php
// Les certificats utilisés ici ne doivent EN AUCUN CAS être utilisés en production

// L'implémentation du HTTPS se fait à l'aide du module éponyme. Le module fs est utilisé pour lire les clefs
var fs = require("fs");
var https = require("https");

// Création d'une application avec Express
var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("<h1>Sécurisé</h1>");
});

// Un objet JSON qui contient l'emplacement des certificats. Ils sont lus à l'aide de la méthode readFileSync du module fs
var https_options = {
	key : fs.readFileSync("cert/private.pem"),
	cert : fs.readFileSync("cert/public.pem")
};

// Mise en place d'un serveur qui utilise les certificats. 
var server = https.createServer(https_options, app).listen(443);
//L'application est accessible à l'adresse https://localhost:443 (port typique du HTTPS)