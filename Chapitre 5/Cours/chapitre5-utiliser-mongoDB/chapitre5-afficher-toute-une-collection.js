// On effectue ici une recherche de toute une collection
// Dans le module utilisé ici, une recherche se fait à l'aide de la métthode documents()

var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// La méthode documents() demande les paramètres de la recherche, qui sont un objet JSON
// Un objet vide retourne l'intégralité d'une collection
var params = {};

// La fonction de callback permet de choisir l'action à exécuter dès que la recherceh est faite
mongodb.documents("ma_collection", params, function (err, obj) {
	// Les résultats de la recherche sont stockés dans un objet (ici, obj)
	console.log(obj);
});
