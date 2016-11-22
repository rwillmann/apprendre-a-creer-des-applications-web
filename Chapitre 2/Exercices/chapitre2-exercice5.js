function fizzbuzz(n) {
	var rep = "";

	if (n % 3 === 0) {
		rep += "Fizz";
	} 
	if (n % 5 === 0) {
		rep += "Buzz";
	}

	if (rep === "") {
		rep = n ;
	}

	console.log(rep) ;
}

for (var i=1 ; i<=100 ; i++) {
	fizzbuzz(i) ;
}
