// const subreddits = ["Cringe", "Books", "Chickens", "Funny", "Pics", "Soccer"]

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)

// }

// for (let subreddit of subreddits) {
//     console.log(`Visit reddit.com/r/${subreddit}`);

// }

const seat = [["Dyuti", "Deepanshu", "Manpreet", "Ashwani"],
["Hello", "Bye"]];

for (let i = 0; i < seat.length; i++) {
    console.log(seat[i]);
}

for (let row of seat) {
    for (let student of row) {
        console.log(student);
    }
}