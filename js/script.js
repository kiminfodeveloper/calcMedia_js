// evitando apagar o form
function calculateAverage() {
  //  atribuindo os valores
  var numberOne = parseFloat(document.getElementById("number1").value);
  console.log("First note: " + numberOne);
  var numberTwo = parseFloat(document.getElementById("number2").value);
  console.log("Second note: " + numberTwo);
  var numberThree = parseFloat(document.getElementById("number3").value);
  console.log("Third note: " + numberThree);
  var numberFour = parseFloat(document.getElementById("number4").value);
  console.log("Fourth note: " + numberFour);

  // criando o calculo da media
  var media = (numberOne + numberTwo + numberThree + numberFour) / 4;
  console.log("Average note: " + media);

  // mostrando o resultado
  document.getElementById("result").value = media;

  // validando valor maior ou menor que a media

  if (media >= 6) {
    document.getElementById("aproveOrNot").value = "Approve";
  } else {
    document.getElementById("aproveOrNot").value = "Disapproved";
  }
}

// função para limpar dados nos campos
function clearFields() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("number3").value = "";
  document.getElementById("number4").value = "";

  document.getElementById("result").value = "";
}
