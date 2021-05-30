/* Libros Index */
const contenedorNovedades = $('#novedades')

libros.forEach((libro) => {

    if (libro.id > 0 && libro.id <= 4) {
        const divNovedades = $('<div></div>');
        divNovedades.addClass('cards');
        divNovedades.html(`
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1" id="${libro.id}">Agregar al carrito</button>
    </div>`);
        contenedorNovedades.append(divNovedades)
    }
})
