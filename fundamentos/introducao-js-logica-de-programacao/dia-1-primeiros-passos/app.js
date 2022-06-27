let porcentagem = 55;

let nota = "";

if (porcentagem < 0 || porcentagem > 100) {
  console.log("error: valor percentual incorreto.");
} else if (porcentagem >= 90) {
  nota = "A";
  console.log("Sua Nota ==>", nota);
} else if (porcentagem >= 80) {
  nota = "B";
  console.log("Sua Nota ==>", nota);
} else if (porcentagem >= 70) {
  nota = "C";
  console.log("Sua Nota ==>", nota);
} else if (porcentagem >= 60) {
  nota = "D";
  console.log("Sua Nota ==>", nota);
} else if (porcentagem >= 50) {
  nota = "E";
  console.log("Sua Nota ==>", nota);
} else if (porcentagem < 50) {
  nota = "F";
  console.log("Sua Nota ==>", nota);
}
