let num = prompt("Enter a number: ");
let randomNum = Math.floor(Math.random() * num) + 1;

let userGuess = prompt(`Guess the number from 1 to ${num} `);

while (true) {
  if (userGuess == randomNum) {
    alert("Congrates! You WIN..");
    break;
  } else if (userGuess == "exit") {
    alert("You Quit!");
  } else if (userGuess < randomNum) {
    userGuess = prompt("Your number is small, Try with larger");
  } else {
    userGuess = prompt("Your number is big, Try with smaller");
  }
}
