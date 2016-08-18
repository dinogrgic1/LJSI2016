/* Simple VanillaJS to toggle class */

document.getElementById('toggleProfile').addEventListener('click', function () {
  [].map.call(document.querySelectorAll('.profile'), function(el) {
    el.classList.toggle('profile--open');
  });
});

var izracuni=[];

document.getElementById("izracunaj").addEventListener("click", izracunaj);

function izracunaj(){
	
	document.getElementById("poruka").innerHTML="";
	
	var ona = document.getElementById("ona");
	
	if(ona.value.trim().length==0){
		document.getElementById("poruka").innerHTML="Obavezno ime cure";
		return false;
	}
	
	
	var on = document.getElementById("on");
	
	if(on.value.trim().length==0){
		document.getElementById("poruka").innerHTML="Obavezno ime dečka";
		return false;
	}
	
	var rezultati = document.getElementById("rezultati");
	var li = document.createElement("li");
	var postotak = ljubav(ona.value,on.value);
	li.appendChild(document.createTextNode(ona.value + " ♥ " + on.value + " = " + postotak + " %"));
	rezultati.appendChild(li);
	
	izracuni.push({on: on.value, ona: ona.value, postotak: postotak});
	
	document.getElementById("ona").value="";
	document.getElementById("on").value="";
	
	

	return false;
}
