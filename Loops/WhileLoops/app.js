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

let input = prompt("Hey, say something")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        break;
    }

}
console.log("You win")