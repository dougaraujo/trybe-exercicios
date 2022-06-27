let infos = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("---- Bem-vinda,", infos.personagem, '----');

var newDataName = 'recorrente';

infos[newDataName] = 'Sim';

console.log(infos);

for ( info in infos ) {
    console.log(info);
}