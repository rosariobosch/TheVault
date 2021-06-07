const libros = []

class Libro {
    constructor(id, titulo, autor, imagen, precio, cantidad) {
        this.id = id,
        this.titulo = titulo,
        this.autor = autor,
        this.imagen = imagen,
        this.precio = precio,
        this.cantidad = cantidad
    }
}

libros.push(new Libro(1, 'How to Avoid a Climate Disaster', 'Bill Gates', '<img src="media/imagen_1.jpeg" alt="Tapa del libro">', 2700, 1));
libros.push(new Libro(2, 'Becoming', 'Michelle Obama', '<img src="media/imagen_2.jpeg" alt="Tapa del libro">', 2000, 1));
libros.push(new Libro(3, 'All Our Shimmering Skies', 'Trent Dalton', '<img src="media/imagen_3.jpeg" alt="Tapa del libro">', 3000, 1));
libros.push(new Libro(4, 'The Testaments', 'Margaret Atwood', '<img src="media/sfiction_3.jpeg" alt="Tapa del libro">', 2500, 1));
libros.push(new Libro(5, 'The Silent Patient', 'Alex Michaelides', '<img src="media/thriller_1.jpeg" alt="Tapa del libro">', 1400, 1));
libros.push(new Libro(6, 'Bad Blood', 'John Carreyrou', '<img src="media/thriller_2.jpeg" alt="Tapa del libro">', 1500, 1));
libros.push(new Libro(7, 'Caught', 'Harlan Coben', '<img src="media/thriller_3.jpeg" alt="Tapa del libro">', 1200, 1));
libros.push(new Libro(8, 'I&#39ll Be Gone in the Dark', 'Michelle McNamara', '<img src="media/thriller_4.jpeg" alt="Tapa del libro">', 1700, 1));
libros.push(new Libro(9, '1984', 'George Orwell', '<img src="media/sfiction_1.jpeg" alt="Tapa del libro">', 1200, 1));
libros.push(new Libro(10, 'A Game of Thrones', 'George R. R. Martin', '<img src="media/sfiction_2.jpeg" alt="Tapa del libro">', 1900, 1));
libros.push(new Libro(11, 'The Testaments', 'Margaret Atwood', '<img src="media/sfiction_3.jpeg" alt="Tapa del libro">', 2500, 1));
libros.push(new Libro(12, 'Never Let Me Go', 'Kazuo Ishiguro', '<img src="media/sfiction_5.jpeg" alt="Tapa del libro">', 1200, 1));
libros.push(new Libro(13, 'Shadow and Bone', 'Leigh Bardugo', '<img src="media/children_1.jpeg" alt="Tapa del libro">', 2300, 1));
libros.push(new Libro(14, 'The Very Hungry Caterpillar', 'Eric Carle', '<img src="media/children_2.jpeg" alt="Tapa del libro">', 1300, 1));
libros.push(new Libro(15, 'Dear Zoo', 'Rod Campbell', '<img src="media/children_3.jpeg" alt="Tapa del libro">', 1100, 1));
libros.push(new Libro(16, 'HOPE', 'Penguin Australia', '<img src="media/children_4.jpeg" alt="Tapa del libro">', 2600, 1));
libros.push(new Libro(17, 'Wonder', 'R J Palacio', '<img src="media/youngAdult_1.jpeg" alt="Tapa del libro">', 1500, 1));
libros.push(new Libro(18, 'The Little Prince', 'Antoine de Saint-Exupery ', '<img src="media/youngAdult_2.jpeg" alt="Tapa del libro">', 500, 1));
libros.push(new Libro(19, 'The Hunger Games', 'Suzanne Collins', '<img src="media/youngAdult_3.jpeg" alt="Tapa del libro">', 1600, 1));
libros.push(new Libro(20, 'Harry Potter and the Philosopher&#39s Stone', 'J.K. Rowling', '<img src="media/youngAdult_4.jpeg" alt="Tapa del libro">', 1550, 1));