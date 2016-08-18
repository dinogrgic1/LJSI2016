var ime1;
var ime2;

ime1 = prompt("Unesite ime 1. osobe", "Marta");
ime2 = prompt("Unesite ime 2. osobe", "Manuel");

console.log(ime1 + " " + ime2);

var sveSkupa = ime1.toLowerCase().concat(ime2.toLowerCase());

var nizBrojeva=[];

var ukupno;
for(var i=0;i<sveSkupa.length;i++){
	ukupno=1;
	for(var j=0;j<sveSkupa.length;j++){
		if (i==j){
			continue;
		}
		if(sveSkupa.charAt(i)==sveSkupa.charAt(j)){
			ukupno++;
		}
	}
	nizBrojeva.push(ukupno);
}

var izracun=[];
var b;
do{
	console.log(nizBrojeva);
	for(var i=0;i<nizBrojeva.length;i++){
		if(i<(nizBrojeva.length-1)/2){
			b=nizBrojeva[i] + nizBrojeva[nizBrojeva.length-1-i];
			if(b>=10){
				izracun.push(parseInt(b/10));
				izracun.push(b%10);
			}else{
				izracun.push(b);
			}
			
		}else{
			if(nizBrojeva.length%2>0){
				izracun.push(nizBrojeva[i]);
			}
			break;
		}
	}
	
	nizBrojeva=izracun;
	izracun=[];
}while(nizBrojeva.length>2);


console.log(nizBrojeva);
var ukupno=0;
for(var i=0;i<nizBrojeva.length;i++){
	switch(i){
		case 0:
			ukupno+=nizBrojeva[i]*10;
			break;
		case 1:
			ukupno+=nizBrojeva[i];
			break;
	}	
}
console.log(ukupno);