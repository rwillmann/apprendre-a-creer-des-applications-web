// Ce script permet de créer un hash avec une clef secrète
// Cette opération n'est pas réversible et plus sécurisée qu'un hash normal. Elle est ainsi utile pour stocker des mots de passe dans une base de données
// On utilise ici l'algorithme SHA-2 : https://en.wikipedia.org/wiki/SHA-2

var crypto = require("crypto");
var texte = "Premiers pas en sécurité";

// SHA-2 demande une clef secrète pour réaliser le hash
var clef = "une_clef";

var hash = crypto.createHmac("sha512", clef)
	.update(texte)
	.digest("hex");

// SHA-2 produit des hash beaucoup plus longs que SHA-1
console.log(hash);
