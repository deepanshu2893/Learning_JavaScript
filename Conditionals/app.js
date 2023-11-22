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
