let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (indexA = 1; indexA < numbers.length; indexA++) {
  for (indexB = 0; indexB < indexA; indexB++) {
    if (numbers[indexB] > numbers[indexA]) {
      let swap = numbers[indexB];
      numbers[indexB] = numbers[indexA];
      numbers[indexA] = swap;
    }
  }
}

console.log(numbers);
