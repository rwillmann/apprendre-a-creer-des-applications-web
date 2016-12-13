// Exercice 3, chapitre 3 : afficher une image envoyée par un utilisateur 

//Chargement des modules Express, body-parser, Swig et multer
var express = require("express");
var bodyParser = require("body-parser");
var swig = require("swig");
var multer = require("multer");

var app = express();

//Configuration de multer pour qu'il reçoive un fichier à la fois
var upload = multer({
	dest : "./uploads/",
}).single("monFichier");

//Configuration de l'application pour utiliser body-parser. Il traite ici les fichiers contenus dans les requêtes POST
app.use(bodyParser.urlencoded({
	extended : true
}));

//Configuration d'Express pour qu'il puisse charger le contenu du dossier uploads
app.use("/uploads/", express.static(__dirname + "/uploads/"));

//Configuration du moteur de rendu
app.engine("html", swig.renderFile) ;
app.set("view engine", "html") ;

//Création d'une route GET pour rendre accessible la page d'accueil
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/formulaire.html");
});

//Après réception de l'image, le programme crée une page dynamique avec sa source et sa taille
app.post("/upload", upload, function(req, res) {
	res.render(__dirname + "/img.html", {
		lien : "/uploads/" + req.file.filename,
		taille : req.file.size
	});
});

//Démarrage de l'application sur le port 8080
app.listen(8080);
