const movies = [{
    title: "Before Sunrise",
    score: 8,
    genre: "Romance"
},
{
    title: "Eternal Sunshine",
    score: 9,
    genre: "Romance"
},
{
    title: "Man of Steel",
    score: 8,
    genre: "Action"
}]

const goodMovies = movies.filter(movie => {
    return movie.score < 10
})