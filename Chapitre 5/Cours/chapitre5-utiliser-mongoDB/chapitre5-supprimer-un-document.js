// La suppression d'un document dans MongoDB est l'opération Remove (opération Delete)
// Pour supprimer un document avec mongolab-provider, il faut d'abord le rechercher
// Ensuite, il faut passer son identifiant à la méthode deleteId()

var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// On cherche ici à supprimer un document qui contient un champ prénom dont la valeur est Bob
var params = {
	where : {
		prenom : "Bob"
	}
};

mongodb.documents("ma_collection", params, function (err, obj) {
	// La recherche retourne tous les documents qui satisfont la requête
	// On isole ici l'identifiant du premier document trouvé
	mongodb.deleteId("ma_collection", obj[0]["_id"].$oid);
});
