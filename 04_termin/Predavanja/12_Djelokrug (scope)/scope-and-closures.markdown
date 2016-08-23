title: Scope & Closures
output: scope-and-closures.html
controls: false
theme: jdan/cleaver-retro

--

# Scope and Closures
## Code Camp 2016
--

### Prerequisites

* Variables
* Functions
* Expressions


--

### Strict mode

* restricted variant of JS (good thing!)
* no silent errors - we want to know about these
* code can be better optimized by JS engine - potentially faster
* enabled by adding "use strict"; at the beginning of script or function

--

### Strict mode Example
Script level

```javascript
"use strict";
console.log("Using strict mode.");
```

Function level

```javascript
function foo() {
    "use strict";
    console.log("Strict only inside function foo.");
}

foo();
```

--

### Scope
* set of rules for storing and accessing variables and functions
* JavaScript uses lexical scope - scope determined by the position of the identifiers in the code
* lexical scope is used by most of the popular programming languages today

--

### Scope Example
```javascript
"use strict";
var carToRate = "VolksWagen"; // variable in global scope
console.log("Rating car model: " + carToRate);

function rateFirstCar() {
    var firstCar = "Fiat"; // variable in local scope
    console.log(carToRate + " is better than " + firstCar);
}

function rateSecondCar() {
    console.log("Mercedes is better than " + carToRate);
}

rateFirstCar(); // prints "VolksWagen is better than Fiat."
rateSecondCar(); // prints "Mercedes is better than VolksWagen."
console.log(firstCar); // ReferenceError because firstCar is not in scope
```

--

### Global scope
* window object in the browser
* any variable declared in global scope is also accessible through window.&lt;variable&gt;
* global scope pollution is a problem

```javascript
var globalVariable = "I'm global!";
console.log(window.globalVariable); // prints "I'm global!"
```

--

### Scope creation
In ES5 scopes can only be created by creating a function, there is no block scope like in some other languages.

```javascript
"use strict";
var isInputValid = true; // global scope

if (isInputValid) { // if block start
    // global scope, blocks don't create new scope
    var msg = "User input is valid."; 
} // if block end

console.log(msg); // prints "User input is valid."
```

--

### Blocks don't create new scope
Code from previous slide is equivalent to:

```javascript
"use strict";
var isInputValid = true; // global scope
var msg;

if (isInputValid) {
    msg = "User input is valid.";
}

console.log(msg); // prints "User input is valid."
```

--

### Compared to a language with block scope
C# code: 

```csharp
var isInputValid = true;
if (isInputValid)
{
    // Scope local to if statement
    var msg = "User input is valid.";
}

Console.WriteLine(msg);
```

Won't compile due to reference error since string msg is in the block scope of if statement.

--

### Create a new scope with a function
Functions create a new scope, so *isValid* is not accessible from anywhere else, except inside the *validateUsername* function.

```javascript
"use strict";
var userName = "admin";

function validateUsername(name) { // beginning of function definition
    // create variable in function scope, inaccessible from global scope
    var isValid = name === "admin";
    return isValid;
} // end of function definition

var userNameValid = validateUsername(userName);

console.log(userNameValid); // prints true
console.log(isValid); // ReferenceError
```
--

### Nested scopes


--

### Function expressions

--

### Preventing global scope pollution

--

### Variable hoisting

--

### Closures

--

# That's all folks!
## Questions?

--

# Thank you!

--
