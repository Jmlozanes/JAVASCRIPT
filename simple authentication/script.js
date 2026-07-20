const string1 = "Proceed User!";
const string2 = "User input is INVALID";
const userinput = "one"; //const userinput = "2";

console.log("Input Number to Porceed: ");
const Usersave = parsefloat(userinput); //Converts the user's input from a string into a decimal number ex. "12.12 ab" = 12.12

let NOT;

if(!isNaN(Usersave)){
  NOT = string1;
}else{
  NOT = string2;
}
console.log(userinput);
console.log(NOT);


//output: Input Number to Porceed: one
//User input is INVALID

//output: Input Number to Porceed: 2
//Proceed User!
