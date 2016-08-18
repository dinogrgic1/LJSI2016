//AJAX pomoću jQuery
/*
$.ajax({
    url: "test.html",
    context: document.body,
    success: function(){
      $(this).addClass("done");
    }
});
*/


function odradiAJAX(poveznica, povratnaFunkcija){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            povratnaFunkcija(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", poveznica, true);
    xmlhttp.send();
}

function povratnaFunkcija(vratioServer){
	console.log(vratioServer);
}

odradiAJAX("datoteka.txt",povratnaFunkcija);
