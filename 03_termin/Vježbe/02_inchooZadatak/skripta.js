

document.getElementById("kreiraj").addEventListener("click", kreiraj);

function kreiraj(){
	
	document.getElementById("poruka").innerHTML="";
	
	var x = document.getElementById("x");
	
	if(x.value.trim().length==0){
		document.getElementById("poruka").innerHTML="Obavezno broj redova (X)";
		return false;
	}
	

	var er = /^-?[0-9]+$/;
	if (!er.test(x.value.trim())){
		document.getElementById("poruka").innerHTML="Broj redova (X) nije cijeli broj";
		return false;
	}
	
	var redova = parseInt(x.value.trim());
	
	if(redova<=0){
		document.getElementById("poruka").innerHTML="Broj redova (X) mora biti veći od 0";
		return false;
	}
    
	
	
	var y = document.getElementById("y");
	
	if(y.value.trim().length==0){
		document.getElementById("poruka").innerHTML="Obavezno broj kolona (Y)";
		return false;
	}
	
	if (!er.test(y.value.trim())){
		document.getElementById("poruka").innerHTML="Broj kolona (Y) nije cijeli broj";
		return false;
	}
	
	var kolona = parseInt(y.value.trim());
	
	if(kolona<=0){
		document.getElementById("poruka").innerHTML="Broj kolona (Y) mora biti veći od 0";
		return false;
	}
	
	var rezultati = popuniTablicu(redova,kolona);
	
	var tablica="";
	tablica+="<table class=\"rezultati\">";
	for(var i=0; i<rezultati.length;i++){
		tablica+="<tr>";
		for(var j=0; j<rezultati[i].length;j++){
			tablica+="<td>" + rezultati[i][j] + "</td>";
		}
		tablica+="</tr>";
	}
	tablica+="</table>";
	
	document.getElementById("tablica").innerHTML=tablica;
	
	document.getElementById("x").value="";
	document.getElementById("y").value="";

	return false;
}
