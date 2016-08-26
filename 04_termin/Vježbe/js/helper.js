//                                      //
// Ne diraj ništa u ovom dokumentu !!!! //
//                                      //
"use strict";

var div = document.getElementById("kutija");
var zadatak1 = {
    start: function(err) {
        var x, y;
        var niz = [1, 2, x, 7, y];
        niz[2] = zadatak1.generirajBrojeve();
        niz[4] = zadatak1.generirajBrojeve();

        zadatak1.prikaziNiz(niz);
        if (err !== undefined) {
            div.innerHTML += "<span style='color:red;' class='err'>" + err + "</span>";
        }
    },
    prikaziNiz: function(niz)  {
        var i = 0;
        for(i;i<niz.length;i++) {
            if(niz[i] === undefined) {
                niz[i] = "undefined";
            }
        }

        if(isNaN(niz[2]) ===  true || isNaN(niz[4]) ===  true) {
            var warn = zadatak1.warn(); 
            console.log("Vrijednosti x ili y su 'undefined'. Pokušaj ponovo");
            var form = "<p><b>Unesi sumu sljedećih brojeva:</b></p><form id='forma'><span id='niz'>" + niz.toString().replace(/,/g, " + ") + "</span><br>";
        } else {
            var sum = niz.reduce(add, 0);
            function add(a, b) {
                return a + b;
            }

            var valueElement = "<input id='value' style='visibility:hidden;' value='"+ sum + "' />";
            var form = "<p><b>Unesi sumu sljedećih brojeva. <br>Rezultat mora biti cijeli broj:</b></p><form id='forma'>" + niz.toString().replace(/,/g, " + ") + "<br><label name='zbroji' for='zbroji'>Rješenje:<input id='zbroji' type='text' /></label><br><button type='button' onclick='zadatak1.zbroji()'>Zbroji</button>";
        }
        
        div.innerHTML = form;
        div.innerHTML += valueElement ? valueElement : "";
        div.innerHTML += warn ? warn : "";
    },
    warn: function () {
        console.warn("Popravi me! \n\n JavaScript funkcija 'randomise()' koja se nalazi datoteci 'z1.js', u mapi 'js' nije dovršena. \n\n Prati upute i probaj ju dovršiti da vraća cijele brojeve umjesto undefined ili NaN vrijednosti");
        return "<hr>Tu nešto gadno ne valja! :( <br><br> Možda nam konzola unutar Google Chromea može pomoći!<br><p><b>Misliš da si našao / našla problem?</b></p><button type='button' onclick='location.reload();'>Probaj ponovo</button>";
    },
    generirajBrojeve: function(){
        return randomise();
    },
    zbroji: function () {
        var x = parseInt(document.getElementById("zbroji").value);
        var sum = parseInt(document.getElementById("value").value);
        
        if(x === sum) {
            div.innerHTML = zadatak1.bravo();
        } else {
            var err = "Izgleda da unešeni zbroj ne odgovara pravoj vrijednosti. \n Probaj ponovo";
            console.log(err);
            zadatak1.start(err);
        }
    },
    bravo: function() {
        console.warn("Bravo! \n\n Sretno sa drugim zadatkom");
        return "<hr>Bravo! :) <br><br> Sretno s drugim zadatkom";
    }
}
