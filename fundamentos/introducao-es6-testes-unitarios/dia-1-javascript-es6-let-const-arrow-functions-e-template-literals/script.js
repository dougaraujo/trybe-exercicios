// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);


//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const ordCrescente = (arr) => {
//     let ordenados = arr.sort((a, b) => a - b);
//     return `Os números ${ordenados} se encontram ordenados de forma crescente!`
//   }

//   console.log(ordCrescente(oddsAndEvens));


// const factorial = (num) => {
//     if (numb === 0) {
//         return 1;
//     }
//     let fatores = [];
//     for (let index = 1; index <= numb; index += 1) {
//         fatores.push(index);
//     }
//     let produto = fatores.length;
//     for (fator of fatores) {
//     produto *= fator; 
//     }
//     return produto / numb;
// } 

// console.log(factorial(5));

// const factorial2 = (numb) => {
//     if (numb === 0) return 1;
//     let produto = numb;
//     while (numb > 2) {
//         produto *= --numb;
        
//     }
//     return produto
// }

// console.log(factorial2(5));

// const factorial3 = (n) => n === 0 ? 1 : n * factorial3(n - 1);


// const biggestWord = (str) => {
//     let palavras = str.split(' ');
//     let maiorPalavra = '';
//     for (palavra of palavras) {
//         if (palavra.length > maiorPalavra.length) maiorPalavra = palavra;
//     }
//     return maiorPalavra;
// }


// console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

const clickButton = document.getElementById('click-button');
const resetButton = document.getElementById('reset-button');
const contador = document.getElementById('contador');

let clickCount = 0;

clickButton.addEventListener('click', () => {
    clickCount++
    contador.innerHTML = clickCount;
    
})

resetButton.addEventListener('click', () => {
    clickCount = 0;
    contador.innerHTML = clickCount;

})

// let output;

// const changeX = (nome) => {
//     const frase = 'Tryber x aqui!';
//     output =  frase.replace('x', nome);
//     return output
// }

// changeX('Pedro');

// const newStr = (changeX) => {
//     const skills = ['HTML', 'CSS', 'Git & Github'];
//     return `${output} Minhas três principais habilidades são: ${skills}`

// }

// console.log(newStr());
