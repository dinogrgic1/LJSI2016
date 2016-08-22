// DEFINICIJA: Djelokrug (Scope) je set varijabli, objekata i funkcija kojima možemo pristupiti unutar našeg koda

//                                        //
//  1. Globalni djelokrug (global scope)  //
//                                        //

var modelAutomobila = "Golf";
console.log(modelAutomobila + " je super");

function boljiAutomobil() {
    console.log(modelAutomobila + " je bolji od Peglice");
}

function losijiAutomobil() {
    console.log(modelAutomobila + " je lošiji od Mercedesa");
}

boljiAutomobil();
losijiAutomobil();

// ZAPAMTITI: 
// Unutar browsera, globalni djelokrug je sve što vidimo unutar trenutno otvorenog "prozora" / "tab-a" (window)

//                                                          //
//  2. Izvedeni globalni djelokrug (inferred global scope)  //
//                                                          //

// Eksplicitno definirana globalna varijabla
var modelAutomobila = "Golf";
console.log(modelAutomobila);

// Implicitno definirana globalna varijabla
modelAutomobila = "Audi A3";
console.log(modelAutomobila);

// Primjer
function boljiAuto() {
    modelAutomobila = "Golf"
    console.log(modelAutomobila + " je bolji od Peglice");
}

function losijiAuto() {
    console.log(modelAutomobila + " je lošiji od Mercedesa");
}

boljiAuto();
losijiAuto();

// ZAPAMTITI: Definiranje varijabli u globalni djelokrug je Anti-Pattern

//                                      //
//  3. Lokalni djelokrug (local scope)  //
//                                      //

// Primjer 1.
function lokalniDjelokrug() {
    var modelAutomobila = "BMW 3"
    console.log("Lokalni djelokrug: " + modelAutomobila);
}

lokalniDjelokrug();

try {
    console.log("Globalni djelokrug: " + modelAutomobila);
} catch (e) {
    console.log(e);
}

// Primjer 2.
function prviAutomobil() {
    var modelAutomobila = "BMW 3"
    console.log("Prvi automobil je: " + modelAutomobila);
}

function drugiAutomobil() {
    var modelAutomobila = "Audi 3"
    console.log("Drugi automobil je: " + modelAutomobila);
}

prviAutomobil();
drugiAutomobil();

//                                                                         //
//  4. Kombinacija lokalnog i globalnog djelokruga (global + local scope)  //
//                                                                         //

// Primjer 1. - Naslijeđivanje globalne varijable
var modelAutomobila = "Golf"
console.log("Globalni djelokrug: " + modelAutomobila);

function auto() {
    console.log("Lokalni djelokrug: " + modelAutomobila);
}

auto();

// Primjer 2. - Globalna i lokalna varijabla
var modelAutomobila = "Golf";
var zemljaProizvodnje = "Njemačka";
console.log("Model automobila je: " + modelAutomobila + ", Zemlja proizvodnje: " + zemljaProizvodnje);

function auto() {
    var modelAutomobila = "BMW 3";
    var proizvodjacAutomobila = "BMW";
    console.log("Model automobila: " + modelAutomobila);
    console.log("Proizvođač automobila je: " + proizvodjacAutomobila);
    console.log("Zemlja podrijetla je: " + zemljaProizvodnje);
}

auto();
console.log(modelAutomobila);

// Primjer 3. - "Uzdizanje varijabli" (variable hoisting)
var modelAutomobila = "Golf"
console.log("Globalna varijabla: " + modelAutomobila);

function auto() {
    console.log(modelAutomobila);
    var modelAutomobila = "BMW 3";
    console.log("Lokalna varijabla: " + modelAutomobila);
}

auto();

// Primjer 4. - "Uzdizanje varijabli 2" - pripaziti
var x = 5;

function zbrajanje() {
    var y = 7;
    var zbroj = x + y;
    var x = 0;
    
    console.log(zbroj);
}

zbrajanje();

// ZAPAMTITI: Pravilo uzdizanja varijabli vrijedi samo za deklaraciju varijable, ali ne i za dodijeljivanje vrijednosti.

//                            //
//  5. JavaScript namespaces  //
//                            //

// Za razliku od C-u sličnih jezika, JS ne podržava namespaceove pa se zato za tu svrhu služimo kombinacijom objekata i funkcija

// Primjer 1. - Pojedini namespace
var matematika = {
    zbroji: function (x, y) {
        return x + y;
    },
    oduzmi: function(x, y) {
        return x - y;
    },
    podijeli: function(x, y) {
        return x * y;
    },
    pomnozi: function(x, y) {
        return x / y;
    } 
}

var zbroj = matematika.zbroji(2,3);
var razlika = matematika.oduzmi(14,7);
var kolicnik = matematika.podijeli(14,7);
var umnozak = matematika.pomnozi(2,8);

console.log(zbroj);
console.log(razlika);
console.log(kolicnik);
console.log(umnozak);

// Primjer 2. - Ugnježđivanje namespacea
var mojaAplikacija = {
    matematika: {
        osnovnaAritmetika: {
            zbroji: function (x, y) {
                return x + y;
            },
            oduzmi: function(x, y) {
                return x - y;
            },
            podijeli: function(x, y) {
                return x * y;
            },
            pomnozi: function(x, y) {
                return x / y;
            } 
        }
    },
    jezik: {
        nadjiDuljinuRijeci: function(tekst) {
            return tekst.length;
        }
    }
}

var x = 10;
var y = 14;
var tekst = "Riba ribi grize rep";

console.log("Zbroj nepoznanica x i y iznosi: " + mojaAplikacija.matematika.osnovnaAritmetika.zbroji(x,y));
console.log("Duljina teksta " + '"' + tekst +  '"' + " iznosi " + mojaAplikacija.jezik.nadjiDuljinuRijeci(tekst) + " znakova");

//                                         //
//  6. Lanac djelokgruga (nested scoping)  //
//                                         //

function prva() {
    druga();
    function druga() {
        treca();
        function treca() {
            cetvrta();
            function cetvrta() {
                x = 12;
                y = 8;
                zbroj = x + y;
                console.log(zbroj);
            }
        }
    }
}
prva();

//                                                       //
//  7. Immediatelly invoked function expressions (IIFE)  //
//                                                       //

// Rješavaju:
// Zagađenje globalnog namespace-a (global namespace pollution)
// Neplansko uzdizanje varijabli
// Omogućavaju "privatne" varijable

// Primjer 1.
(function() {
    var kucniLjubimac = "pas";
    var imeLjubimca = "Rex";
    var pasmina = "Kokeršpanijel";

    console.log("Moj kućni ljubimac je " + kucniLjubimac + ", zove se " + imeLjubimca + ", i on je " + pasmina);
}());

// Primjer 2.
var a = 5;
(function () {
    function zbroj() {
        var b = 7;
        var c = 16;
        return a + b + c;
    };
    console.log(zbroj());
}(a));

// Primjer 3. 
var ime = "pero";
var getValue = (function(x) {
    return function() { return x; };
}(ime));
ime = "ivo";

console.log(getValue());

//                     //
//  8. Module pattern  //
//                     //

var matematika = (function() {
    var sum = 0 ;

    return {
        dodaj: function() {
            return ++sum;
        },
        ponisti: function() {
            return sum = 0;    
        }  
    }   
}());
console.log(matematika.dodaj());    
console.log(matematika.dodaj());
console.log(matematika.ponisti());



