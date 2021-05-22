/* Comprar */

let carritoStorage = localStorage.getItem("carrito");
let carrito = []
const carritoContenedor = document.getElementById('carritoContenedor');
let precioTotal = 0;
let contadorCarrito = document.getElementById('contadorCarrito')

//Almacenamiento productos en carrito
if (carritoStorage == null) {
    carrito = [];
} else {
    carrito = JSON.parse(carritoStorage)
    actualizarCarrito()
    calcularTotal()
}

//Agregar producto al carrito
function agregarAlCarrito(libro) {
    carrito.push(libro)
    localStorage.carrito = JSON.stringify(carrito)
    console.log(carrito)
    actualizarCarrito()
    calcularTotal()
}

//Actualizar carrito/modal
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
    contadorCarrito.innerHTML = carrito.length

}

//Calcular total
function calcularTotal() {
    precioTotal = carrito.reduce((acc, el) => acc += el.precio, 0)
    document.getElementById('precioFinal').innerHTML = `Total: $${precioTotal}`
}

//Eliminar producto del carrito
function eliminarProducto() {
    carrito.splice('${JSON.stringify(libro)}', 1)
    localStorage.carrito = JSON.stringify(carrito)
    actualizarCarrito()
    calcularTotal()
}   