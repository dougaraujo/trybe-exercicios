let output = [];

for (let indexOutput= 1; indexOutput <= 25; indexOutput += 1) {
  output.push(indexOutput);
}

let halfValue = [];

for (let indexHalfValue = 0; indexHalfValue < output.length; indexHalfValue++) {
  halfValue.push(output[indexHalfValue] / 2);
}

console.log(halfValue);
