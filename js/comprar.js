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
    actualizarCarrito()
    calcularTotal()
    efectoBoton(libro)
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
        <button onclick='eliminarProducto(${libro.id})' class="button botonEliminar" id="${libro.id}">x</button>
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
function eliminarProducto(id) {
    let productoAEliminar = carrito.find(el => el.id == id)
    let indice = carrito.indexOf(productoAEliminar)
    carrito.splice(indice, 1)
    localStorage.carrito = JSON.stringify(carrito)
    actualizarCarrito()
    calcularTotal()
}

//Vaciar carrito

function vaciarCarrito() {
    carrito = []
    localStorage.carrito = JSON.stringify(carrito)
    actualizarCarrito()
    calcularTotal()
}

//Efecto boton agregar carrito
function efectoBoton(libro) {
    const botonComprar = $(`#${libro.id}`)
    $(botonComprar).css('background-color', '#35adb8')
        .fadeOut('slow')
        .fadeIn('slow')
        .html('Agregado al carrito')
    setTimeout(() => {
        $(botonComprar).fadeOut('slow')
            .fadeIn('slow')
            .html('Agregar al carrito')
            .css('background-color', '#006D77')
    }, 3000);
}

//Generar link de Mercado Pago

const finalizarCompra = async () => {
    const carritoAPagar = carrito.map(el =>
    ({
        "title": el.titulo,
        "description": "",
        "picture_url": "",
        "category_id": el.id,
        "quantity": 1,
        "currency_id": "ARS",
        "unit_price": el.precio
    })
    )

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
            Authorization: "Bearer TEST-6190420186328087-052415-1c28788ad472b86323dd8f29cacb7e6f-192623993",
        },
        body: JSON.stringify({
            "items": carritoAPagar,
        }),
    });
    const data = await response.json();

    if (data.init_point != null) {
        window.open(data.init_point, '_blank');
    }
}