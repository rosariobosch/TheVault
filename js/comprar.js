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

const libros2 = []

libros2.push(new Libro('science fiction', '1984', 'George Orwell', '<img src="media/sfiction_1.jpeg" alt="Tapa del libro">', 1200));
libros2.push(new Libro('science fiction', 'A Game of Thrones', 'George R. R. Martin', '<img src="media/sfiction_2.jpeg" alt="Tapa del libro">', 1900));
libros2.push(new Libro('science fiction', 'The Testaments', 'Margaret Atwood', '<img src="media/sfiction_3.jpeg" alt="Tapa del libro">', 2500));
libros2.push(new Libro('science fiction', 'The Long Way to a Small, Angry Planet', 'Becky Chambers', '<img src="media/sfiction_4.jpeg" alt="Tapa del libro">', 1700));
libros2.push(new Libro('science fiction', 'Never Let Me Go', 'Kazuo Ishiguro', '<img src="media/sfiction_5.jpeg" alt="Tapa del libro">', 1200));

let acumulador = ``;

libros.forEach ( (libro) => {
    libro = ` <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$${libro.precio}</h6>
        <button onclick="agregarAlCarrito(${libro.precio})" class="buy-1">Agregar al carrito</button>
    </div>`;
    acumulador += libro;
    document.getElementById("crimeAndThriller").innerHTML = acumulador;
}) 

acumulador = ``;

libros2.forEach ( (libro) => {
    libro = ` <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$${libro.precio}</h6>
        <button onclick="agregarAlCarrito(${libro.precio})" class="buy-1">Agregar al carrito</button>
    </div>`;
    acumulador += libro;
    document.getElementById("scienceFiction").innerHTML = acumulador;
}) 

let precioTotal = 0;
function agregarAlCarrito(precio) {
    carrito.push(precio);
    localStorage.carrito = JSON.stringify(carrito);
    precioTotal += precio;
    alert(`Se agregó el libro al carrito. El total es $${precioTotal}`);
}


    let acumulador = ``
    carrito.forEach ((producto) => {
        producto = `
        <h2>Carrito</h2>
        <div class="informacion">
            <img src="${producto.imagen}" alt=""><!-- Variable -->
            <div class="datos">
                <div class="titulos">
                    <h3>Título</h3>
                    <h3>Autor</h3>
                    <h3>Precio</h3>
                </div>
                <div class="titulos"><!-- Variables -->
                    
                    <h4>${producto.titulo}</h4>
                    <h4>${producto.autor}</h4>
                    <h4>${producto.precio}</h4>
                </div>
                <div class="total">
                    <h4>Total: ${precioTotal}</h4>
                    <button onclick='actualizarCarrito()' class="btn botonFinalizar">Finalizar compra</button>
                </div>
            </div>
        `
        document.getElementById("modal").innerHTML = acumulador;
    }
    )

function actualizarCarrito() {
    
}

