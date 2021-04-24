/* Comprar */

let carritoStorage = localStorage.getItem("carrito");

let carrito = []

if (carritoStorage == null) {
    carrito = [];
} else {
    carrito = JSON.parse(carritoStorage);
}

class Libro {
    constructor(categoria, titulo, autor, imagen, precio) {
        this.categoria = categoria,
        this.titulo = titulo,
        this.autor = autor,
        this.imagen = imagen,
        this.precio = precio
    }
}

const libros = []

libros.push(new Libro('thriller', 'The Silent Patient', 'Alex Michaelides', '<img src="media/thriller_1.jpeg" alt="Tapa del libro">', 1400));
libros.push(new Libro('thriller', 'Bad Blood', 'John Carreyrou', '<img src="media/thriller_2.jpeg" alt="Tapa del libro">', 1500));
libros.push(new Libro('thriller', 'Caught', 'Harlan Coben', '<img src="media/thriller_3.jpeg" alt="Tapa del libro">', 1200));
libros.push(new Libro('thriller', 'I\'ll Be Gone in the Dark', 'Michelle McNamara', '<img src="media/thriller_4.jpeg" alt="Tapa del libro">', 1700));



let acumulador = ``;

libros.forEach ( (libro) => {
    libro = ` <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$${libro.precio}</h6>
        <button onclick="agregarAlCarrito(productoPrueba)" class="buy-1">Agregar al carrito</button>
    </div>`;
    acumulador += libro;
}) 

document.getElementById("crimeAndThriller").innerHTML = acumulador;
document.getElementById("scienceFiction").innerHTML = acumulador;

let sortByPrice = libros.sort(function(a,b) {
    return a.precio - b.precio;
});

console.log(sortByPrice);//Array de libros ordenados por precio de menor a mayor

let productoPrueba = {id: 1, titulo: 'Libro de Prueba', autor: 'Prueba', precio: 2500};

let precioTotal = 0;
function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.carrito = JSON.stringify(carrito);
    precioTotal += productoPrueba.precio;
    alert(`Se agregó el libro al carrito. El total es $${precioTotal}`);
}

console.log(carrito);

