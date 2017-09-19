function Juego(){
	
	this.nombre="Nave";
	this.mundo=null;
	this.nave=null;
	this.ini=function(mundo,nave){
		this.mundo=mundo;
		this.nave=nave;
	}
}


function Mundo(x,y){

	this.ancho=x;
	this.alto=y;
}

function Nave(){
	this.x=null;
	this.y=null;
}


function crearJuego(){
	var mundo=new Mundo(300,200);
	var nave= new Nave();
	var juego=new Juego();
	juego.ini(mundo, nave);
	return juego;
}
