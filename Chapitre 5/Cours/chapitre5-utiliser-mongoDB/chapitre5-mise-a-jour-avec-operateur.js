// MongoDB permet de mettre à jour de manière plus fine des documents
// Il faut pour cela utiliser des opérateurs de mise à jour 
// La liste complète est disponible ici : https://docs.mongodb.com/manual/reference/operator/update/

var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// Les opérateurs permettent de ne mettre à jour qu'un ou plusieurs éléments sans altérer les autres
var miseAJour = {
	$inc : {
		age : 1
	}
};

// Il faut également trouver le document à modifier
var params = {
	where : {
		prenom : "Bob"
	}
};

// C'est toujours la fonction update() qui est utilisée
mongodb.update("ma_collection", miseAJour, params);
