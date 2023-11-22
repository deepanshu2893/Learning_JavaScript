// let rating = 2;
// if (rating === 3) {
//     console.log("This is true");
// } else {
//     console.log("This is false");
// }

// let random = Math.random();
// if (random < 0.5) {
//     console.log("Finally");
// }
// const dayOfWeek = "Friday".toLowerCase;

// if (dayOfWeek === "monday") {
//     console.log("I hate mondays");
// } else if (dayOfWeek === "sunday") {
//     console.log("Yay it's Sunday");
// } else if (dayOfWeek === "friday") {
//     console.log("Yes it's Friday");
// } else {
//     console.log("Some other day");
// }
const password = prompt("Please enter password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces!")
    }
}
else {
    console.log("Password is too short, must contain 6+ characters");
}

