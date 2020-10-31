function convertir(){
	$.getJSON("https://api.exchangeratesapi.io/latest?base="+moneda_variable(),function(data){
		console.log(data);
		var entrada=document.getElementById("entrada").value;
		var Divisas1=document.getElementById("divisas1").value;
		var Divisas2=document.getElementById("divisas2").value;
		var resultado=entrada * data["rates"][Divisas2];
		document.getElementById("salida").value=Math.round(resultado * 100) / 100;
		//console.log(resultado);
		document.getElementById("image1").src = "icons/"+Divisas1+".png"; 
		document.getElementById("image2").src = "icons/"+Divisas2+".png";
	});
}

function moneda_variable(){
	var divisa1 = document.getElementById("divisas1").value;
	//console.log(divisa1);
	return divisa1;
}
function cambio(){
	var extractor = document.getElementById("divisas1").value;
	var extractor2 = document.getElementById("divisas2").value;
	var input = document.getElementById("entrada").value;
	var inputdos = document.getElementById("salida").value;
	document.getElementById("divisas1").value = extractor2;
	document.getElementById("divisas2").value = extractor;
	document.getElementById("entrada").value = inputdos;
	document.getElementById("salida").value = input
	document.getElementById("image1").src = "icons/"+extractor2+".png"; 
	document.getElementById("image2").src = "icons/"+extractor+".png";
/*


	var contenedor = extractor2;
	extractor2 = extractor;
	document.getElementById("divisas1").value = document.getElementById("divisas1").value + contenedor;
	document.getElementById("divisas2").value=extractor2;
	console.log(extractor2);
	console.log(contenedor);*/
}