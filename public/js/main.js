window.onload = function(){
 ManejadorDeArticulos.load();
 //document.getElementById('noticia').innerHTML = ManejadorDeArticulos.articulos[0].render;
 ManejadorDeArticulos.render('noticia');
 ManejadorDeArticulos.renderPager('articulos');

}
