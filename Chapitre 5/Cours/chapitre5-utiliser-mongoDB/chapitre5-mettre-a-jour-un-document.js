// MongoDB permet de remplacer un document par un autre (opération Update dans le cycle CRUD)
// On utilise pour cela la méthode update()

var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// Le nouveau document écrase totalement le précédent
var documentMisAJour = {
	prenom : "Bob",
	mail : "bob-mis-a-jour@mail.com",
	age : 57
};

// Les paramètres de la recherche pour identifier le document à mettre à jour
var params = {
	where : {
		prenom : "Bob",
		age: 57
	}
};

// La fonction update remplace le document trouvé par le document passé en paramètre
mongodb.update("ma_collection", documentMisAJour, params);
