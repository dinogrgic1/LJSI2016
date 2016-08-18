
//ne vraća vrijdnost
function odradiPosao(){ //ne prima parametre
	console.log("Odradio sam posao");
}


//vraća vrijdenost
function slucajniBroj(){ //ne prima parametre
	return Math.random();	
}


odradiPosao();
console.log("slučajni broj: " + slucajniBroj());



console.log("----------------------");



function ljubav(ime1, ime2){
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
	
	return ukupno;
}


console.log("Ana i Mario se vole " + ljubav("Ana", "Mario") + " %");


console.log("----------------------");

//objekt i fukncija
var o = {ime: "Tomislav",prezime: "Jakopec", grad: "Osijek"};
console.log("o: " + o);
console.log("o.ime: " + o.ime);
console.log("opis: " + o.ime + " " + o.prezime + " " + "(" + o.grad +")");

console.log("----------------------");

function Osoba (ime,prezime) {
    this.ime = ime;
    this.prezime=prezime;
    this.grad = "Osijek";
    this.opis = function(){
    	return this.ime + " " + this.prezime + " " + "(" + this.grad +")";
    };
}


var o = new Osoba("Tomislav", "Jakopec");
console.log("o: " + o);
console.log("o.ime: " + o.ime);
console.log("o.opis: " + o.opis());



var o = {
	ime: "Tomislav",
	prezime: "Jakopec", 
	grad: "Osijek",
	opis: function(){
    	return this.ime + " " + this.prezime + " " + "(" + this.grad +")";
    }
};