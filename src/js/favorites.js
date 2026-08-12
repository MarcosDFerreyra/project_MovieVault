import { renderMovies } from './render_movies.js';
import { fetch_movie } from './apis.js';
import { getFavorite } from './utils.js';


const favorites_movies = document.querySelector("#favorites_movies")
const favorite = getFavorite();
const url = "https://api.themoviedb.org/3/movie/";
console.log(favorites_movies);

if (favorite.length === 0) {
    favorites_movies.innerHTML = "<h1>You don't have any favorites yet.</h1>";
} else {
    favorites_movies.innerHTML = "<h1>You Favorites:</h1>";

    
    const movies = [];

    for (const id of favorite) {
        const fav_url = url + id;
        const movie = await fetch_movie(fav_url);

        movies.push(movie);
    }

    renderMovies(movies, favorites_movies);
}