
const verifyEmptyInput = () => {
  let valor1 = document.getElementById("value1").value;
  let valor2 = document.getElementById("value2").value;
  if (valor1 === "" || valor2 === "") {
    throw new Error("Os valores não podem estar em branco!");
  }
};

const verifyIsNan = () => {
  let valor1 = document.getElementById("value1").value;
  let valor2 = document.getElementById("value2").value;
  if (isNaN(valor1) || isNaN(valor2)) {
    throw new Error("Os valores inseridos devem ser numéricos!");
  }
};

function sum() {
  try {
    verifyIsNan();
    verifyEmptyInput();
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const result = Number(value1) + Number(value2);
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById("result").innerHTML = error.message;
  } finally {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
  }

//   try {
//     Attempt to execute this code
//   } catch (exception) {
//     This code handles exceptions
//   } finally {
//     This code always gets executed
//   }
}

window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};
