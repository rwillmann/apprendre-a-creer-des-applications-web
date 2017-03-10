// La recherche ou opération Find est une opération importante dans MongoDB
// Elle permet en effet de rechercher un document mais est aussi un préalable pour le mettre à jour ou le supprimer
// Une recherche se fait dans mongolab-provider à l'aide de la méthode documents()

var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// Les paramètres de recherche se placent dans un objet JSON
var params = {
	where : {
		age : 17// On recherche ici tous les documents avec une valeur âge égale à 17
	}
};

mongodb.documents("ma-collection", params, function (err, obj) {
	// Le document obj contient tous les résultats de la recherche
	console.log(obj);
});
