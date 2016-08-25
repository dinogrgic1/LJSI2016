title: Scope & Closures
output: scope-and-closures.html
controls: false
style: style.css

--

# Scope and Closures
## Code Camp 2016
<br />
## Vlatko Vlahek
## Vedran Zakanj

--

### Prerequisites

* Variables
* Functions
* Callbacks

--

### Strict mode

* restricted variant of JS (good thing!)
* no silent errors - we want to know about these
* code can be better optimized by JS engine - potentially faster
* enabled by adding "use strict"; at the beginning of script or function
* we'll be using strict mode in all of our examples and exercises

--

### Strict mode Example
Script level

```javascript
"use strict";
console.log("Using strict mode.");
```

Function level

```javascript
// non strict mode
function foo() {
    "use strict"; // strict mode
    console.log("Strict only inside function foo.");
}
// non strict mode

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
console.log(firstCar); // ReferenceError, firstCar is not in scope
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
    // notice that name is also local to function scope
    var isValid = name === "admin";
    return isValid;
} // end of function definition

var userNameValid = validateUsername(userName);
console.log(userNameValid); // prints true
console.log(isValid); // ReferenceError
```
--

### Nested scopes
Scopes can be nested, actually previous example is also nesting scopes, i.e. the scope created by the function is nested inside the global scope.

Multiple levels of scope nesting are allowed by nesting a function inside a function. 

If a function or a variable can't be found on the current scope, javascript will look for it in parent scope, then in parent's parent scope etc.

-- 
### Nested scopes example

```javascript
"use strict";
var globalVariable = "I'm in global scope!";
console.log(globalVariable); // prints "I'm in global scope!" 

function createFirstNestedScope() {
    var firstNestedScopeVariable = "First nested scope!";
    console.log(firstNestedScopeVariable); 

    function createSecondNestedScope() {
        // globalVariable and firstNestedScopeVariable 
        // also accessible here
        var secondNestedScopeVariable = 
            "Nested in first nested scope";
        console.log(secondNestedScopeVariable); 
    }
    createSecondNestedScope();
}
createFirstNestedScope();
```

--

### Nested scopes illustrated

** // TODO **
--

### Shadowing
Having a variable with the same identifier inside a scope and its nested scope, when accessing a variable from the nested scope the variable in that scope will be used instead of the parent scope's variable, we say that the variable is *shadowed*.  

```javascript
"use strict";
var foo = 5;

function printFoo() {
    // this foo is shadowing foo variable from global scope
    var foo = 10; 
    console.log(foo); // prints 10
} 

printFoo();
console.log(foo); // prints 5
```

--

### Hoisting
Variable and function *declarations* are *hoisted* to the beginning of the current scope.

```javascript
"use strict";
console.log(nonExistingVariable); // ReferenceError
```

vs

```javascript
"use strict";
console.log(definedLater); // prints "undefined"

var definedLater = "I exist!";
console.log(definedLater); // prints "I exist!"
```

---

### More hoisting


```javascript
"use strict";
console.log(bar); // prints undefined, but no ReferenceError

printFoos();

function printFoos() {
    foo = "First foo!";
    console.log(foo); // prints "First foo!"

    var foo = "Second foo!"
    console.log(foo); // prints "Second foo!"
}

var bar = "Bar!";

console.log(bar); // prints "Bar!"
```

--

### Previous hoisting example equivalent

```javascript
"use strict";
var bar;

function printFoos() {
    var foo;
    foo = "First foo!";
    console.log(foo); // prints "First foo!"

    foo = "Second foo!"
    console.log(foo); // prints "Second foo!"
}

console.log(bar); // prints undefined, but no ReferenceError
printFoos();

bar = "Bar!";
console.log(bar); // prints "Bar!"
```
--

### Function expressions

--

### Immediately invoked function expressions (IIFE)

--

### Don't pollute the global scope - module pattern

--

### Closures

--

### Asynchronous operations and callbacks

--

### Closures and async operations

--

# That's all folks!
## Questions?

--

# Thank you!

--
