// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// Block Scope
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = "HIIII!"
// }

// console.log(radius);
// console.log(PI);

// Lexical Scope

function hello() {
    const heroes = ["Superman", "Batman", "Spiderman"];
    function help() {
        for (let hero of heroes) {
            console.log(`Help, ${hero}`);
        }
    }
    help();

}

