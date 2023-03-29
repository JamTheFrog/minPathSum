var maxSatisfaction = function (satisfactions) {
  satisfactions.sort((a, b) => b - a);
  let max = 0;
  let sum = 0;
  console.log(satisfactions)
  for (const satisfaction of satisfactions) {
    console.log("this is the satisfaction " + satisfaction)
    console.log(max, sum)
    sum += satisfaction;
    if (sum <= 0) break;
    max += sum;
  }
  return max;
};

console.log(maxSatisfaction([-1,-8,0,5,-7]));
