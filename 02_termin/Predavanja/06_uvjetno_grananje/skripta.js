//if - jednostruko grananje - binarno (radi s tipom podatka boolean)
var x=12;
var y=2;

var rezultat;

if(x>y){
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

switch(ocjena){
	case 1:
		console.log("Nedovoljan");
		break;
	case 2:
		console.log("Dovoljan");
		break;
	case 2:
		console.log("Dobar");
		break;
	case 2:
		console.log("Vrlo dobar");
		break;
	case 2:
		console.log("Odličan");
		break;
	default:
		console.log("Nije ocjena");
}
