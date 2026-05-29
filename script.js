//fazer botão para mostrar resultado da area funcionar

function mostrarResultado() {
    var quadrado = document.getElementById("Quadrado");
    quadrado.style.display = "block";
}

function verificarResposta() {
    var opcoes = document.getElementsByName("area");
    var respostaCorreta = "opcao1"; // 50m² é a resposta correta
    var selecionada = null;
    
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            selecionada = opcoes[i].value;
            break;
        }
    }
    
    var resultado = document.getElementById("resultado");
    
    if (selecionada === null) {
        resultado.textContent = "Por favor, selecione uma opção!";
        resultado.style.color = "rgb(255, 200, 0)";
    } else if (selecionada === respostaCorreta) {
        resultado.textContent = "✓ Parabéns!";
        resultado.style.color = "rgb(0, 255, 0)";
    } else {
        resultado.textContent = "✗ Resposta incorreta!";
        resultado.style.color = "rgb(255, 0, 0)";
    }
}

