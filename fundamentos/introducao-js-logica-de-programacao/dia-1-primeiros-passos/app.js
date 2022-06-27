const anguloA = 40;
const anguloB = 30;
const anguloC = 110;

let somaDosAngulos = anguloA + anguloB + anguloC;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log('error: encontrado valor não positivo para um ou mais ângulos!');
} else if (somaDosAngulos === 180) {
    console.log('true');
} else if (somaDosAngulos !== 180) {
    console.log('false');
}
