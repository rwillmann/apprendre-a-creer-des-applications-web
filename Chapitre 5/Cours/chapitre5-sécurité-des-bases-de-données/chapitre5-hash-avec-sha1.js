// Ce script permet de créer un hash avec le module crypto de Node.js
// Le hash est une opération qui permet de transformer un texte en une valeur théoriquement unique et illisible
// Cette opération n'est pas réversible. Elle est ainsi utile pour stocker des mots de passe dans une base de données
// On utilise ici l'algorithme SHA-1 : https://en.wikipedia.org/wiki/SHA-1

var crypto = require("crypto");

// Le texte en clair
var texte = "Premiers pas en sécurité";

// Création de l'objet qui contient le hash
var hash = crypto.createHash("sha1")
// Chargement du texte
	.update(texte).digest("hex");

// Affiche 564bd80b08d3e364d51df0dbe2e13a7342ee48c2
console.log(hash);
