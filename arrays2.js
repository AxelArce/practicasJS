var articulos = [
    { nombre: "Bici, costo: 3000"},
    { nombre: "Tv", costo: 2500},
    { nombre: "Celular", costo: 10000},
    { nombre: "Libro", costo: 320},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audífonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
var nombreArticulos = articulos.map(function(articulo){
    return articulos.nombre
});
var encuentraArticulo = articulos.find(function(articulo){
    return articulos.nombre === "Laptop"
});

var articulosBaratos = articulos.some(function(articulo){
    return articulos.costo <= 700;
})