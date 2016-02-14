window.onload = function(){

 var concat = "";
 var accion = document.getElementById("selectEjercicio");
 accion.addEventListener("change", function(){
 	doExer = document.getElementById("selectEjercicio").value;

 	switch (doExer) {
 		case "circulo":
			document.getElementById("respuestas").innerHTML = "<span><input type='text' id='radio' placeholder='Digite radio'/><button onclick='calcularAC();'>Calcular</button></span>"; 				
 		break;

 		case "triangulo":
			document.getElementById("respuestas").innerHTML = "<span><input type='text' id='baseT' placeholder='Digite base'/><input type='text' id='alturaT' placeholder='Digite Altura'/><button onclick='calcularAT()'>Calcular</button></span>";
 		break;

 		case "cuadrado":
			document.getElementById("respuestas").innerHTML = "<span><input type='text' id='cuadrado' placeholder='Digite lado del cuadrado'/><button onclick='calcularACU();'>Calcular</button></span>";
 		break;

 		case "vocales":
			document.getElementById("respuestas").innerHTML = "<span><input type='text' id='vocals' placeholder='Digite palabra'/><button onclick='vowels();'>Consultar</button></span>";
 		break;
 		
 		case "consonantes":
			document.getElementById("respuestas").innerHTML = "<span><input type='text' id='consonants' placeholder='Digite palabra'/><button onclick='existCons();'>Consultar</button></span>";
 		break;
 		
 		case "capicua":
			document.getElementById("respuestas").innerHTML = "<span><input type='text' id='capicuaN' placeholder='Digite número'/><button onclick='capicua();'>Verificar capicua</button></span>";
 		break;

 		default:
 		break;
 	}
});


}
var element = "";
var base = "";
var altura = "";
var i = "";
var retur = false;

function calcularAC()
{
	element = document.getElementById("radio");
	if(!isNaN(element.value)){
	(element.value.length > 0) ? document.getElementById("valores").innerHTML = "El resultado es "+ Math.PI * Math.pow(element.value, 2) +" " : document.getElementById("valores").innerHTML = "Ingrese un valor válido";
	} else {
		document.getElementById("valores").innerHTML = "Ingrese valores numéricos";
	} 
}

function calcularAT()
{
	base = document.getElementById("baseT");
	altura = document.getElementById("alturaT");
	if (base.value.length > 0 && altura.value.length > 0 ) {
		document.getElementById("valores").innerHTML = "El resultado es "+ (base.value * altura.value) / 2 +" " 
	} else {
		document.getElementById("valores").innerHTML = "Ingrese valores válidos";
	}
}

function calcularACU()
{
	element = document.getElementById("cuadrado");
	if(!isNaN(element.value)){
	(element.value.length > 0) ? document.getElementById("valores").innerHTML = "El resultado es "+ Math.pow(element.value, 2) +" " : document.getElementById("valores").innerHTML = "Ingrese un valor válido";
	} else {
		document.getElementById("valores").innerHTML = "Ingrese valores numéricos";
	}
}

function validFields(value){
	
	(value.value.length > 3) ? retur = true : retur = false;
	return retur;
}

function vowels()
{
	var vocalsExistents = 0;
    element = document.getElementById("vocals");
    element = element.value.toLowerCase();
    for (i = 0; i < element.length; i++){
    	if (element.charAt(i) == "a" || element.charAt(i) == "e" || element.charAt(i) == "i" || element.charAt(i) == "o" || element.charAt(i) == "u"){
    		vocalsExistents++;
    	}
    }
  document.getElementById("valores").innerHTML = "La cantidad de vocales en la palabra <b>" + element +"</b> son: "+ vocalsExistents +"";
}
 
function existCons()
{
	var consonantExistents = 0;
	element = document.getElementById("consonants");
    element = element.value.toLowerCase();
	for (i = 0; i < element.length; i++)
	{
		if (element.charCodeAt(i) > 96 && element.charCodeAt(i) < 123)
		{
			if (element.charCodeAt(i) == 97 || element.charCodeAt(i) == 101 || element.charCodeAt(i) == 105 || element.charCodeAt(i) == 111 || element.charCodeAt(i) == 117)
			{
			} else {
				consonantExistents++;
			}
		}
	}
  document.getElementById("valores").innerHTML = "La cantidad de consonantes en la palabra <b>" + element +"</b> son: "+ consonantExistents +"";
}

function capicua()
{
	var capicua = document.getElementById("capicuaN");
	var counter = 0;
	var valid = 0;
	var max = capicua.value.length - 1;
	var active = 0;
	if (!isNaN(capicua.value)){
		if(capicua.value.length < 5){
			document.getElementById("valores").innerHTML = "Debe ingresar un número con mas de 4 dígitos";
		} else {
			 while (capicua.value.length > counter) {
			 	if(capicua.value[counter] == capicua.value[max]){
					counter++;
					max--;
					active++;
			 	} else {
					document.getElementById("valores").innerHTML = "No es un número Capicua";
			 		break;
			 	}
			 	if (active == capicua.value.length){
					document.getElementById("valores").innerHTML = "Es un número Capicua";
			 	}
		 	}
		}
	} else {
			document.getElementById("valores").innerHTML = "Debe ingresar un número";
	}
}
