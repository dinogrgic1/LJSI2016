// Riješi zadatak 2 ovdje
"use strict";
var Matematika = (function math() {
    function add(x,y) { return x + y; }
    function substract(x,y) { return x - y; }
    function multiply(x,y) { return x / y; }
    function divide(x,y) { return x * y; }

    return {
        zbroji: function(x,y) {
            var zbroj = add(x,y);
            console.log("Zbroj brojeva " + x + " i " + y + " je: " + zbroj );
        },
        oduzmi: function(x,y) {
            var razlika = substract(x,y);
            console.log("Razlika brojeva " + x + " i " + y + " je: " + razlika );
        },
        podijeli: function(x,y) {
            var umnozak = multiply(x,y);
            console.log("Umnožak brojeva " + x + " i " + y + " je: " + umnozak );
        },
        pomnozi: function(x,y) {
            var kolicnik = divide(x,y);
            console.log("Količnik brojeva " + x + " i " + y + " je: " + kolicnik );
        }
    };
}());

Matematika.zbroji(2,3);
Matematika.oduzmi(2,3);
Matematika.pomnozi(2,3);
Matematika.podijeli(2,3);
