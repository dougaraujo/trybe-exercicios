const submitButton = document.querySelector("#submit-form");
const inputNome = document.getElementById("input-nome");
const inputEmail = document.getElementById("input-email");
const inputTextArea = document.getElementById("porq-ganhar");
let inputNomeValidity = inputNome.checkValidity();
let inputEmailValidity = inputEmail.checkValidity();
let inputTextAreaValidity = inputTextArea.checkValidity();

inputNome.addEventListener("mouseout", function () {
  inputNomeValidity = inputNome.checkValidity();
});
inputEmail.addEventListener("mouseout", function () {
  inputEmailValidity = inputEmail.checkValidity();
});
inputTextArea.addEventListener("mouseout", function () {
  inputTextAreaValidity = inputTextArea.checkValidity();
});

submitButton.addEventListener("click", function () {
  if (
    (inputNomeValidity && inputEmailValidity && inputTextAreaValidity) === true
  ) {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
  if (
    (inputNomeValidity && inputEmailValidity && inputTextAreaValidity) === false
  ) {
    alert(
      "Dados Inválidos."
    );
  }
});
