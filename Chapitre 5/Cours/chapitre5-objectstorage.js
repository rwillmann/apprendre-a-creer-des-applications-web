// Une application déployée sur Bluemix ne peut pas stocker durablement les fichiers persistants
// Pour éviter que ceux-ci ne disparaissent périodiquement, il faut les stocker ailleurs
// ObjectStorage est une API qui permet de stocker des fichiers dans le Cloud : https://console.ng.bluemix.net/catalog/services/object-storage/

// Chargement du module
var ObjectStorage = require("object-storage");

// Connexion à l'instance de stockage (créable depuis Bluemix)
var storage = new ObjectStorage({
	host : "url",
	username : "mon-compte",
	password : "mdp"
});

// Création d'un espace de stockage dans l'instance
storage.create("un-container");

storage.putFile({
	src : __dirname + "image.jpg",
	dst : " un-container/image.jpg"
});
