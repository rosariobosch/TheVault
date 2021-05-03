const abrirCarrito = document.getElementById('botonCarrito');
const cerrarCarrito = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('contenedorModal')[0];
const modalCarrito = document.getElementsByClassName('modalCarrito')[0];

abrirCarrito.addEventListener('click', () => {
    contenedorModal.classList.toggle('modalActive');
})

cerrarCarrito.addEventListener('click', () => {
    contenedorModal.classList.toggle('modalActive');
})

modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation();
})

contenedorModal.addEventListener('click', ()=>{
    cerrarCarrito.click()
})