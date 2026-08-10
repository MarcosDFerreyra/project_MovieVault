import { renderMovies } from './cards_popular.js';
import { fetch_movie } from './apis.js';

const card_popular = document.querySelector("#popular_movies");
const popular_url = "https://api.themoviedb.org/3/movie/popular";


//render popular_movies
const pop_movies = await fetch_movie(popular_url);

await renderMovies(pop_movies, card_popular);


// search event
const form = document.querySelector("#search-form")

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.querySelector("#search-input")
    const query = input.value.trim();

    if (query) {
        window.location.href = `http://localhost:5173/src/search/search.html?query=${encodeURIComponent(query)}`
    }
});

