var redova = prompt("Unesite broj redova",3);

var kolona = prompt("unesite broj redova",5);

posao();


function posao(){
    if(kolona<redova){
    return ;
    }

var podaci= [];

//console.log(podaci);

for (var i=0; i<redova; i++){
    podaci[i]= [];
}

//console.log(podaci);
var broj = 0;
for (var i=0; i<redova; i++){
    for (var j=0; j<kolona; j++){
        while(true){
            broj=Math.random();
            broj = broj.toString().substring(2,3);
            if(broj>=7 && broj<=9){
                podaci[i][j]=parseInt(broj);
                break;
            }
        }
        
    }
}

document.write("<table>");
document.write("<tbody>");

for (var i=0; i<redova; i++){
    document.write("<tr>");
    for (var j=0; j<kolona; j++){
        switch (podaci[i][j]){
            case 7:
                document.write("<td style=\"min-width: 100px; min-height: 100px;\"></td>");
                break;
            case 8:
                document.write("<td><img src=\"01_cvjetic.png\" alt=\"Cvjetić\" /></td>");
                break;
            case 9:
                document.write("<td><img src=\"01_autic.png\" alt=\"Autić\" /></td>");
                break;
        }


        
    }
    document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");

//console.log(podaci);
}


