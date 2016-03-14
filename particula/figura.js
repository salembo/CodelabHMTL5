//inicializando el canvas

var canvas=document.getElementById('micanvas');
var ctx=canvas.getContext('2d');

//metodo que devuelve un objeto con los
//metodos para dibujar y colorear en un canvas

//las dimensiones del canvas

var W=500;
var H=500;
var particulas;

 //funcion para crear cada particulas
 function crear_particula(){
 	//Ubicamos a nuestra particula en el
	//centro de nuestro canvas
 	this.x=W/2;
 	this.y=H/2;
	
  	//Definimos un radio de 90
 	this.radius=90;
 }
 

particulas=new crear_particula();

 //Dibujando las particulas
 function dibujar(){
 
 	//definiendo el fondo negro 
 	
 	ctx.fillStyle="rgba(0,0,0,0.3)"
 	ctx.fillRect(0,0,W,H);
	
	//Indicamos como dibujar nuestra nueva imagen
	ctx.globalCompositeOperation="lighter";
 	var p=particulas; 
 	ctx.beginPath();

 	//dibujando la particula
 	ctx.fillStyle='white';
 	ctx.arc(p.x,p.y,p.radius,Math.PI*2,false);
 	ctx.fill();

 
  	 }

  	 setInterval(dibujar,33);