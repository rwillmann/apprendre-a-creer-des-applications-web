// La première opération pour utiliser une base de données est la création d'une données
// Elle s'appelle Insert dans MongoDB (opération Create du cycle CRUD)

// On utilise ici le module mongolab-provider
// Il permet de se connecter au service de mLab (database as a service) : https://mlab.com/
var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// Un document MongoDB est un objet JSON
var monDocument = {
	prenom : "Bob",
	mail : "bob@mail.com",
	age : 21
};

// L'ajout d'un document à une collection se fait à l'aide de la méthode insert()
mongodb.insert("ma-collection", monDocument);

// La méthode permet d'insérer plusieurs documents simultanément
var unSecondDocument = {
	prenom : "Alice",
	age : 19
};

mongodb.insert("ma_collection", [monDocument, unSecondDocument]);
