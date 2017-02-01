// L'instruction switch est utile pour effectuer plusieurs tests de condition sur une seule variable

var a = 0;

switch (a) {
case 0:
	console.log("La variable vaut zéro ");
	break;// Break stoppe le test
case 1:
	console.log("La variable vaut un");
	break;
default:// Instruction qui est exécutée si la variable n'a pas vérifiée les conditions précédentes
	console.log("La variable ne vaut ni zéro, ni un");
}
