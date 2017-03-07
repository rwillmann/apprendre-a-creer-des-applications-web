// Ce script permet de déchiffrer une information avec une clef secrète
// Cette opération est réversible : il est possible de chiffrer et de déchiffrer des données tant que l'on dispose de la clef
// On utilise ici l'algorithme AES-256 : https://en.wikipedia.org/wiki/Advanced_Encryption_Standard


var crypto = require("crypto");

// On déchiffre ici le texte chiffré précédemment
var secret = "3db91c5008868e";

// La clef utilisée pour déchiffrer doit être la même que celle employée lors du chiffrage
var clef = "ma_clef_secrete";

// On déchiffre l'information en trois étapes
var decipher = crypto.createDecipher("aes-256-ctr", clef);
var texte = decipher.update(secret,"hex", "utf8");
texte += decipher.final("utf8");

// On retouve ici le texte initiaml (bonjour)
console.log(texte);
