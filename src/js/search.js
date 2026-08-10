import { renderMovies } from './cards_popular.js';
import { fetch_movie } from './apis.js';
import { getMovieQuery } from './utils.js';


// ---- render search movies

const movie_place = document.querySelector("#search_movies")

const search = "https://api.themoviedb.org/3/search/movie?query=";
const query = getMovieQuery();
const search_url = search + query;

const movies = await fetch_movie(search_url)
console.log(movies)
await renderMovies(movies, movie_place);

// ---- render search movies
