document.addEventListener('DOMContentLoaded', function() {
    const texto = "Preparamos você para o FUTURO,\nnão para uma prova.";
    const velocidade = 50; // velocidade em milissegundos
    const elemento = document.getElementById("texto-digitado");
    
    const corAzul = "#007BFF";
    const corLaranja = "#FA6900";

    if (!elemento) {
        console.error("Elemento de texto não encontrado");
        return;
    }

    let indice = 0;

    function digitar() {
        if (indice < texto.length) {
            if (texto.substring(indice).startsWith("FUTURO")) {
                let futuroSpan = document.createElement('span');
                futuroSpan.style.color = corAzul;
                futuroSpan.textContent = "FUTURO";
                elemento.appendChild(futuroSpan);
                indice += 6; // Pula os 6 caracteres de "FUTURO"
            } else if (texto.substring(indice).startsWith("prova.")) {
                let provaSpan = document.createElement('span');
                provaSpan.style.color = corLaranja;
                provaSpan.textContent = "prova.";
                elemento.appendChild(provaSpan);
                indice += 6; // Pula os 6 caracteres de "prova."
            } else if (texto[indice] === '\n') {
                elemento.appendChild(document.createElement('br'));
                indice++;
            } else {
                let span = document.createElement('span');
                span.textContent = texto[indice];
                elemento.appendChild(span);
                indice++;
            }
            
            setTimeout(digitar, velocidade);
        }
    }

    digitar();
});