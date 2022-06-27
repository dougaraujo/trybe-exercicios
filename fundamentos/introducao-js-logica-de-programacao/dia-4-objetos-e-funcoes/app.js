let infos = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("---- Bem-vinda,", infos.personagem, "----");

var newDataName = "recorrente";

infos[newDataName] = "Sim";

console.log(infos);

for (info in infos) {
  console.log(info);
}

for (info in infos) {
  console.log(infos[info]);
}

let infos2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Ber Mountain, Dell's Four Color Comics \#178\ .",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (key in infos) {
  if (key === "recorrente") {
    console.log("Ambos recorrentes");
  } else {
    console.log(infos[key], "e", infos2[key]);
  }
}


