function average(arr) {
  let arrLength = arr.length;
  let arrSum = 0;
  arr.forEach((element) => {
    arrSum = arrSum + element;
  });
  let average = arrSum / arrLength;
  let roundedAverage = Math.round(average);
  return roundedAverage;
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
