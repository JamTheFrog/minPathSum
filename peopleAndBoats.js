var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
    let boatCount = 0;
    let min = 0;
    let max = people.length - 1;
  
    while (min <= max) {
      if (people[max] + people[min] <= limit) min++;
      max--;
      boatCount++;
    }
  
    return boatCount;
  };

console.log(numRescueBoats([3, 2, 2, 1], 3))