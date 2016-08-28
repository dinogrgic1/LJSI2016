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
console.log(batman.firstName + " " + batman.lastName);
batman.showFullName();
```

--

### Another Example

```javascript
"use strict"; 
var firstName = "Clark";
var lastName = "Kent";
var batman = {
    firstName: "Bruce",
    lastName: "Wayne",
    showFullName: function() {
        console.log("Batman is " + firstName + " " + lastName);
    }
}
console.log(batman.firstName + " " + batman.lastName);
batman.showFullName();
```

--

### "this" inside a function 

* If ***this*** is used inside an function it holds the value of the owner of the function

```javascript
"use strict";
var myFunction = (function() {
    this.a = 5;
    console.log(this);
    console.log(this.a);
});
new myFunction();
```

--

### Another example

```javascript
"use strict";
function myFunc() {
    this.a = 5;
};
var five = new myFunc();
console.log(five);
```

--

### strict vs non-strict "this" 

* If ***this*** is used inside a function, it holds the value of the owner of the function

```javascript
function myConstructor() {
    this.a = 'foo';
    this.b = 'bar';
}

var contructor1 = new myConstructor();
var constructor2 = myConstructor();
console.log(contructor1)
console.log(constructor2);
console.log(a);
console.log(b);
```

--

### Binding of "this"

--

### Implicit binding

--

### Explicit binding

--

### call

--

### apply

--

### bind

--

### new 

--

### Objects revisited

--

# That's all folks!
## Questions?

--

# Thank you!

--
