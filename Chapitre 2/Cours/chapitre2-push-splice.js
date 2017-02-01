// Deux méthodes de l'objet Array : push et splice
// Documentation complète de push : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push
// Documentation complète de splice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice

var tableau = [10, 25, 35];

// Push prend pour paramètre un ou plusieurs éléments et les ajoute au tableau
tableau.push(12);

// Ici, splice retire le deuxième élément du tableau
tableau.splice(1, 1);

//Affichera [10, 35, 12]
console.log(tableau);
