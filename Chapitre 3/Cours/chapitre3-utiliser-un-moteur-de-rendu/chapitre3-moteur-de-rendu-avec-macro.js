var express = require("express");
var swig = require("swig");

app = express();

app.engine("html", swig.renderFile);
app.set("view engine", "html");

app.get("/", function (req, res) {
	res.render(__dirname + "/chapitre3-un-template-avec-macro.html", {
		// Le paramètre à insérer est ici un tableau, qui est parcouru par la macro
		ecoles : ["HEC", "EMLYON", "ESSEC", "ESCP", "EDHEC"]
	});
});

app.listen(8080);
