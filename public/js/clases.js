
var notiActual = 0;
var actual = 0;
var Articulo = function(titulo, contenido, id){
	this.id = id;
	this.titulo = titulo;
    this.contenido = contenido;
}

Articulo.prototype.render = function(){
	return '<article><div><h3>' + this.titulo + '</h3></div><div><p>' + this.contenido + '</p></div></article>';
}

var ManejadorDeArticulos = {};
ManejadorDeArticulos.load = function(){
this.articulos = []
this.articulos.push(new Articulo('Titulo1', "<img src='img/arti1.jpg'>", '1'));
this.articulos.push(new Articulo('Titulo2', "<img src='img/arti2.jpg'>", '2'));
this.articulos.push(new Articulo('Titulo3', "<img src='img/arti3.jpg'>", '3'));
this.articulos.push(new Articulo('Titulo4', "<img src='img/arti1.jpg'>", '1'));
this.articulos.push(new Articulo('Titulo5', "<img src='img/arti2.jpg'>", '2'));
this.articulos.push(new Articulo('Titulo6', "<img src='img/arti3.jpg'>", '3'));
this.articulos.push(new Articulo('Titulo7', "<img src='img/arti1.jpg'>", '1'));
this.articulos.push(new Articulo('Titulo8', "<img src='img/arti2.jpg'>", '2'));
this.articulos.push(new Articulo('Titulo9', "<img src='img/arti3.jpg'>", '3'));
this.articulos.push(new Articulo('Titulo10', "<img src='img/arti1.jpg'>", '1'));
this.articulos.push(new Articulo('Titulo11', "<img src='img/arti2.jpg'>", '2'));
this.articulos.push(new Articulo('Titulo12', "<img src='img/arti3.jpg'>", '3'));
}

ManejadorDeArticulos.render = function(objectId){
	var result = "";
	result = this.articulos[notiActual % 3].render();
	notiActual++;
	document.getElementById(objectId).innerHTML = result;
}
/*
ManejadorDeArticulos.renderPager = function(elementId){
	var len = this.articulos.length;
	var result = "";/*
	for(var i = (actual-1)*5; i <= (actual-1)*5+5;i++){
		result = this.articulos[1].render();
		actual++;

		result = this.articulos[1].render();
		document.getElementById(elementId).innerHTML = result;
	}

}*/
