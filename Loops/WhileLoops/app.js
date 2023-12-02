// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// let login = prompt("Enter your name");
// while (login != "Deepanshu") {
//     login = prompt("Name is wrong");
// }

// let input = prompt("Hey, say something")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }

// }
// console.log("You win")



let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = prompt("Too High! Enter a new guess:")
    } else {
        guess = prompt("Too Low! Enter a new guess")
    }
}
console.log("You got it!")