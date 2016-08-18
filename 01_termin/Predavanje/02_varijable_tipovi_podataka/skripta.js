//tipovi podataka
var ime			= "Marija"; 	//Niz znakova			[String]
var godine		= 24; 			//cijeli broj			[Number]
var zaposlen 	= true; 		//logička vrijednost	[Boolean]
var nettoPlaca 	= 7345.93; 		//decimalni broj		[Number]

console.log("ime: " + ime);
console.log("godine: " + godine);
console.log("zaposlen: " + zaposlen);
console.log("nettoPlaca: " + nettoPlaca);
console.log("-----------------------");
console.log("ime: " + typeof ime);
console.log("godine: " + typeof godine);
console.log("zaposlen: " + typeof zaposlen);
console.log("nettoPlaca: " + typeof nettoPlaca);
console.log("-----------------------");
//1. dio programa
alert("Unesi svoje podatke");
ime = prompt("Ime");
godine = prompt("Godine");
zaposlen=prompt("Zaposlen (1 da, 0 ne)");
if(zaposlen==true){ //if je uvjetno grananje
	nettoPlaca=prompt("Netto plaća:");
}
console.log("zaposlen: " + typeof zaposlen);
console.log("zaposlen: " + zaposlen);
console.log("Unio programom");
console.log("ime: " + ime);
console.log("godine: " + godine);
console.log("zaposlen: " + zaposlen);
if(zaposlen==true){
console.log("nettoPlaca: " + nettoPlaca);
}

//čitati 
//http://www.w3schools.com/js/js_type_conversion.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures