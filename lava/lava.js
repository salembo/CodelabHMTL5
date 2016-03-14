//inicializando el canvas

var canvas=document.getElementById('micanvas');
var ctx=canvas.getContext('2d');//metodo que devuelve un objeto con los
//metodos para dibujar y colorear en un canvas

//las dimensiones del canvas
var W=500;
var H=500;

//Creamos las particulas, en este caso 50
var particulas=[];
 for(var i=0;i<20;i++){
 	particulas.push(new crear_particula());
 }

 //funcion para crear cada particulas
 function crear_particula(){
 	//una posicion randon en el canvas
 	this.x=Math.random()*W;
 	this.y=Math.random()*H;

 	//velocidad random para cada particula
 	this.vx=Math.random()*8;
 	this.vy=Math.random()*8-2;

 	//Colores 
 	var r=255;
 	var g=102;
 	var b=0;
 	this.color="rgba("+r+","+g+","+b+",0.5)";
	
	this.centro="rgba(234,218,181,0.2)";
  	this.radius=100;
 }

 var x=100; var y=100;

 //Dibujando las particulas
 function dibujar(){
 		
		ctx.globalCompositeOperation="source-over";

 	//definiendo el fondo negro 
 	
 	ctx.fillStyle="rgba(0,0,0,0.3)"
 	ctx.fillRect(0,0,W,H);

	ctx.globalCompositeOperation="lighter";

 for(var t=0;t<particulas.length;t++){

 	var p=particulas[t];
 	ctx.beginPath();

 	//añadiendo colores
 	var gradient=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.radius);
 	gradient.addColorStop(0,p.centro);
 	gradient.addColorStop(0,p.color);
 	gradient.addColorStop(0.4,p.color);
 	gradient.addColorStop(1,"black");
	
 	ctx.fillStyle=gradient;

 	ctx.arc(p.x,p.y,p.radius,0,Math.PI*2,false);
 	ctx.fill();

	
 	p.y+=p.vy;
 	//Evitando que las esferas salgan del canvas
 	if(p.x<-50)p.x=W+50;
 	if(p.y<-50)p.y=H+50;
 	if(p.x>W+50)p.x=-50;
 	if(p.y>H+50)p.y=-50;
 }

  	 }

  	 setInterval(dibujar,100);