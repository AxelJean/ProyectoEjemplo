
/*ACENTO GRAVE = ALT + 96 : ` */


/*------------------Header-Nav---------------------------*/


var uno = document.getElementById("navegacion1");


var rimac = "RIMAC";
var nuestro = "Nuestro Seguros";
var prom = "Promociones";
var como = "Cómo usar mi Seguro?";

 uno.innerHTML = `
              <a id="rimac" href="#">${rimac}</a>
              <a id="nuestro" href="#">${nuestro}</a>
              <a id="promociones"  href="#">${prom}</a>
              <a id="seguro"  href="#">${como}</a>
            `;
			
			
			
var dosx = document.getElementById("numero"); 
var numerox = "01411 - 1111";
dosx.innerHTML = `${numerox}`;	


var milupa = document.getElementById("lupa");
milupa.innerHTML = '<img src="images/lupa.png"/>';


/*----------------------MAIN - Segunda Seccion-----------------------------------*/  

  var tresx = document.getElementById("cuida");
  var cuidax = "Cuida lo que más importa";
  tresx.innerHTML = `${cuidax}`;
  
  
  
  var cuatrox = document.getElementById("precios");
  var preciosx = "Precios, coberturas y beneficios a tu medida";
  cuatrox.innerHTML = `${preciosx}`;
  
  
  
  var cincox = document.getElementById("arribax");
  var estamos = "Estamos para ayudarte en";
  var todo = "todo momento.";
  var encuentra = "Encuentra respuesta a tus preguntas";
  cincox.innerHTML = `
              <p id="estamosx"  style="font-size:30px; color:#999; padding-left:21%;">${estamos}</p><br>
              <p id="todox"  style="font-size:30px; color:#999; padding-left:3%;">${todo}</p><br>
              <p id="encuentrax" style="font-size:20px; color:#999;padding-left:18%;">${encuentra}</p>
  			`;
			
			/*estamosx*/
			function EstamosPara(est){
				var est = document.getElementById("estamosx");
				est.classList.add('colorxy');
			}
			var estpara = document.addEventListener("click", EstamosPara);
			
			function OriginalEstamosPara(ofi){
				var ofi = document.getElementById("estamosx");
				ofi.classList.remove('colorxy');
			}	
			var OrigEst = document.addEventListener("mouseout",OriginalEstamosPara);
			
			
			/*todox*/
			function TodoMomento(tod){
				var tod = document.getElementById("todox");
				tod.classList.add('colorxy1');
			}
			var todmom = document.addEventListener("click", TodoMomento);	
			
			function OriginalTodoMomento(ofi1){
				var ofi1 = document.getElementById("todox");
				ofi1.classList.remove('colorxy1');
			}
			var OrigTodo = document.addEventListener("mouseout", OriginalTodoMomento);
			
			
			/*encuentrax */
			function EncuentraRespuesta(enc){
				var enc = document.getElementById("encuentrax");
				enc.classList.add('colorxy2');
			}	
			var encres = document.addEventListener("click", EncuentraRespuesta);

			function OriginalEncuentraRespuesta(ofi2){
				var ofi2 = document.getElementById("encuentrax");
				ofi2.classList.remove('colorxy2');e
			}
			var OrigEncuentra = document.addEventListener("mouseout", OriginalEncuentraRespuesta);
			
			
			
  var seisx = document.getElementById("abajox");
  var necesitox = "Necesito ir al médico";
  var tuvex = "Tuve un choque";
  var robaronx = "Robaron mi carro";
  var cambiarx = "Cambiar de beneficiarios";
  var consultax = "Ver otras consultas";
  
  seisx.innerHTML = `
<a style="font-size:20px; text-decoration:none; color:#141414;" href="#"><p>${necesitox}</p></a><br>

<a style="font-size:20px; text-decoration:none; color:#141414;" href="#"><p style="padding-right: 7%;">${tuvex}</p></a><br>

<a style="font-size:20px; text-decoration:none; color:#141414;" href="#"><p style="padding-right:4%;">${robaronx}</p></a><br>

<a style="font-size:20px; text-decoration:none; color:#141414;" href="#"><p style="padding-left: 4%;">${cambiarx}</p></a><br>  

<a style="font-size:20px; text-decoration:none; color:#1515FF;" href="#"><p style="padding-right:3%">${consultax}</p></a><br>
          `; 
		  
		  
  var sietex = document.getElementById("x10");	
  var promoc = "Promociones RIMAC";	
  var cuid = "Cuidamos de ti y también de tu bolsillo";
  
  sietex.innerHTML = `
            <p style="font-size:50px; color:#999;">${promoc}</p><br>
            <p style="font-size:20px; color:#999;">${cuid}</p>
  					 `;  			
   
   
   
   var ochox = document.getElementById("x11");
   
   ochox.innerHTML = `
          <div style="float:left; width:30%; padding-left:2%;"><img src="images/bannerVertical1.jpg" style="width:100%; height:500px;"/></div>
       <div style="float:left; width:30%; padding-left:3%; padding-right:3%;"><img src="images/bannerVertical2.jpg" style="width:100%; height:500px;"/></div>
       <div style="float:left; width:30%;"><img src="images/bannerVertical5.jpg" style="width:100%; height:500px;"/></div>
       <div style="clear:both;"></div>
                     `;
   
   
   
   var nuevex = document.getElementById("x12");
   var pens = "Pensamos en tu bienestar";
   var sigue = "Sigue nuestro Blog y vive  saludable";
   
   nuevex.innerHTML = `
            <p style="font-size:40px; color:#999;">${pens}</p><br>
            <p style="font-size:20px; color:#000;">${sigue}</p>
   					  `;
					  
					  
	var diezx = document.getElementById("x13");
	var evitax = "Evita el azúcar y mejora la calidad de tu alimentación";
	var siex = "7 hábitos que mantendrán tu corazón saludable";
	var cuax = "4 tips para ahorrar dinero de forma fácil y segura";
	var sigx = "Sigue estos consejos para evitar la diabetes";
	var conocex = "Conoce más";
					  
    diezx.innerHTML = `
	
	<div style="float:left; width:20%; text-align:center; height:40px; padding-left:8%;">
           <img src="images/gaseosas.jpg" style="height:250px; width:100%;" /><p id="evitah" style="text-align:center;">${evitax}</p><a href="#" style="text-decoration:none;"><p id="conoceh1" style="text-align:left; padding-left:4%; padding-top:8%;">${conocex}</p></a></div>
           
           
           <div style="float:left; width:20%; text-align:center; padding-left:2%;">
           <img src="images/paroCardiaco.jpg" style="height:250px; width:100%;"/><p id="siexh" style="text-align:center;">${siex}</p><a href="#" style="text-decoration:none;"><p id="conoceh2" style="text-align:left; padding-left:4%; padding-top:8%;">${conocex}</p></a></div>
           
           
           <div style="float:left; width:20%; text-align:center; padding-left:2%;">
           <img src="images/alcancia.jpg" style="height:250px; width:100%;" /><p id="cuaxh" style="text-align:center;">${cuax}</p><a href="#" style="text-decoration:none;"><p id="conoceh3" style="text-align:left; padding-left:4%; padding-top:8%;">${conocex}</p></a></div>
           
           
           <div style="float:left; width:20%; text-align:center; padding-left:2%;">
           <img src="images/diabetes.jpg" style="height:250px; width:100%;" /><p id="sigxh" style="text-align:center;">${sigx}</p><a href="#" style="text-decoration:none;"><p id="conoceh4" style="text-align:left; padding-left:4%; padding-top:15%;">${conocex}</p></a></div>                 
           <div style="clear:both;"></div>
					  `;
					  
/*conoceh1*/					  
var conoce1 = document.getElementById("conoceh1");	
conoce1.addEventListener("mouseover", Conoce1);
conoce1.addEventListener("mouseout", Conoce1w);

function Conoce1(){
	document.getElementById("evitah").style.backgroundColor = "red";
	conoce1.classList.add("enlace1");
}	
function Conoce1w(){
	document.getElementById("evitah").style.backgroundColor = "white";
	conoce1.classList.remove("enlace1");
}	


/*conoceh2*/					  
var conoce2 = document.getElementById("conoceh2");	
conoce2.addEventListener("mouseover", Conoce2);
conoce2.addEventListener("mouseout", Conoce2w);

function Conoce2(){
	document.getElementById("siexh").style.backgroundColor = "green";
	conoce2.classList.add("enlace2");
}	
function Conoce2w(){
	document.getElementById("siexh").style.backgroundColor = "white";
	conoce2.classList.remove("enlace2");
}


/*conoceh3*/					  
var conoce3 = document.getElementById("conoceh3");	
conoce3.addEventListener("mouseover", Conoce3);
conoce3.addEventListener("mouseout", Conoce3w);

function Conoce3(){
	document.getElementById("cuaxh").style.backgroundColor = "orange";
	conoce3.classList.add("enlace3");
}	
function Conoce3w(){
	document.getElementById("cuaxh").style.backgroundColor = "white";
	conoce3.classList.remove("enlace3");
}
				  

/*conoceh4*/					  
var conoce4 = document.getElementById("conoceh4");	
conoce4.addEventListener("mouseover", Conoce4);
conoce4.addEventListener("mouseout", Conoce4w);

function Conoce4(){
	document.getElementById("sigxh").style.backgroundColor = "#95a1e6";
	conoce4.classList.add("enlace4");
}	
function Conoce4w(){
	document.getElementById("sigxh").style.backgroundColor = "white";
	conoce4.classList.remove("enlace4");
}					  
					  
  
  
  /*-------------------Ejercicios-------------------------*/
 // Base de datos
 //conexion a bd
 //llmar los datos con ajax
 //ajax convierte en forma de forma de un array
 
  
  var nombre = ["axel", "juan", "beto", "ramiro", "frank"];
 
 var losnombre="";
 nombre.forEach( 
	 function(x){ 
		 losnombre += `<div class="miNombre">` + x + `</div>`;
	 } 
 )
 
 /* PONE EL NOMBRE DE JUAN EN NEGRITA
 nombre.forEach( 
	 function(x){
		  if (x === 'juan')
			 {
			 losnombre += `<div class="miNombreNegro">` + x + `</div>`;
			  }
		 losnombre += `<div class="miNombre">` + x + `</div>`;
	 } 
 )*/
 
 var nombre1 = document.getElementById("NombreForJS").innerHTML=losnombre;
 
 

/*Ejm2*/
var planetas = ["Marte", "Jupiter", "Mercurio", "Neptuno", "Saturno", "Venus", "Urano", "Tierra"];

var losplanetas="";
planetas.forEach(function(e1){
	
	losplanetas += '<div class="miNombre2">' + e1 + '</div>' + "<br>";
});

var nombre2 = document.getElementById("ejm2").innerHTML = losplanetas;

 
  
/*Ejm3*/
var elementos = ["sodio", 20, "potasio", 30, "magnesio", 80, "nitrógeno", 90];

var loselementos = "";
elementos.forEach(function(e2){
	
	loselementos += '<div class="miNombre3">' + e2 + '</div>' + "<br>";
});

var nombre3 = document.getElementById("ejm3").innerHTML = loselementos;



/*Ejm4*/
var redes = ["Facebook", "Twiter", "Instagram", "VK", "Yahoo"];

var lasredes = "";
redes.forEach(function(e3){
	lasredes += '<div class="miNombre4">' + e3 + '</div>' + "<br>";
});

var nombre4 = document.getElementById("ejm4").innerHTML = lasredes;



/*Ejm5*/
var periodicos = ["El Comercio", "RPP", "El Peruano", "Peru21", "La Republica"];

var losperiodicos="";
periodicos.forEach(function(e4){
	
	if(e4 == "RPP"){
		losperiodicos += '<div class="miNombreAZUL">' + e4 + '</div>';
	}
	
	losperiodicos += '<div class="miNombre5">' + e4 + '</div>' + "<br>";
});

var nombre5 = document.getElementById("ejm5").innerHTML = losperiodicos;



/*Ejm6*/
var series = ["Chavo", "Chapulin", "mil oficios"];

var laseries="";
series.forEach(function(e5){
	
	if(e5 == "Chapulin"){
		laseries += '<div class=miNombreVERDE>' + e5 + '</div>';
	}
	
	laseries += '<div class="miNombre6">' + e5 + '</div>' + "<br>";
});

var nombre6 = document.getElementById("ejm6").innerHTML = laseries;


/*Ejm7*/
var deportes = ["basquet", "futbol", "voley", "boxeo", "atletismo", "Natación", "surf"];

var losdeportes="";
deportes.forEach(function(e6){
	
	if(e6 == "futbol"){
		losdeportes += '<div class="miNombreNaranja">' + e6 + '</div>';
	
	}else if(e6 == "atletismo"){
		losdeportes += '<div class="miNombreRojo">' + e6 + '</div>' 
	}
			
	
	losdeportes += '<div class="miNombre7">' + e6 + '</div>' + "<br>"; 
});

var  nombre7 = document.getElementById("ejm7").innerHTML = losdeportes;
/*-----------------------------------------------------------------------------------------------------------------*/


/*Eventos JS*/

//Ejm1
function HacerClick(){
	alert("Haz hecho ClickAAAA");
}
var texto = document.getElementById("js1");
texto.addEventListener("click", HacerClick);


//Ejm2
function HacerClick2(){
	alert("Haz hecho DobleClick");
}
var texto2 = document.getElementById("js2");
texto2.addEventListener("dblclick", HacerClick2);


//Ejm3
function funcion3(){
	alert("Se ejecuto la function 3");
}	
var texto3 = document.getElementById("js3");
texto3.addEventListener("mousedown", funcion3);


//Ejm4
function funcion4(){
	alert("Se ejecuto la function 4");
}
var texto4 = document.getElementById("js4");
texto4.addEventListener("mouseenter", funcion4);


//Ejm5
function funcion5(){
	alert("Se ejecuto la function 5");
}
var texto5 = document.getElementById("js5");
texto5.addEventListener("mouseleave", funcion5);


//Ejm6
function funcion6(){
	alert("Se ejecuto la function 6");
}
var texto6 = document.getElementById("js6");
texto6.addEventListener("mousemove", funcion6);


//Ejm7
function funcion7(){
	alert("Se ejecuto la function 7");
}
var texto7 = document.getElementById("js7");
texto7.addEventListener("mouseover", funcion7);


//Ejm8
function funcion8(){
	alert("Se ejecuto la function 8");
}
var texto8 = document.getElementById("js8");
texto8.addEventListener("mouseout", funcion8);	
/*-----------------------------------------------------------------------------------------------------------------*/


/*Eventos JS Relacionados a MI PAG WEB*/

//Ejm1
function Aparecer1(elemento){
	var elemento = document.getElementById("a1");
	elemento.style.display = "block";
}
var xa = document.getElementById("rimac");
xa.addEventListener("mouseover", Aparecer1);

function Desaparecer1(elementox){
	var elementox = document.getElementById("a1");
	elementox.style.display = "none";
}
var xb = document.getElementById("rimac");
xb.addEventListener("mouseout", Desaparecer1);



//Ejm2
function Aparecer2(elemento2){
	var elemento2 = document.getElementById("a2");
	elemento2.style.display = "block";
}
var xc = document.getElementById("nuestro");
xc.addEventListener("mouseover", Aparecer2);

function Desaparecer2(elementox2){
	var elementox2 = document.getElementById("a2");
	elementox2.style.display = "none";
}
var xd = document.getElementById("nuestro");	
xd.addEventListener("mouseout", Desaparecer2);



//Ejm3
function Aparecer3(elemento3){
	var elemento3 = document.getElementById("a3");
	elemento3.style.display = "block";
}
var xe = document.getElementById("promociones");
xe.addEventListener("mouseover", Aparecer3);

function Desaparecer3(elementox3){
	var elementox3 = document.getElementById("a3");
	elementox3.style.display = "none";
}
var xf = document.getElementById("promociones");	
xf.addEventListener("mouseout", Desaparecer3);



//Ejm4
function Aparecer4(elemento4){
	var elemento4 = document.getElementById("a4");
	elemento4.style.display = "block";
}	
var xg = document.getElementById("seguro");
xg.addEventListener("mouseover", Aparecer4);

function Desaparecer4(elementox4){
	var elementox4 = document.getElementById("a4");
	elementox4.style.display = "none";
}
var xh = document.getElementById("seguro");
xh.addEventListener("mouseout", Desaparecer4);


/*-----------------------CUIDA LO Q MAS IMPORTA---------------------------------------------*/

//Ejm5
function Ocultar1(imgx1){
	var imgx1 = document.getElementById("curax");
	imgx1.style.display = "none";
}
var imgy1 = document.getElementById("saludx");
imgy1.addEventListener("click", Ocultar1);


//Ejm6
function Ocultar2(imgx2){
	var imgx2 = document.getElementById("autox");
	imgx2.style.display = "none";
}
var imgy2 = document.getElementById("vehix");
imgy2.addEventListener("click", Ocultar2);


//Ejm7
function Ocultar3(imgx3){
	
	var imgx3 = document.getElementById("androidx");
	imgx3.style.display = "none";
}	
var imgy3 = document.getElementById("pago");
imgy3.addEventListener("click", Ocultar3);


//Ejm8
function Ocultar4(imgx4){
	
	var imgx4 = document.getElementById("iphonex");
	imgx4.style.display = "none";
}	
var imgy4 = document.getElementById("soat");
imgy4.addEventListener("click", Ocultar4);


//Ejm9
function Ocultar5(imgx5){
	
	var imgx5 = document.getElementById("vidax");
	imgx5.style.display = "none";
}	
var imgy5 = document.getElementById("vida");
imgy5.addEventListener("mouseover", Ocultar5);


//Ejm10
function Ocultar6(imgx6){
	
	var imgx6 = document.getElementById("sombrerox");
	imgx6.style.display = "none";
}
var imgy6 = document.getElementById("sctr");	
imgy6.addEventListener("mouseover", Ocultar6);


//Ejm11
function Ocultar7(imgx7){
	
	var imgx7 = document.getElementById("camisax");
	imgx7.style.display = "none";
}	
var imgy7 = document.getElementById("oncologico");
imgy7.addEventListener("mouseover", Ocultar7);


//Ejm12
function Ocultar8(imgx8){
	
	var imgx8 = document.getElementById("avionx");
	imgx8.style.display = "none";
}
var imgy8 = document.getElementById("viaje");
imgy8.addEventListener("mouseover", Ocultar8);



/*----------------------- Ejercicios usando "class" ---------------------------------------------*/

/*Ejm1
function CambiarColor1(elem1){
	
	var elem1 = document.getElementById("ejmx2");
	elem1.className = "boton4";
}
var tres = document.getElementById("ejmx2");
tres.addEventListener("mouseover", CambiarColor1);

function DevuelveColor1(elem1){
	
	var elem1 = document.getElementById("ejmx2"); 
	elem1.className = "boton3";
}
var cuatro = document.getElementById("ejmx2");
cuatro.addEventListener("mouseout", DevuelveColor1);
*/


/*Ejm1 con clase y objeto*/
class Product {
    
	Imprimir() {
        const elemento = document.getElementById('product-list');
       
        elemento.innerHTML = `
            <div class="card text-center mb-4">
                mi mensaje desde JS
            </div>
        `;   
    }
	
	Salir() {
        const elemento = document.getElementById('product-list');
       
        elemento.innerHTML = `
            <div class="card text-center mb-4">
                SALIO DE MI JS
            </div>
        `;  
    }	
}

document.getElementById('ejmx2').addEventListener('mouseover', function (e) {
	
	var elem1 = document.getElementById("ejmx2");
	elem1.className = "boton4";
	
	  const pro = new Product();
	  pro.Imprimir();
});
document.getElementById('ejmx2').addEventListener('mouseout', function (e) {
	
	var elem1 = document.getElementById("ejmx2"); 
	elem1.className = "boton3";  
		
	const pro1 = new Product();
	pro1.Salir();
});


/*Ejm2
function CambiarColor2(elem2){
	
	var elem2 = document.getElementById("ejmx3");
	elem2.className = "boton6";
}
var cinco = document.getElementById("ejmx3"); 	
cinco.addEventListener("click", CambiarColor2);

function DevuelveColor2(elem2){
	
	var elem2 = document.getElementById("ejmx3");
	elem2.className = "boton5";
}
var seis = document.getElementById("ejmx3");
seis.addEventListener("dblclick", DevuelveColor2);*/


/*Ejm2 con clase y objeto*/
class Todo{
	
	Click(){
		const elemento1 = document.getElementById("w1");
		elemento1.innerHTML = `
			<div class="card text-center mb-4">
                Aprete Click!
            </div>`;
	}
	
	DobleClick(){
		const elemento1 = document.getElementById("w1");
		elemento1.innerHTML = `
			<div class="card text-center mb-4">
                Aprete DobleClick!
            </div>`;
	}
}

document.getElementById("ejmx3").addEventListener("click", function(e){
	
	var elem2 = document.getElementById("ejmx3");
	elem2.className = "boton6";
	
	const b = new Todo();
	b.Click();
});
document.getElementById("ejmx3").addEventListener("dblclick", function(e){
	var elem2 = document.getElementById("ejmx3");
	elem2.className = "boton5";
	
	const b1 = new Todo();
	b1.DobleClick();
});


/*Ejm3
function CambiarColor3(elem3){
	
	var elem3 = document.getElementById("ejmx4");
	elem3.className = "boton8";
}	
var siete = document.getElementById("ejmx4");
siete.addEventListener("mouseover", CambiarColor3);

function DevuelveColor3(elem3){
	
	var elem3 = document.getElementById("ejmx4");
	elem3.className = "boton7";
}
var ocho = document.getElementById("ejmx4");
ocho.addEventListener("mouseout", DevuelveColor3);*/


/*Ejm3 con clase y objeto*/
class Todo1{
	
	Pasar1(){
		const elemento2 = document.getElementById("w2");
		elemento2.innerHTML = `
			<div class="card text-center mb-4">
                Pase Por Encima!
            </div>`;
	}
	
	Salir1(){
		const elemento2 = document.getElementById("w2");
		elemento2.innerHTML = `
			<div class="card text-center mb-4">
                Salir De Encima!
            </div>`;
	}	
}	

document.getElementById("ejmx4").addEventListener("mouseover", function(e){
	var elem3 = document.getElementById("ejmx4");
	elem3.className = "boton8";
	
	const c = new Todo1();
	c.Pasar1();
});
document.getElementById("ejmx4").addEventListener("mouseout", function(e){
	var elem3 = document.getElementById("ejmx4");
	elem3.className = "boton7";
	
	const c1 = new Todo1();
	c1.Salir1();
});


/*Ejm4
function CambiarColor4(elem4){
	
	var elem4 = document.getElementById("ejmx5");
	elem4.className = "boton10";
}	
var nueve = document.getElementById("ejmx5");	
nueve.addEventListener("click", CambiarColor4);

function DevuelveColor4(elem4){
	
	var elem4 = document.getElementById("ejmx5");
	elem4.className = "boton9";
}
var diez = document.getElementById("ejmx5");
diez.addEventListener("dblclick", DevuelveColor4);
*/


/*Ejm4 con clase y objeto*/
class Todo2{
	
	Click1(){
		const elemento3 = document.getElementById("w3");
		elemento3.innerHTML = `
			<h1>Aprete Click1!</h1>`;
	}
	
	DobleClick1(){
		const elemento3 = document.getElementById("w3");
		elemento3.innerHTML = `
			<h1>Aprete DobleClick1!</h1>`;
	}		
}

document.getElementById("ejmx5").addEventListener("click", function(e){
	
	var elem4 = document.getElementById("ejmx5");
	elem4.className = "boton10";
	
	const d = new Todo2();
	d.Click1();
});
document.getElementById("ejmx5").addEventListener("dblclick", function(e){
	
	var elem4 = document.getElementById("ejmx5");
	elem4.className = "boton9";
	
	const d1 = new Todo2();
	d1.DobleClick1();
});


/*----------------------- Ejercicios Creación y eliminación de nodos ---------------------------------------------*/

/*Ejm1 - Creación*/
var elemento = document.createElement("p");

var contenido = document.createTextNode("Primera Etiqueta Creado!");

elemento.appendChild(contenido);

document.body.appendChild(elemento);


/*Ejm2*/
var elemento2 = document.createElement("div");

var contenido2 = document.createTextNode("Segunda Etiqueta Creado!");

elemento2.appendChild(contenido2);

document.body.appendChild(elemento2);


/*Ejm3*/
var elemento3 = document.createElement("h2");

var contenido3 = document.createTextNode("Tercera Etiqueta Creado!");

elemento3.appendChild(contenido3);

document.body.appendChild(elemento3);


/*Ejm4*/
var elemento4 = document.createElement("h3");

var contenido4 = document.createTextNode("Cuarta Etiqueta Creado!");

elemento4.appendChild(contenido4);

document.body.appendChild(elemento4);


/*Ejm5*/
var elemento5 = document.createElement("h4");

var contenido5 = document.createTextNode("Quinta Etiqueta Creado!");

elemento5.appendChild(contenido5);

document.body.appendChild(elemento5);


/*Eliminación*/

/*Ejm1*/
var programacion1 = document.getElementById("prog1");
programacion1.parentNode.removeChild(programacion1);


/*Ejm2*/
var programacion2 = document.getElementById("prog2");
programacion2.parentNode.removeChild(programacion2);


/*Ejm3*/
var programacion3 = document.getElementById("prog3");
programacion3.parentNode.removeChild(programacion3);


/*Ejm4*/
var programacion4 = document.getElementById("prog4");
programacion4.parentNode.removeChild(programacion4);


/*Ejm5*/
var programacion5 = document.getElementById("prog5");
programacion5.parentNode.removeChild(programacion5);



/*----------------------- EVENTOS JS CON EL BOTON ---------------------------------------------*/

/*Ejm1*/
var boton1 = document.getElementById("btn1");
boton1.addEventListener("mouseover", EjemploBoton1);
boton1.addEventListener("mouseout", EjemploBoton1x);

function EjemploBoton1(){
	document.getElementById("texto1").innerHTML += "Estado Activo.<br>";
	boton1.classList.add('colorBoton1');
}
function EjemploBoton1x(){
	document.getElementById("texto1").innerHTML += "Estado Inactivo.<br>";
	boton1.classList.remove('colorBoton1');
}	


/*Ejm2*/
var boton2 = document.getElementById("btn2");
boton2.addEventListener("mouseover", EjemploBoton2);
boton2.addEventListener("mouseout", EjemploBoton2x);

function EjemploBoton2(){
	document.getElementById("texto2").innerHTML += "Estado Activo2.<br>";
	boton2.classList.add('colorBoton2');
}
function EjemploBoton2x(){
	document.getElementById("texto2").innerHTML += "Estado Inactivo2.<br>";
	boton2.classList.remove('colorBoton2');
}


/*Ejm3*/	
var boton3 = document.getElementById("btn3");
boton3.addEventListener("mouseover", EjemploBoton3);
boton3.addEventListener("mouseout", EjemploBoton3x);

function EjemploBoton3(){
	document.getElementById("texto3").innerHTML += "Estado Activo3.<br>";
	boton3.classList.add('colorBoton3');
}	
function EjemploBoton3x(){
	document.getElementById("texto3").innerHTML += "Estado Inactivo3.<br>";
	boton3.classList.add('colorBoton3');
}


/*Ejm4*/
var boton4 = document.getElementById("btn4");
boton4.addEventListener("mouseover", EjemploBoton4);
boton4.addEventListener("mouseout", EjemploBoton4x);

function EjemploBoton4(){
	document.getElementById("texto4").innerHTML += "Estado Activo4.<br>";
	boton4.classList.add('colorBoton4');
}	
function EjemploBoton4x(){	
	boton4.classList.remove('colorBoton4');
	document.getElementById("texto4").innerHTML += "Estado Inactivo4.<br>";
}	


/*Ejm5*/
var boton5 = document.getElementById("btn5");
boton5.addEventListener("mouseover", EjemploBoton5);
boton5.addEventListener("mouseout", EjemploBoton5x);

function EjemploBoton5(){
	document.getElementById("texto5").innerHTML += "Estado Activo5.<br>";
	boton5.classList.add('colorBoton5');
}	
function EjemploBoton5x(){
	document.getElementById("texto5").innerHTML += "Estado Inactivo5.<br>";
	boton5.classList.remove('colorBoton5');
}		


/*----------------------- EJERCICIOS CON BOTONES Y TEXTO ---------------------------------------------*/

/*boton1*/
var botonz1 = document.getElementById("b1");
botonz1.addEventListener("mouseover", vamos1);
botonz1.addEventListener("mouseout", vamos1z);

function vamos1(){
	document.getElementById("parrafox").style.backgroundColor = "yellow";
	botonz1.classList.add('Boton1b1');
}
function vamos1z(){
	document.getElementById("parrafox").style.backgroundColor = "white";
	botonz1.classList.remove('Boton1b1');
}		


/*boton2*/
var botonz2 = document.getElementById("b2");
botonz2.addEventListener("mouseover", vamos2);
botonz2.addEventListener("mouseout", vamos2z);

function vamos2(){
	document.getElementById("parrafox").style.backgroundColor = "pink";
	botonz2.classList.add("Boton2b2");
}
function vamos2z(){
	document.getElementById("parrafox").style.backgroundColor = "white";
	botonz2.classList.remove('Boton2b2');
}


/*boton3*/
var botonz3 = document.getElementById("b3");
botonz3.addEventListener("mouseover", vamos3);
botonz3.addEventListener("mouseout", vamos3z);


function vamos3(){
	document.getElementById("parrafox").style.backgroundColor = "orange";
	botonz3.classList.add("Boton3b3");
}
function vamos3z(){
	document.getElementById("parrafox").style.backgroundColor = "white";
	botonz3.classList.remove('Boton3b3');
}

/*----------------------------------------*/






<!--NAVEGACION PRINCIPAL Desplegable con JS-->
function ver(n) {
         document.getElementById("submenuq"+n).style.display="block"
         }
function ocultar(n) {
         document.getElementById("submenuq"+n).style.display="none"
         }
	