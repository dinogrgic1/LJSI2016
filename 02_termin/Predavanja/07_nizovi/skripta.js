var ime ="Tomislav";

var imena = ["Dora", "Lada", "Tomislav"];

console.log("imena: " + imena);

console.log("vrijednost na 1. mjestu: " + imena[0]); //index počinje brojem 0 i završava na broj emelanta -1
console.log("vrijednost na zadnjem mjestu: " + imena[imena.length-1]);


//prazan niz
var mjeseci=[];
mjeseci.push(1);
mjeseci.push(2);
mjeseci.push(3);
console.log("vrijednost na zadnjem mjestu: " + mjeseci[mjeseci.length-1]);

mjeseci.pop(); //miče zadnji element iz niza
console.log("vrijednost na zadnjem mjestu: " + mjeseci[mjeseci.length-1]);


mjeseci.push(3);

mjeseci[1]=null; ///undefined

console.log(mjeseci);

mjeseci[1]=2;

console.log("mjeseci: " + mjeseci);

mjeseci.splice(1,1);

console.log("mjeseci: " + mjeseci);

mjeseci.push("Prosinac");

console.log("mjeseci: " + mjeseci);


