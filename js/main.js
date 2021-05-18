/* Libros Index */
const contenedorNovedades = $('#novedades')
const libros = [];

class Libro {
    constructor(id, titulo, autor, imagen, precio) {
        this.id = id,
            this.titulo = titulo,
            this.autor = autor,
            this.imagen = imagen,
            this.precio = precio
    }
}

libros.push(new Libro(1, 'How to Avoid a Climate Disaster', 'Bill Gates', '<img src="media/imagen_1.jpeg" alt="Tapa del libro">', 2700));
libros.push(new Libro(2, 'Becoming', 'Michelle Obama', '<img src="media/imagen_2.jpeg" alt="Tapa del libro">', 2000));
libros.push(new Libro(3, 'All Our Shimmering Skies', 'Trent Dalton', '<img src="media/imagen_3.jpeg" alt="Tapa del libro">', 3000));
libros.push(new Libro(4, 'The Testaments', 'Margaret Atwood', '<img src="media/sfiction_3.jpeg" alt="Tapa del libro">', 2500));


libros.forEach((libro) => {
    const divNovedades = $('<div></div>');
    divNovedades.addClass('cards');
    divNovedades.html(`
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1">Agregar al carrito</button>
    </div>`);
    contenedorNovedades.append(divNovedades)
})
