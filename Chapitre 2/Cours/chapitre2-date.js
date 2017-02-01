// L'objet Date permet d'obtenir la date actuelle et de la manipuler
// Documentation complète : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Date contient par défaut la date actuelle
var ajd = new Date();

// Il est possible de stocker une date passée (ici, le 25 avril 1994)
var date = new Date(1994, 3, 25);

// Calcul d'une différence entre deux dates, exprimée en milliseconde (conversion ici en année)
console.log((date - ajd) / (1000 * 60 * 60 * 24 * 30 * 12));
