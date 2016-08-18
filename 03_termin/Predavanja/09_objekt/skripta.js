var osoba=[];

osoba["ime"]="Pero";
osoba["godine"]=22;
console.log(osoba);
console.log("osoba[\"ime\"]: " + osoba["ime"]);

console.log("-------------");


var osoba = new Object();
osoba.ime="Pero";
osoba.godine=22;

console.log("osoba.ime: " + osoba.ime);
console.log(osoba);

console.log("-------------");

var osoba = {ime: "Pero", godine: 22};


console.log("osoba.ime: " + osoba.ime);
console.log(osoba);

//JSON
var studenti= [
{ime: "Marija", prezime: "Herc", godine: 22},
{ime: "Stjepan", prezime: "Kulik", godine: 19},
{ime: "Kotani", prezime: "Redit", godine: 28},
];

var s;
for(var i=0; i < studenti.length; i++){
	s=studenti[i];
	console.log(s.ime);
}


