function popuniTablicu(redova,kolona){

var redovi=[];

for(var i=0; i<redova;i++){
	var kolone=[];
	for(var j=0; j<kolona;j++){
		kolone.push(0);
	}
	redovi.push(kolone);
}

var broj=1;
var r=0, k=1;
var pocetakDL=kolona-1, krajDL = 0;
var pocetakDG = redova-2, krajDG = 0;
var pocetakLD = 1, krajLD = kolona;
var pocetakGD=1, krajGD = redova-1;

while(broj<=redova*kolona){
	for(var i=pocetakDL; i >=krajDL; i--){
		redovi[redovi.length-k][i] = broj++; 
	}
	pocetakDL--;krajDL++;
	for(var i=pocetakDG; i>=krajDG;i--){
		redovi[i][r]=broj++;
	}
	pocetakDG--;krajDG++;
	for(var i=pocetakLD; i<krajLD;i++){
		redovi[r][i]=broj++;
	}
	pocetakLD++;krajLD--;
	for(var i=pocetakGD; i<krajGD;i++){
		redovi[i][redovi[i].length-k]=broj++;
	}
	pocetakGD++;krajGD--;
	r++;k++;
}

return redovi;
}
