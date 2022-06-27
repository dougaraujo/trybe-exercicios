/*let infos = {
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
}*/

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "'O Pior Dia de Todos'",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de",
  leitor.nome,
  leitor.sobrenome,
  "se chama",
  leitor.livrosFavoritos[0].titulo
);

let newFavoriteBook = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
};

leitor.livrosFavoritos.push(newFavoriteBook);

console.log(leitor);

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');


