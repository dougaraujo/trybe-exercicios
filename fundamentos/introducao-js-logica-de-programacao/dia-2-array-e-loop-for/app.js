let output = [];

for (let indexOutput= 0; indexOutput <= 24; indexOutput += 1) {
  output.push(indexOutput + 1);
}

let halfValue = [];

for (let indexHalfValue = 0; indexHalfValue < output.length; indexHalfValue++) {
  halfValue.push(output[indexHalfValue] / 2);
}

console.log(halfValue);
