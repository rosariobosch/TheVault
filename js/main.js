/* Libros Index */
let carritoStorage = localStorage.getItem("carrito");

let carrito = []

if (carritoStorage == null) {
    carrito = [];
} else {
    carrito = JSON.parse(carritoStorage);
}

let usuarioStorage = localStorage.getItem("usuario")

let usuario = '';
if (usuarioStorage == null) {
    usuario = prompt('Inresá tu nombre');
    localStorage.usuario = JSON.stringify(usuario);
    saludo();
} else {
    usuario = JSON.parse(usuarioStorage);
    saludo();
}

function saludo() {
    alert('Bienvenido/a ' + usuario);
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


const contenedorNovedades = document.getElementById('novedades');

libros.forEach((libro) => {
    const divNovedades = document.createElement('div');
    divNovedades.classList.add('cards');
    divNovedades.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$${libro.precio}</h6>
        <button onclick="agregarAlCarrito(${libro.precio})" class="buy-1">Agregar al carrito</button>
    </div>`;
    contenedorNovedades.appendChild(divNovedades);
})



let precioTotal = 0;
function agregarAlCarrito() {
    carrito.push(precio);
    localStorage.carrito = JSON.stringify(carrito);
    precioTotal += precio;
    alert(`Se agregó el libro al carrito. El total es $${precioTotal}`);
}

