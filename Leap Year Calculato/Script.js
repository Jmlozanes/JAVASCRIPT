// Step 1: Define the function
function isLeapYear(year) {
  // Step 2: Check leap year conditions
  // A leap year is:
  // 1) divisible by 4 (year % 4 === 0)
  // 2) NOT divisible by 100 (year % 100 !== 0)
  // OR divisible by 400 (year % 400 === 0)
  // Explanation of symbols:
  // %  -> modulo operator (remainder after division)
  // === -> strict equality (checks value and type)
  // !== -> strict inequality
  // &&  -> logical AND (both conditions must be true)
  // ||  -> logical OR (either condition can be true)

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} is a leap year.`; // return this if conditions are met
  } else {
    return `${year} is not a leap year.`; // otherwise return this
  }
}

// Step 3: Declare a variable for the year
const year = 2024;

// Step 4: Call the function and store the result
const result = isLeapYear(year);

// Step 5: Output the result
console.log(result); // "2024 is a leap year."
