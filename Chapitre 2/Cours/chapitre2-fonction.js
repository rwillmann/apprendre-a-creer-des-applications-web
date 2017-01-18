// Une fonction JavaScript basique, créée par le programmeur
// Les fonctions sont un objet central de JavaScript, leur documentation est accessible ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// Une fonction est créée par l'utilisation de l'instruction function, suivie du nom de cette fonction et de ses éventuels paramètres.
function ma_fonction(a, b) {
	var calcul = a * b + 1;// Les instructions sont placées entre accolades
	return calcul;// Le mot-clef return permet à une fonction de renvoyer un résultat
}

console.log(ma_fonction(5, 18));