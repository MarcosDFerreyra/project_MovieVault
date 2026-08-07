import { fetch_movie } from "./apis.js";


export async function renderPopularMovies(url, card_place) {
    const data = await fetch_movie(url)
    const pop_movies = data.results
    let html = "";
    pop_movies.forEach(movie => {
        html += `
        <div class = "pop_movies">
        <a href="#"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" height="300" width="200"></a>
        </div>`
    });
    card_place.innerHTML = html
}
