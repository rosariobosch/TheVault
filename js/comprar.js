/* Comprar */

let carritoStorage = localStorage.getItem("carrito");

let carrito = []

if (carritoStorage == null) {
    carrito = [];
} else {
    carrito = JSON.parse(carritoStorage);
}

class Libro {
    constructor(id, titulo, autor, imagen, precio) {
        this.id = id,
        this.titulo = titulo,
        this.autor = autor,
        this.imagen = imagen,
        this.precio = precio
    }
}

const libros = []

libros.push(new Libro(1, 'How to Avoid a Climate Disaster', 'Bill Gates', '<img src="media/imagen_1.jpeg" alt="Tapa del libro">', 2700));
libros.push(new Libro(2, 'Becoming', 'Michelle Obama', '<img src="media/imagen_2.jpeg" alt="Tapa del libro">', 2000));
libros.push(new Libro(3, 'All Our Shimmering Skies', 'Trent Dalton', '<img src="media/imagen_3.jpeg" alt="Tapa del libro">', 3000));
libros.push(new Libro(3, 'All Our Shimmering Skies', 'Trent Dalton', '<img src="media/imagen_3.jpeg" alt="Tapa del libro">', 3000));

let acumulador = ``;

libros.forEach ((libro) => {
    libro = ` <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$${libro.precio}</h6>
        <button onclick="agregarAlCarrito(productoPrueba)" class="buy-1">Agregar al carrito</button>
    </div>`;
    acumulador += libro;
}) 

document.getElementById("tamanosTitulo").innerHTML = acumulador;

let productoPrueba = {id: 1, titulo: 'Libro de Prueba', autor: 'Prueba', precio: 2500};

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.carrito = JSON.stringify(carrito);
}

console.log(carrito)

