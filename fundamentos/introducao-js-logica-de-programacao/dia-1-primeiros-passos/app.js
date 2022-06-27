let piece = 'peão';

switch (piece.toLowerCase()) {
    case 'torre':
        console.log('A torre se move em linha reta horizontalmente e verticalmente.');
        break;
    
    case 'peão':
        console.log('De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.');
        break;

    case 'bispo':
        console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro.');
        break;

    case 'cavalo':
        console.log('O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.');
        break;

    case 'rainha':
        console.log('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.');
        break;

    case 'rei':
        console.log('O rei pode se mover para qualquer casa adjacente.');
        break;

    default: 
        console.log('Insira uma peça do xadrez válida.');
}
