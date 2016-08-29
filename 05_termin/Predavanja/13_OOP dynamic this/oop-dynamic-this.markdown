title: OOP in JavaScript
output: oop-in-javascript.html
controls: false
style: style.css

--

# OOP in JavaScript
## Code Club Osijek 2016
<br />
## Vlatko Vlahek
## Vedran Zakanj

--

### Objects

--

### [[Prototype]]

--

### Prototypal inheritance

--

### "this" 

* ***this*** is a dynamic keyword in JavaScript
* It is a reference to the owner of the current scope where it is used
* It's value can change depending on how it is used

--

### global "this" 

* if used inside a browser it has the value of the ***window*** object
* if used insde a node.js module, it has the value of ***module.exports***

--

### global "this"

In global scope:

```javascript
"use strict";
this.a = 5;
this.b = "Pero";
```

equals:

```javascript
"use strict";
var a = 5;
var b = "Pero";
```

--

### "this" inside an object 

* If ***this*** is used inside an object it holds the value of the object itself

```javascript
"use strict"; 
var batman = {
    firstName: "Bruce",
    lastName: "Wayne",
    showFullName: function() {
        console.log("Batman is " + this.firstName + " " + this.lastName);
    }
}
console.log(batman.firstName + " " + batman.lastName); // Bruce Wayne
batman.showFullName(); // ...
```

--

### Zadatak 1.

* Kreirajte objekt Osoba sa slijedećim parametrima: ***ime***, ***prezime***, ***grad***, ***postanskiBroj***, ***drzava***
* Objekt bi trebao imati 2 funkcije: jednu koja vraća ime i prezime osobe, i drugu koja vraća poštansku adresu.
* Primjer:
    1. Ime i prezime: Pero Perić
    2. Poštanska adresa: F.K.Frankopana 18, 31000 Osijek, Republika Hrvatska

--

### new 

* "this" can be used as an object constructor
* new keyword creates a new instance of an user defined object instead of calling the function

```javascript
var Car = function(brand, model, color){
  this.brand = brand;
  this.model = model;
  this.color = color        
}

var audiA3 = new Car("Audi","A3","Crvena");
var mazda3 = new Car("Mazda","3","Zelena");
var skodaOctavia = new Car("Škoda","Octavia","Srebrna");
```

--

### Another example

```javascript
"use strict";
var film = (function(ime,zanr) {
    this.ime = ime;
    this.zanr = zanr
    console.log(this);  // { ime: 'Interstellar', zanr: 'Sci-Fi' }
    console.log(this.ime); // Interstellar
    console.log(this.zanr); // Sci-Fi
});
new film("Interstellar","Sci-fi");
```

--

### strict vs non-strict "this" 

* Use "strict" mode to avoid global variable creation

```javascript
"use strict";
function myConstructor() {
    this.a = 'foo';
    this.b = 'bar';
}

var contructor1 = new myConstructor(); 
var constructor2 = myConstructor(); 
console.log(contructor1) // {a: 'foo', b: 'bar' }
console.log(constructor2); // undefined
console.log(a);
console.log(b);
```

--

### Binding of "this"

```javascript
"use strict"; 
var firstName = "Clark";
var lastName = "Kent";
var batman = {
    firstName: "Bruce",
    lastName: "Wayne",
    showFullName: function() {
        console.log("Batman je " + this.firstName + " " + lastName);
    }
}
console.log(batman.firstName + " " + batman.lastName); // Bruce ...
batman.showFullName(); // Bruce ...
```

--

### Implicit binding

* Implicitly binded "this" is always what is left of the dot.

```javascript
"use strict";
var osoba1 = { ime: "Ivan", godine: 25 };
var osoba2 = { ime: "Maja", godine: 27 };

var ime = function(osoba) {
    osoba.kaziIme = function() {
        console.log(this.ime);
    };
};

ime(osoba1); // Proslijeđivanje objekta u funkciju
osoba1.kaziIme(); // Ivan
ime(osoba2);
osoba2.kaziIme(); // Maja
```

--

### Another example

```javascript
"use strict";
var Osoba = function(ime, prezime){ 
    return { 
        ime: ime, prezime: prezime,
        reciIme: function() {
            console.log(this.ime);
        },
        brat: {
            ime: "Ivan", prezime: prezime,
            reciIme: function() {
                console.log(this.ime);
            }
        }
    }
};
var stjepan = new Osoba("Stjepan", "Šimić");
stjepan.reciIme(); // ...
stjepan.brat.reciIme(); // ...
```

--

### Explicit binding

* We can bind explicitly with ***call***, ***apply*** and ***bind***
* ***call*** uses "this" parameter and a list of variables
* ***apply*** uses "this" parameter and an array of variables
* ***bind*** uses "this" parameter

--

### call

* "call" method executes a function in the scope of the first object you pass into it

```javascript
"use strict";
var osoba1 = { name: 'Ivana', age: 42 };
var osoba2 = { name: 'Mirko', age: 58 };

var sayHello = function(){
    console.log('Bok ' + this.name);
};

sayHello.call(osoba1); // Bok Ivana
sayHello.call(osoba2); // Bok Mirko
sayHello(osoba1); // Error
```

--

### call with multiple arguments

* "call" method executes a function in the scope of the first object you pass into it
* "call" method usses a comma separated list of arguments
* Number of parameters is fixed

--

### Example

```javascript
"use strict";
var osoba1 = { name: 'Ivana', age: 42 };

var tkoJeTo = function(ime, prezime, sto, godine){
    console.log(ime + " " + prezime + " je " + sto + " od " + godine + " godina")
};

tkoJeTo.call(osoba1, "Pero", "Perić", "student", 24); 
tkoJeTo.call(osoba1, osoba1.name, "Ivić", "djevojčica", 12);
```

--

### apply

* "apply" method also executes a function in the scope of the first object you pass into it
* "apply" method usses an array of arguments
* Number of parameters is is determined by the size of the array

--

### Example

```javascript
"use strict";
var osoba1 = { name: 'Ivana', age: 42 };

var sayHello = function(){
    console.log('Bok ' + this.name);
};

var sayGoodbye = function(){
    console.log('Doviđenja, ' + this.name);
};

sayHello.apply(osoba1); // Bok Ivana
sayGoodbye.apply(osoba1); // Doviđenja, Mirko
```

--

### apply with multiple arguments

```javascript
"use strict";
var osoba1 = { name: 'Ivana', age: 42 };

var tkoJeTo = function(ime, prezime, sto, godine){
    console.log(ime + " " + prezime + " je " + sto + " od " + godine + " godina")
};

var args = ["Pero", "Perić", "student", 24];
tkoJeTo.apply(osoba1, args);
args = ["Ivana", "Ivić", "djevojčica", 12];
tkoJeTo.apply(osoba1, args);
```

--

### bind

* "bind" method creates a function in the scope of the first object you pass into it
* "bind" uses a comma separated list of arguments
* Allows passing in arguments without invoking the function

--

### Example

```javascript
"use strict";
var osoba = { ime: "ime" }
var tkoJeTo = function(ime, prezime, sto, godine){
    console.log(ime + " " + prezime + " je " + sto + " od " + godine + " godina")
};

var ivana = tkoJeTo.bind(osoba, "Ivana", "Ivić", "studentica", 21);
var stjepan = tkoJeTo.bind(osoba, "Stjepan", "Šimić", "učenik", 8);
var robert = tkoJeTo.bind(osoba, "Luka", "Modrić", "nogometas", 30);
var marko = tkoJeTo.bind(osoba, "Marko", "Marković", "mehaničar", 28);
ivana();
stjepan();
robert();
marko();
```

--

# That's all folks!
## Questions?

--

# Thank you!

--
