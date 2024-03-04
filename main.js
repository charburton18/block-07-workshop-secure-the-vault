/*
Pseudocode steps:
1. link index.html to main.js
2. console.log string "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
3. Create three variables (with const) each assigned to a result of a calculation using + - * or /. The first variable is 10, second is 40, third is 39.
4. Add comments explaining each step
5. Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.
6. Push up to github, copy link, submit assignment
*/

// define a variable userInstructions
const userInstructions = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// define three variables, one for each combination number
const num1 = 5 + 5;
const num2 = 120/3;
const num3 = 40 - 1;

// create an alert box that shows the userInstructions followed by all three combination numbers ordered 1-3.
alert(`${userInstructions} ${num1} ${num2} ${num3}`);

// Another way of writing this last line is:
// console.log(userInstructions + " " + num1 + " " + num2 + " " + num3);

