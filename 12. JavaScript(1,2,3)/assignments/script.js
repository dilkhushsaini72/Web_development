// Q.1 Create a number variable num with some value. Now print "good" if the number is divisible by 10 and print "bad" if it is not
let num = 26;
// if (num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

num % 10 == 0 ? console.log("Good") : console.log("Bad");

// Q.2 Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age); eg name is age years old
let userName = prompt("Enter your name please: ");
let userAge = prompt("Enter your age please: ");
alert(`${userName} is ${userAge} years old`);

// Q.4 A string is a golden string if it starts with the character 'A' or 'a' and has a total
// lenght greater than 5. For a given print if it is golden or not..
