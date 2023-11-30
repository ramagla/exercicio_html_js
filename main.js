var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    var campoA = document.getElementById("campoA");
    var campoB = document.getElementById("campoB");

    var mensagem = document.getElementById("mensagem");

    var valorA = Number(campoA.value);
    var valorB = Number(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = "positiva";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.className = "negativa";
    }

    mensagem.style.display = "block";
});