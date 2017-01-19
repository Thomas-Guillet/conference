
function start(){
/**var boutton = document.getElementById("boutton1");
boutton.onclick = function fct01(){
	console.log("onclick");
}	*/

//identifie le boutton "new_conference" grace à son id puis le lie à la variable "new_conference"
var new_conference = document.getElementById("new_conference");
new_conference.onclick = function ajout_conference(){
	
	var data = {
		//le .value permet de récupéré la valeur de la balise ayant comme valeur d'id celui récupéré par getelementbyid
		'titre': document.getElementById("titre").value,
		'description': document.getElementById("description").value,
		'date': document.getElementById("date").value,
		'logo': document.getElementById("logo").value
	};
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', "/send", true);
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send(JSON.stringify(data));
	
	xhr.addEventListener("readystatechange", processRequest, false);
	function processRequest(){
		//4 et 200  permettent de savoir si la donnée est bien reçue
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = xhr.responseText;
			
			//permet d'afficher les données en html
			var divResponse = document.createElement('div');
			divResponse.className = "bloc";
			divResponse.textContent = response;
			
			document.body.appendChild(divResponse);
		}
	}
	
}	



}

window.addEventListener("load", start);


function fctbutton1(){
	debugger;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "/conf", true);
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send();
	
	xhr.addEventListener("readystatechange", processRequest, false);
	function processRequest(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = JSON.parse(xhr.responseText);
			
			debugger;
			
			//var divResponse = document.createElement('div');
			//divResponse.className = "bloc";
			//divResponse.textContent = response;
			
			//document.body.appendChild(divResponse);
		}
	}
}



