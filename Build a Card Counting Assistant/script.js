let count = 0;

function cardCounter(card) {
  if ([2,3,4,5,6].includes(card)) {
    count += 1;
  } else if ([7,8,9].includes(card)) {
    // walang change
  } else if ([10,"J","Q","K","A"].includes(card)) {
    count -= 1;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
console.log(cardCounter(2));   // Output: "1 Bet"
console.log(cardCounter(3));   // Output: "2 Bet"
console.log(cardCounter("K")); // Output: "1 Bet"
console.log(cardCounter("A")); // Output: "0 Hold"
