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


// STRETCH GOAL BELOW:

// ask the user to enter 3 numbers as if they are "choosing" the combination. 
// let userCombination =
// prompt("Enter your own combination of three numbers here, separated by spaces:", "3 25 24");

// Then display a dialog box that displays all three numbers to them as the combo they have picked.
// if (userCombination != null) {
//   alert("Your combination is: " + userCombination);
// }

// if you want to display all three numbers in the HTML:
// if (userCombination != null) {
//   document.getElementById("confirmationText").innerHTML =
//   "Your combination is " + userCombination;
// }


// SUPER STRETCH GOAL

// Stretch stretch goal: Ask the user to guess the combo using prompt 
// and then tell them if they are correct or not. 
// This will probably need if( ) statements which we won't cover until tomorrow.

// let userGuess =
// prompt("Guess the combination (three two-digit numbers separated by spaces):", "** ** **");

// if (userGuess == "69 69 69") {
//   alert("Congratulations! You guessed the correct combination!");
// } else {
//   alert("Sorry, that wasn't the correct combination. Refresh the page to try again.")
// }

