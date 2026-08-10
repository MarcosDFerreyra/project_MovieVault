

export async function renderMovies(movies, card_place) {
    //const data = await fetch_movie(url);
    //const pop_movies = data.results;
    let html = "";
    movies.forEach(movie => {
        html +=
        `<div class = "pop_movies" >
        <a href="/src/cards/cards.html?id=${movie.id}"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" height="300" width="200"></a>
        </div>`
    });
    card_place.innerHTML = html;
}