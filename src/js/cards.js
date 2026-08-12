import { movieCards } from './movie_card.js';
import { fetch_movie, fetch_omdb_movie} from './apis.js';
import {getMovieId, getMovieTitle, getFavorite, addFavorite, removeFavorite, isFavorite } from './utils.js';

// render card movies
const card_information = document.querySelector("#card_information");
const movies = "https://api.themoviedb.org/3/movie/";
const id = getMovieId();
const title = getMovieTitle();
const movie_url = `${movies}${id}?append_to_response=external_ids,credits`;

try {
    const individual_movie = await fetch_movie(movie_url);
    
    const ombd = await fetch_omdb_movie(individual_movie.external_ids.imdb_id);
    
    movieCards([individual_movie], ombd, card_information);
    
} catch (error) {
    console.error("Error loading movie information:", error);

    card_information.innerHTML = `
        <div class="movie-not-available">
            <h2>Information not available</h2>
            <p>Movie information could not be loaded: ${title}.</p>
        </div>
    `;
}







// favorites button
const favorites = document.querySelector("#favorites");

favorites.addEventListener('click', (event) => {
    event.preventDefault();
    const fave = getFavorite();
    const value = isFavorite(fave, id);

    if (!value) {
        addFavorite(fave, id);
        favorites.textContent = "Remove from Favorites";
    } else {
        removeFavorite(fave, id);
        favorites.textContent = "Add to Favorites";
    }
});
