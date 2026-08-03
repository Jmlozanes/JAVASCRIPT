1. Function Declaration

The function is created using:

function confirmEnding(str, target)

The function has two parameters:

str

The complete string that will be checked.

Example:

"Bastian"
target

The characters that we want to check at the end of the string.

Example:

"n"

Example:

confirmEnding("Bastian", "n")

The function receives:

str = "Bastian"
target = "n"
2. Checking the Target Length

The function uses:

target.length

to know how many characters should be checked.

Example:

"n".length

Result:

1

Another example:

"action".length

Result:

6

The length tells the function how many characters should be extracted from the end of the string.

3. Extracting the Ending Using slice()

The function uses:

str.slice(str.length - target.length)

The slice() method extracts part of a string starting from a specific index.

Example:

confirmEnding("Bastian", "n")

String:

B a s t i a n
0 1 2 3 4 5 6

String length:

7

Target length:

1

Calculation:

7 - 1 = 6

The code becomes:

str.slice(6)

Starting from index 6:

B a s t i a n
0 1 2 3 4 5 6
              ↑
              n

The result:

"n"
4. Comparing the Values

After extracting the ending, the function compares:

ending === target

Example:

"n" === "n"

Since both values are equal:

true

will be returned.

If the values are different:

"r" === "n"

The result will be:

false
5. Examples
Example 1
confirmEnding("Bastian", "n")

Output:

true

Explanation:

The word "Bastian" ends with "n".

Example 2
confirmEnding("Congratulation", "on")

Output:

true

Explanation:

The word "Congratulation" ends with "on".

Example 3
confirmEnding("Connor", "n")

Output:

false

Explanation:

"Connor" ends with "r", not "n".

Example 4
confirmEnding("Open sesame", "same")

Output:

true

Explanation:

The last four characters are "same".

Example 5
confirmEnding("Open sesame", "sage")

Output:

false
