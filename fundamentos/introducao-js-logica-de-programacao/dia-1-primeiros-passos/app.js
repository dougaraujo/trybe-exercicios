const salarioBruto = 2187.59;

let impostoSeguroSocial;
let impostoDeRenda;
let deducaoImpostoDeRenda;

if (salarioBruto <= 1556.94) {
  impostoSeguroSocial = 0.08;
} else if (salarioBruto <= 2594.92) {
  impostoSeguroSocial = 0.09;
} else if (salarioBruto <= 5189.82) {
  impostoSeguroSocial = 0.11;
} else if (salarioBruto > 5189.82) {
  impostoSeguroSocial = 0.09;
}

if (salarioBruto <= 1903.98) {
  impostoDeRenda = 0;
  deducaoImpostoDeRenda = 0;
} else if (salarioBruto <= 2826.65) {
  impostoDeRenda = 0.075;
  deducaoImpostoDeRenda = 148.8;
} else if (salarioBruto <= 3751.05) {
  impostoDeRenda = 0.15;
  deducaoImpostoDeRenda = 354.8;
} else if (salarioBruto <= 4664.68) {
  impostoDeRenda = 0.225;
  deducaoImpostoDeRenda = 636.13;
} else if (salarioBruto > 4664.68) {
  impostoDeRenda = 0.275;
  deducaoImpostoDeRenda = 869.36;
}

let salarioBase = salarioBruto - salarioBruto * impostoSeguroSocial;

let salarioLiquido =
  salarioBase - (salarioBase * impostoDeRenda - deducaoImpostoDeRenda);

console.log("---- Seu Salário Líquido ----");
console.log("R$", salarioLiquido.toFixed(2));
