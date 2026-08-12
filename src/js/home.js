import { renderMovies } from './render_movies.js';
import { fetch_movie } from './apis.js';

// search event
const form = document.querySelector("#search-form")

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.querySelector("#search-input")
    const query = input.value.trim();

    if (query) {
        window.location.href = `/src/search/search.html?query=${encodeURIComponent(query)}`
    }
});

//render movies

//popular_movies
const card_popular = document.querySelector("#popular_movies");
const popular_url = "https://api.themoviedb.org/3/movie/popular";

const pop_movies = await fetch_movie(popular_url);
await renderMovies(pop_movies, card_popular);

//movies

