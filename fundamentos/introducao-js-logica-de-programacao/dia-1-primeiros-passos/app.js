const costValue = 30;
const sellValue = 75;
const taxes = 0.2;
const totalCostValue = costValue + costValue * taxes;

let profit = 1000 * (sellValue - totalCostValue);

console.log('--- Lucro em Mil Vendas ---');
console.log('R$', profit);
