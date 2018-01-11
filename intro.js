
// var elemento = document.createElement("li"),
// contenido = document.createTextNode("nuevo fila");

// elemento.appendChild(contenido);

// document.body.appendChild(elemento);
// var padre = document.getElementsByTagName("li")[2].parentNode,
// referencia= document.getElementsByTagName("li")[3];
// padre.replaceChild(elemento,referencia);


// var elemento = document.createElement("div");
// var padre = document.getElementById("contenedor");
// var referencia= document.getElementsByTagName("div")[1]
// elemento.setAttribute("class","rojo");
// document.body.appendChild(elemento);
// padre.insertBefore(elemento,referencia);

 // var xd =document.getElementsByTagName("div")[0]
// xd.setAttribute("class","azul");

// var we = document.getElementsByTagName("div")[2]
// we.className("azul");



/* function zoom(){
	var elemento = document.getElementById("imgs");
	
	if	(elemento.className=="thumbs"){
	elemento.className="thumbs grande";
	}
	else 
	{
		elemento.className="thumbs";
	}
	} */
(function(){
	var actualizahora =function(){
	var fecha= new Date,
	horas=fecha.getHours(),
	ampm,
	minutos=fecha.getMinutes(),
	segundos=fecha.getSeconds(),
	diasemana=fecha.getDay(),
	dia=fecha.getDate(),
	mes=fecha.getMonth(),
	year=fecha.getFullYear();
	
	
	
	var phoras=document.getElementById("horas"),
	pAmPm=document.getElementById("ampm"),
	pmin=document.getElementById("minutos"),
	psec=document.getElementById("segundos"),
	pdiasem=document.getElementById("diasemana"),
	pdia=document.getElementById("dia"),
	pmes=document.getElementById("mes"),
	pyear=document.getElementById("year");
	
	var semana=['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
	pdiasem.textContent=semana[diasemana];
	pdia.textContent=dia;
	var meses=['Enero ','Febrero ','Marzo ','Abril ','Mayo ','Junio ','Julio ','Agosto ','Septiembre ','Octubre ','Noviembre ','Diciembre ']
	pmes.textContent=meses[mes];
	pyear.textContent=year;
	                       
	if (horas >= 12){
		horas=horas -12 ;
		ampm="PM";
	}else{
		ampm="AM";
	}
	
	if  (horas==0){
		horas=12;
	}
	
	if (minutos <10){
	minutos ="0"+minutos;
	
	}
	if (segundos<10){
		segundos="0"+segundos;
	}
	if(horas < 10){
		horas="0"+horas;
	}
	phoras.textContent=horas;
	pAmPm.textContent=ampm;
	
	pmin.textContent=minutos;
	psec.textContent=segundos;
	};

	
	actualizahora();

	setInterval(actualizahora,1000);


	/* var saludo = function(e){
	e.preventDefault();
	};
	  
	var btn	= document.getElementById('boton');
	btn.addEventListener('click',saludo);
 */
	
}())


























// var nombre="carlos";
// nombre.substring
// var suma = function(x,y){
	// var num1=parseInt(document.getElementById("numero1").value);
		// var num2=parseInt(document.getElementById("numero2").value);
		// var result= num1+num2;
		// return result;
//}
// function suma	(  n1,  n2){
	
	// var as=n1;
	// var sd =n2;
	// return as+sd;

// }
// x=prompt("ingrese datos");
// document.write(suma(1,5));

