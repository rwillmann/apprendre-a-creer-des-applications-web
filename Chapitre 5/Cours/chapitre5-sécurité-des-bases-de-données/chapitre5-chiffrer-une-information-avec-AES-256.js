// Ce script permet de chiffrer une information avec une clef secrète
// Cette opération est réversible : il est possible de chiffrer et de déchiffrer des données tant que l'on dispose de la clef
// On utilise ici l'algorithme AES-256 : https://en.wikipedia.org/wiki/Advanced_Encryption_Standard

// crypto est un module de base de Node.js, il n'a pas à être installé avec npm
var crypto = require("crypto");

// Le texte à chiffrer
var texte = "bonjour";

// La clef est une simple chaîne de caractères
var clef = "ma_clef_secrete";

// Création d'un objet pour le chiffrement puis ajout du texte à chiffrer
var cipher = crypto.createCipher("aes-256-ctr", clef);
var secret = cipher.update(texte, "utf8", "hex");
secret += cipher.final("hex");

// Affichera 3db91c5008868e
console.log(secret);
