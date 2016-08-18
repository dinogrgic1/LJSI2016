//for petlja
// for( početna vrijednost; uvjet izlaska iz petlje; povečanje brojača )

for (var i=0; i<10; i++){
	console.log("Vrijednost varijable i: " + i);
}
console.log("-----------------------");

//nastavak i prekid petlje

for (var i=0; i<10; i++){
	if(i==3){
		continue;
	}
	if(i>8){
		break;
	}
	console.log("Vrijednost varijable i: " + i);
}

console.log("-----------------------");

//petlja u petlji

var x=[];
var y=[];
for (var i=1; i<=10; i++){
	y=[];
	for (var j=1; j<=10; j++){
		y.push(i*j);
	}
	x.push(y);
}
for (var i=0; i<x.length; i++){
	console.log(x[i]);
}

console.log("-----------------------");

var i=0;
while(i<10){
	console.log("Vrijednost varijable i: " + i++);
}

console.log("-----------------------");


var i=0;
do{
	console.log("Vrijednost varijable i: " + i++);
}while(i<10);

console.log("-----------------------");


var imena=["Marija","Zrinka","Marko","Pero"];
for (var i=0; i<imena.length; i++){
	console.log("Vrijednost elementa niza na mjestu " + i + ": " + imena[i]);
}

console.log("-----------------------");