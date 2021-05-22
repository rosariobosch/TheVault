const libros = []
const libros2 = []
const libros3 = []
const libros4 = []

const contenedorThriller = document.getElementById('contenedorThriller');
const contenedorSciFi = document.getElementById('scienceFiction');
const contenedorChildren = document.getElementById('children');
const contenedorYoungAdult = document.getElementById('youngAdult');

class Libro {
    constructor(id, titulo, autor, imagen, precio) {
        this.id = id,
        this.titulo = titulo,
        this.autor = autor,
        this.imagen = imagen,
        this.precio = precio
    }
}

libros.push(new Libro(5, 'The Silent Patient', 'Alex Michaelides', '<img src="media/thriller_1.jpeg" alt="Tapa del libro">', 1400));
libros.push(new Libro(6, 'Bad Blood', 'John Carreyrou', '<img src="media/thriller_2.jpeg" alt="Tapa del libro">', 1500));
libros.push(new Libro(7, 'Caught', 'Harlan Coben', '<img src="media/thriller_3.jpeg" alt="Tapa del libro">', 1200));
libros.push(new Libro(8, 'I&#39ll Be Gone in the Dark', 'Michelle McNamara', '<img src="media/thriller_4.jpeg" alt="Tapa del libro">', 1700));

libros2.push(new Libro(9, '1984', 'George Orwell', '<img src="media/sfiction_1.jpeg" alt="Tapa del libro">', 1200));
libros2.push(new Libro(10, 'A Game of Thrones', 'George R. R. Martin', '<img src="media/sfiction_2.jpeg" alt="Tapa del libro">', 1900));
libros2.push(new Libro(11, 'The Testaments', 'Margaret Atwood', '<img src="media/sfiction_3.jpeg" alt="Tapa del libro">', 2500));
libros2.push(new Libro(12, 'Never Let Me Go', 'Kazuo Ishiguro', '<img src="media/sfiction_5.jpeg" alt="Tapa del libro">', 1200));

libros3.push(new Libro(13, 'Shadow and Bone', 'Leigh Bardugo', '<img src="media/children_1.jpeg" alt="Tapa del libro">', 2300));
libros3.push(new Libro(14, 'The Very Hungry Caterpillar', 'Eric Carle', '<img src="media/children_2.jpeg" alt="Tapa del libro">', 1300));
libros3.push(new Libro(15, 'Dear Zoo', 'Rod Campbell', '<img src="media/children_3.jpeg" alt="Tapa del libro">', 1100));
libros3.push(new Libro(16, 'HOPE', 'Penguin Australia', '<img src="media/children_4.jpeg" alt="Tapa del libro">', 2600));

libros4.push(new Libro(17, 'Wonder', 'R J Palacio', '<img src="media/youngAdult_1.jpeg" alt="Tapa del libro">', 1500));
libros4.push(new Libro(18, 'The Little Prince', 'Antoine de Saint-Exupery ', '<img src="media/youngAdult_2.jpeg" alt="Tapa del libro">', 500));
libros4.push(new Libro(19, 'The Hunger Games', 'Suzanne Collins', '<img src="media/youngAdult_3.jpeg" alt="Tapa del libro">', 1600));
libros4.push(new Libro(20, 'Harry Potter and the Philosopher&#39s Stone', 'J.K. Rowling', '<img src="media/youngAdult_4.jpeg" alt="Tapa del libro">', 1550));

libros.forEach((libro) => {
    const divThriller = document.createElement('div')
    divThriller.classList.add('cards')
    divThriller.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1">Agregar al carrito</button>
    </div>`
    contenedorThriller.appendChild(divThriller)
})

libros2.forEach((libro) => {
    const divSciFi = document.createElement('div')
    divSciFi.classList.add('cards')
    divSciFi.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1">Agregar al carrito</button>
    </div>`
    contenedorSciFi.appendChild(divSciFi)
})

libros3.forEach((libro) => {
    const divChildren = document.createElement('div')
    divChildren.classList.add('cards')
    divChildren.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1">Agregar al carrito</button>
    </div>`
    contenedorChildren.appendChild(divChildren)
})

libros4.forEach((libro) => {
    const divYoungAdult = document.createElement('div')
    divYoungAdult.classList.add('cards')
    divYoungAdult.innerHTML = `
        <div class="content">
        ${libro.imagen}
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <h6>$${libro.precio}</h6>
        <button onclick='agregarAlCarrito(${JSON.stringify(libro)})' class="button buy-1">Agregar al carrito</button>
    </div>`
    contenedorYoungAdult.appendChild(divYoungAdult)
})