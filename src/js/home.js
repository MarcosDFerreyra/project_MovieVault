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

// classics

const classics = document.querySelector("#classics");
const classic_url = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=1970-01-01&primary_release_date.lte=1990-12-31&sort_by=vote_average.desc&vote_count.gte=1000";

const classic_movies = await fetch_movie(classic_url);
await renderMovies(classic_movies, classics);

//top movies

const card_top = document.querySelector("#top_rated");
const top_url = "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000";

const top_movies = await fetch_movie(top_url);
await renderMovies(top_movies, card_top);


//worst rated

const worst_top = document.querySelector("#worst_movies");
const worst_url = "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.asc&vote_count.gte=1000";

const worst_movies = await fetch_movie(worst_url);
await renderMovies(worst_movies, worst_top);