// Un objet peut contenir une fonction, qui porte alors le nom de méthode

function Eleve(prenom, mail, moyenne) {
	this.prenom = prenom;
	this.mail = mail;
	this.moyenne = moyenne;
	this.saluer = function () {
		console.log("Je m’appelle " + this.prenom);
	};

}

var eleve1 = new Eleve("Bob", "bob@mail.com", 15);
eleve1.saluer();
