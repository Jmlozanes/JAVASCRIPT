/**
 * Truncates a string to a specified maximum length.
 * If the string is longer than the maxLength, it shortens the string and appends "..."
 * Otherwise, it returns the original string.
 * 
 * @param {string} str - The string to truncate
 * @param {number} maxLength - The maximum allowed length
 * @returns {string} - The truncated string if needed, otherwise the original
 */
function truncateString(str, maxLength) {
  // Check if the string length is greater than the maximum length
  if (str.length > maxLength) {
    // Slice the string from index 0 to maxLength and add "..."
    return str.slice(0, maxLength) + "...";
  } else {
    // String is already short enough, return as is
    return str;
  }
}

// Test cases

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); 
// Output: "A-tisket..."

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); 
// Output: "Peter Piper..."

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
  "A-tisket a-tasket A green and yellow basket".length)); 
// Output: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
  "A-tisket a-tasket A green and yellow basket".length + 2)); 
// Output: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-", 1)); 
// Output: "A..."

console.log(truncateString("Absolutely Longer", 2)); 
// Output: "Ab..."





//output 
//            A-tisket...
//            Peter Piper...
//            A-tisket a-tasket A green and yellow basket
//            A-tisket a-tasket A green and yellow basket
//            A...
//            Ab...
