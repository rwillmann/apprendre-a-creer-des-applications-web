// Il y a une unique modification à apporter à une application avant de pouvoir la déployer (ici, ligne 19)
// Cloud Foundry nécessite d'utiliser un fichier spécial nommé manifest.yml, placé dans le dossier de l'application
// Il faut aussi que l'application dispose d'un fichier package.json (création avec la commande npm init)

var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("<html><a ='/a'>Page A</a></html>");
	res.end();
});

app.get("/a", function(req, res){
	res.send("<html><button>Bonjour page A</button></html>");
	res.end();
});

// Le port est donné apr le fournisseur du Cloud. L'opérateur OU permet ici à l'application de fonctionner dans le Cloud et sur le serveur local
app.listen(process.env.PORT || 8080);
