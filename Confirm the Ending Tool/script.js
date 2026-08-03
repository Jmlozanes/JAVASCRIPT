function confirmEnding(str, target) {
  // Get the last characters of the string based on the length of the target
  // Example: "Bastian" and "n"
  // str.length = 7
  // target.length = 1
  // 7 - 1 = 6
  // slice(6) will get the last character "n"

  const ending = str.slice(str.length - target.length);

  // Compare the extracted ending with the target
  // If they are the same, it returns true
  // Otherwise, it returns false

  return ending === target;
}


// Test examples

console.log(confirmEnding("Bastian", "n")); 
// true

console.log(confirmEnding("Congratulation", "on")); 
// true

console.log(confirmEnding("Connor", "n")); 
// false
