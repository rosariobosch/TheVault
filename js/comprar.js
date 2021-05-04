/* Comprar */

let carritoStorage = localStorage.getItem("carrito");
let carrito = []
const carritoContenedor = document.getElementById('carritoContenedor');

if (carritoStorage == null) {
    carrito = [];
} else {
    carrito = JSON.parse(carritoStorage)
}

let precioTotal = 0;
function agregarAlCarrito(libro) {
    carrito.push(libro)
    localStorage.carrito = JSON.stringify(carrito);
    precioTotal += libro.precio
    console.log(carrito)
    actualizarCarrito()
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
        `
        carritoContenedor.appendChild(divModal)
    })

}