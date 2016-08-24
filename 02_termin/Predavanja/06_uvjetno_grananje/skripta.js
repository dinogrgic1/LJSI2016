//if - jednostruko grananje - binarno (radi s tipom podatka boolean)
var x=12;
var y=2;

var rezultat;

if (x>y)
	console.log("tt");
else
	console.log("pp");

console.log((x>y) ? "tt" : "pp");

//loše
if (x>y)
	console.log("ddd");
	x=4;

if(x>y & x>10){
	rezultat=x+y;
}else{
	rezultat=x-y;
}

console.log("rezultat: " + rezultat);

//inline if
rezultat = (x>9) ? x+y : x-y;

console.log("rezultat inline if: " + rezultat);


console.log("--------------");



//switch - višestruko grananje



var ocjena=2;

if (ocjena==1){
	console.log("Ne");
} else if (ocjena==2){
	console.log("Do");
}


switch(ocjena){
	case 1:
		console.log("Nedovoljan");
		break;
	case 2:
		console.log("Dovoljan");
		break;
	case 3:
		console.log("Dobar");
		break;
	case 4:
		console.log("Vrlo dobar");
		break;
	case 5:
		console.log("Odličan");
		break;
	default:
		console.log("Nije ocjena");
}
