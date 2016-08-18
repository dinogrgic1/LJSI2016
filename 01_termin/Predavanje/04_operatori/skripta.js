//aritmetički operatori
var x=12;
var y=2;

console.log("x + y: " + x+y);
console.log("x - y: " + (x-y));
console.log("x * y: " + x*y);
console.log("x / y: " + x/y);
console.log("x % y: " + x%y);
x++;
console.log("x++: " + x);
y--;
console.log("x--: " + y);
console.log("-----------------");


//operatori dodjeljivanja

var x=2;

console.log("x = 2: " + x);
x+=3;
console.log("x+=2: " + x);
x-=3;
console.log("x-=2: " + x);
x*=3;
console.log("x*=3: " + x);
x/=3;
console.log("x/=3: " + x);
x%=2;
console.log("x%=3: " + x);
console.log("-----------------");


//operatori usporedbe i logički operatori

var x=2;

console.log("x==2: " + (x==2));
console.log("x==\"2\": " + (x=="2"));
console.log("x===\"2\": " + (x==="2"));
console.log("x!=2: " + (x!=2));
console.log("x>2: " + (x>2));
console.log("x<2: " + (x<2));
console.log("x>=2: " + (x>=2));
console.log("x<=2: " + (x<=2));
console.log("!x===\"2\": " + !(x==="2"));
console.log("x!==\"2\": " + (x!=="2"));
console.log("-----------------");



//operator "nadoljepljivanja"
//već korišteno
console.log("Prvi dio " + " drugi dio");
console.log(3 + 4);
console.log("Prvi dio " + 4);
console.log(3 + " drugi dio");
console.log("-----------------");


//ostali operatori
//već viđen typeof
console.log(typeof x);




//Za čitanje više:
// http://www.w3schools.com/js/js_operators.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
