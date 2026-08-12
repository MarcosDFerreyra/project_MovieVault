import { movieCards } from './movie_card.js';
import { fetch_movie, fetch_omdb_movie} from './apis.js';
import {getMovieId, getFavorite, addFavorite, removeFavorite, isFavorite } from './utils.js';

// render card movies
const card_information = document.querySelector("#card_information");
const movies = "https://api.themoviedb.org/3/movie/";
const id = getMovieId();
const movie_url = `${movies}${id}?append_to_response=external_ids`;


const individual_movie = await fetch_movie(movie_url);

const ombd = await fetch_omdb_movie(individual_movie.external_ids.imdb_id);

movieCards([individual_movie], ombd, card_information);

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
