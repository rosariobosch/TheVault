/* Comprar */

let carritoStorage = localStorage.getItem("carrito");
let carrito = []
const carritoContenedor = document.getElementById('carritoContenedor');
let precioTotal = 0;

if (carritoStorage == null) {
    carrito = [];
} else {
    carrito = JSON.parse(carritoStorage)
    actualizarCarrito()
    calcularTotal()
}


function agregarAlCarrito(libro) {
    carrito.push(libro)
    localStorage.carrito = JSON.stringify(carrito)
    console.log(carrito)
    actualizarCarrito()
    calcularTotal()
}

function actualizarCarrito() {
    carritoContenedor.innerHTML = ``;
    carrito.forEach((libro) => {
        const divModal = document.createElement('div')
        divModal.classList.add('modalProducto')
        divModal.innerHTML = `
        <h4>${libro.titulo}</h4>
        <h4>${libro.autor}</h4>
        <h4>${libro.precio}</h4>
        <button onclick='eliminarProducto()' class="button botonEliminar" id="">x</button>
        `
        carritoContenedor.appendChild(divModal)
    })
}

function calcularTotal() {
    precioTotal = carrito.reduce((acc, el) => acc += el.precio, 0)
    document.getElementById('precioFinal').innerHTML = `Total: $${precioTotal}`
}

function eliminarProducto() {
    carrito.splice('${JSON.stringify(libro)}', 1)
    localStorage.carrito = JSON.stringify(carrito)
    actualizarCarrito()
    calcularTotal()
}