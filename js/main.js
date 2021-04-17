let tamanosTitulo = ['Familiar', 'Chico', 'Mini'];
let tamanosDescripcion = ['Rinde 10 porciones generosas y están hechos con moldes de estilo nórdico.', 'Rinde 4 porciones, es ideal para 2 personas.', 'Rinde una porción individual.'];
let tamanosImagen = ['<img src="media/imagen_tamano_grande.jpeg" alt="Budín tamaño grande">', '<img src="media/imagen_tamano_chico.jpeg" alt="Budín tamaño chico">', '<img src="media/imagen_tamano_mini.jpeg" alt="Budín tamaño mini">']
let acumulador = ``;

for (let i = 0; i < tamanosTitulo.length; i++) {
    console.log(tamanosTitulo[i]);
    acumulador += `
    <div class="cardTamanos">
        <div class="imagenGrande">
            ${tamanosImagen[i]}
        </div>
        <div class="descripcionGrande">
            <h2>${tamanosTitulo[i]}</h2>
            <p>${tamanosDescripcion[i]}</p>
        </div>
    </div>
`;
}

document.getElementById("tamanosTitulo").innerHTML = acumulador;