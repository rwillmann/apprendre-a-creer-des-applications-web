// On utilise ici les dépendances requises pour gérer les requêtes POST et le module multer
var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");

var app = express();

app.use(bodyParser.urlencoded({ 
	extended: true 
}));

// Création d'un dossier qui contient les fichiers reçus
var upload = multer({ dest: 'uploads/' });

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/chapitre3-formulaire-fichier.html");
});

// Il faut ajouter un objet upload.single pour récupérer le fichier transmis via le formulaire
app.post("/upload", upload.single('monFichier'), function(req, res) {
	// L'objet req contient des informations sur le fichier qui a été envoyé
	res.send(req.file);
	res.end();
});

app.listen(8080);
