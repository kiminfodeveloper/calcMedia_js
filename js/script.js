// evitando apagar o form
document
  .getElementById("mediaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //  atribuindo os valores
    var valor1 = parseFloat(document.getElementById("valor1").value);
    console.log("valor da primeira nota: " + valor1);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    console.log("valor da segunda nota: " + valor2);
    var valor3 = parseFloat(document.getElementById("valor3").value);
    console.log("valor da terceira nota: " + valor3);
    var valor4 = parseFloat(document.getElementById("valor4").value);
    console.log("valor da quarta nota: " + valor4);

    // criando o calculo da media
    var media = (valor1 + valor2 + valor3 + valor4) / 4;
    console.log("valor da media nota: " + media);

    // mostrando o resultado
    document.getElementById("resultado").value = media;
  });

// função para limpar dados nos campos
function limparCampos() {
  document.getElementById("valor1").value = "";
  document.getElementById("valor2").value = "";
  document.getElementById("valor3").value = "";
  document.getElementById("valor4").value = "";

  document.getElementById("resultado").value = "";
}
