// Une application minimaliste pour découvrir Node.js
// Pour la faire fonctionner, il faut d'abord avoir installé Express
// La commande node chapitre3-premier-pas permet de la démarrer
 
// Chargement du module Express
var express = require("express");

// Création d'un objet qui représente notre application
var app = express();

// Démarrage du serveur à l'adresse http://localhost:8080
app.listen(8080);

// On affiche un message pour indiquer que tout s'est bien passé
console.log("Serveur en marche");