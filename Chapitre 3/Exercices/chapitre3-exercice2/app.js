// Exercice 2, chapitre 3 : utiliser un template Swig pour créer trois pages distinctes

//Chargement des modules Express et Swig
var express = require("express");
var swig = require("swig");

//Configuration d'Express pour qu'il puisse charger le contenu du dossier img
var app = express();
app.use("/img", express.static(__dirname + "/img"));

//Configuration du moteur de rendu
app.engine("html", swig.renderFile);
app.set("view engine", "html");

//Ces informations seront insérées dynamiquement par Swig
var prix = [1.50, 3, 2];
var titre = ["Pommes", "Bananes", "Ananas"];
var image = ["/img/pommes.jpg", "/img/bananes.png", "/img/ananas.gif"];

//Création de la première route (/pomme). Lorsque la page est demandée, Swig insère dans le template les premières valeurs des tableaux prix, titre et img
app.get("/pomme", function(req, res) {
    res.render(__dirname + "/template.html", {
        titre: titre[0],
        source: image[0],
        prix: prix[0]
    });
});

//Création d'une seconde route
app.get("/banane", function(req, res) {
    res.render(__dirname + "/template.html", {
        titre: titre[1],
        source: image[1],
        prix: prix[1]
    });
});

//Et d'une troisième
app.get("/ananas", function(req, res) {
    res.render(__dirname + "/template.html", {
        titre: titre[2],
        source: image[2],
        prix: prix[2]
    });
});

//Démarrage de l'application sur le port 8080
app.listen(8080);