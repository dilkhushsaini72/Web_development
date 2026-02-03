let favMovie = "kgf";
let userChoice = prompt("Enter a movie name");
while (userChoice != favMovie && userChoice != "exit") {
  userChoice = prompt("Wronge guess! Try again..");
}

console.log("correct");
