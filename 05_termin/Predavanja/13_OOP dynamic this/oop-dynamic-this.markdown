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
Objects in JavaScript are collections of key-value pairs, where the key can be *any string* and the value is one of the 6 types defined in JavaScript:
* boolean
* number
* string
* undefined
* null
* object

--
### Creating Objects
Objects can be created by using *literal* form, *construced* form or *Object.create*. 

```javascript
"use strict";
var obj = {
    key: 5
};
```

Constructed form:

```javascript
"use strict";
var obj = new SomeFunction();
obj.key = 5;
```

--

### Accessing object values
There are 2 ways to access object's properties in JavaScript:
* property access - &lt;object&gt;.&lt;keyname&gt;
* key access - &lt;object&gt;["&lt;keyname&gt;"];

```javascript
"use strict";
var obj = {
    a = 5
};
console.log(obj.a); // property access
console.log(obj["a"]); // key access
```

--

### Constructed form example
Constructed form involves calling a *function* with the constructed form(*new* keyword).

```javascript
"use strict";
function Student() {
    this.id = 0;
    this.name = null;
}

var student = new Student();
student.id = 1;
student.name = "Student Foo";
```

--

### Property descriptors
Define the following characteristics of object properties:
* writable (ignored if get/set used)
* enumerable
* configurable
* value (ignored if get/set used)
* get
* set

Can be read using the *Object.getOwnPropertyDescriptor* function.

--
### Property descriptors example

```javascript
"use strict";
var obj = {
    foo: 10
};

var descriptor = Object.getOwnPropertyDescriptor(obj, "foo");
console.log(descriptor);
/* prints {
    configurable: true,
    enumerable: true,
    value: "I'm a property!",
    writable: true
}*/
```

--

### Specifying property descriptors
To create properties with non-default descriptors, *Object.defineProperty* can be used. This same function can be used to modify existing descriptors if they are configurable.

```javascript
"use strict";
var obj = {};

// make the property non-writable
Object.defineProperty(obj, "foo", {
    value: 10,
    configurable: true,
    writable: false,
    enumerable: true
});
```
--

### Getter
Getters are functions which are called when getting a property value, the getter function result will be returned as the property value in that case.

```javascript
"use strict";
var obj = { 
    get foo() { return 5; }
};
console.log(obj.foo); // prints 5
```
--

### Getter with defineProperty

```javascript
"use strict";
var obj = {};
Object.defineProperty(obj, "foo",
{
    get: function() { return 5; } 
});
console.log(obj.foo); // prints 5
```

--

### Setter
Setters are functions called when setting a property.

```javascript
"use strict";
var obj = { 
    set foo(val) { this._foo = val; }
};

obj.foo = 5;
console.log(obj._foo); // prints 5
```
--

### Setter with defineProperty
```javascript
"use strict";
var obj = {};
Object.defineProperty(obj, "foo",
{
    set: function(val) { this._foo = val; } 
});

obj.foo = 5;
console.log(obj._foo); // prints 5
```

--

### Getter and setter example

```javascript
var person = {
    get age() {
        return this._age;
    },
    set age(val) {
        if (val < 0) {
            throw "Invalid age for a person.";
        }

        this._age = val;
    }
};

person.age = 20;
console.log(person.age); // prints 20
person.age = -10; // Error
```

--

### Preventing changes to Objects
Preventing changes to objects can be achieved in a few different ways, depending on needs:
* *Object.preventExtensions* - TypeError if any new properties are added
* *Object.seal* - preventExtensions + configurable: false
* *Object.freeze* - Object.seal + writable: false

--

### Prototypes
Prototypes are a way to share common code among objects through formation of *prototype chains* (also known as **prototypal inheritance**).

The way prototypal inheritance functions is that an object can set another object as its prototype and if a property can't be found directly on the initial object, the prototype will be searched for it. If the property is found on the prototype it will be used as if on the 
object itself, and if no property is found *undefined* is returned.

The prototype of an object can be acquired by calling *Object.getPrototypeOf*.

--

### Prototype chains

Prototypes can form chains e.g. obj1 has obj2 as a prototype, obj2 has obj3 as a prototype etc. If a property is not found on obj1, obj2 will be searched for it, if it's not found on obj2, obj3 will be searched for it etc. The top of every prototype chain is the *Object.prototype* object.

--
### Prototype chains and setting properties
Rules:

1. Trying to set a property which has no setter and is writable, if the property is found in the property chain it won't be set on the property, but will be created on the object itself and set there (shadowing)

2. If the property is found in the property chain, but is not writable TypeError is thrown

3. If the property has a setter and is found in the property chain, the setter is called, no shadowing occurs

--

### Function prototype 
Functions have a prototype property which is used to set the prototype of an object created with the function using *new*.

```javascript
"use strict";
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
}

var person = new Person("Ivan", 30); 
person.greet();
Object.getPrototypeOf(person) === Person.prototype; // true
```

--

### Object.create prototype
```javascript
"use strict";
var person = {
    greet: function() {
        console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
    }
};

var p = Object.create(person);
p.name = "Ivan";
p.age = 20;
p.greet();
Object.getPrototypeOf(p) === person; // true
```

--

### Prototypal inheritance example
```javascript
```

--

### Zadatak 2
Simulirajmo kretanje 2 tipa igrača u računalnoj igrici, oba imaju ime, brzinu i 4 funkcije za kretanje: gore, dolje, lijevo i desno. Pretpostavimo da se igrači kreću pravocrtno te nalaze na ploči s kvadratima (npr. šahovska ploča) veličine 60x60 kvadrata, te je njihova brzina određena
brojem kvadrata koje mogu prijeći odjednom. Također pretpostavimo da gornji lijevi kut ploče ima koordinate 0,0 a donji desni 60,60. Potrebno je napisati tipove igrača "pješak" i "vozilo", te implementirati njihove funkcije za kretanje, nakon poziva svake funkcije potrebno je promijeniti koordinate 


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
var Film = (function(ime,zanr) {
    this.ime = ime;
    this.zanr = zanr
    console.log(this);  // { ime: 'Interstellar', zanr: 'Sci-Fi' }
    console.log(this.ime); // Interstellar
    console.log(this.zanr); // Sci-Fi
});
new Film("Interstellar","Sci-fi");
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
* ***call*** executes a function with "this" parameter and a list of variables
* ***apply*** executes a function "this" parameter and an array of variables
* ***bind*** creates a function "this" parameter and a list of variables

--

### call

* "call" method executes a function in the scope of the first object you pass into it
* "call" method usses a comma separated list of arguments
* Number of parameters is fixed

--

### Example

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
