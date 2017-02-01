// Une création d'un objet à l'aide d'une fonction. Très utile s'il est nécessaire de créer de nombreux objets semblables

// Une fonction qui crée un objet s'appelle un constructeur et commence par convention par une majuscule
function Eleve(prenom, mail, moyenne) {
	this.prenom = prenom;
	this.mail = mail;
	this.moyenne = moyenne;
}

// La création d'un objet se fait alors en appelant le constructeur, précédé du mot-clef new
var eleve1 = new Eleve("Bob", "bob@mail.com", 15);
var eleve2 = new Eleve("Alice", "alice@mail.com", 14.5);
