// Adicione este código ao seu arquivo script.js existente

document.addEventListener('DOMContentLoaded', function() {
    const texto = "Preparamos você para o FUTURO,";
    const velocidade = 50; // velocidade em milissegundos
    const elemento = document.getElementById("texto-digitado");

    let indice = 0;

    function digitar() {
        if (indice < texto.length) {
            if (texto.charAt(indice) === 'F') {
                elemento.innerHTML += '<span class="blue">F</span>';
            } else if (texto.charAt(indice) === 'U') {
                elemento.innerHTML += '<span class="blue">U</span>';
            } else if (texto.charAt(indice) === 'T') {
                elemento.innerHTML += '<span class="blue">T</span>';
            } else if (texto.charAt(indice) === 'R') {
                elemento.innerHTML += '<span class="blue">R</span>';
            } else if (texto.charAt(indice) === 'O') {
                elemento.innerHTML += '<span class="blue">O</span>';
            } else {
                elemento.innerHTML += texto.charAt(indice);
            }
            indice++;
            setTimeout(digitar, velocidade);
        }
    }

    digitar();
});