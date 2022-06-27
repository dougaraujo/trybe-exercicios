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

infos2 = Object.assign(infos);

infos2.personagem = "Tio Patinhas";
infos2.origem = "Christmas on Ber Mountain, Dell's Four Color Comics \#178\ .";
infos2.nota = "O último MacPatinhas";
infos2.recorrente = "Sim";

console.log(infos2);
