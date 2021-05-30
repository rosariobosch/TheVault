const contenedorNovedades = $('#novedades')
const contenedorThriller = document.getElementById('contenedorThriller');
const contenedorSciFi = document.getElementById('scienceFiction');
const contenedorChildren = document.getElementById('children');
const contenedorYoungAdult = document.getElementById('youngAdult');

/* Cards Comprar */

//Cards thriller
libros.forEach((libro) => {
    if (libro.id >= 5 && libro.id <= 8) {
        const divThriller = document.createElement('div')
        divThriller.classList.add('cards')
        divThriller.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1" id='${libro.id}'>Agregar al carrito</button>
    </div>`
        contenedorThriller.appendChild(divThriller)
    }
})

//Cards science fiction
libros.forEach((libro) => {
    if (libro.id >= 9 && libro.id <= 12) {
        const divSciFi = document.createElement('div')
        divSciFi.classList.add('cards')
        divSciFi.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1" id='${libro.id}'>Agregar al carrito</button>
    </div>`
        contenedorSciFi.appendChild(divSciFi)
    }
})

//Cards children
libros.forEach((libro) => {
    if (libro.id >= 13 && libro.id <= 16) {
        const divChildren = document.createElement('div')
        divChildren.classList.add('cards')
        divChildren.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1" id='${libro.id}'>Agregar al carrito</button>
    </div>`
        contenedorChildren.appendChild(divChildren)
    }
})

//Cards young adult
libros.forEach((libro) => {
    if (libro.id >= 17 && libro.id <= 20) {
        const divYoungAdult = document.createElement('div')
        divYoungAdult.classList.add('cards')
        divYoungAdult.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1" id='${libro.id}'>Agregar al carrito</button>
    </div>`
        contenedorYoungAdult.appendChild(divYoungAdult)
    }
})