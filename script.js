//fazer botão para mostrar resultado da area funcionar - arch

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


//Ubuntu - entrada de dados



function calcularArea() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);  
    var area = base * altura;
    var resultadoArea = document.getElementById("resultadoArea");
    resultadoArea.textContent = "A área do retângulo é: " + area + " m²";
    resultadoArea.style.color = "rgb(0, 255, 0)";
}

//mostrar na tela  o resultado da area - Ubuntu

function mostrarResultadoArea() {
    var quadrado = document.getElementById("Quadrado");
    quadrado.style.display = "block";
}