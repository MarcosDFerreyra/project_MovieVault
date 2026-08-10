import { getMovieId } from './utils.js';
import { movieCards } from './movie_card.js';
import { fetch_movie } from './apis.js';



// render card movies
const card_information = document.querySelector("#card_information");
const movies = "https://api.themoviedb.org/3/movie/";
const id = getMovieId();
const movie_url = movies + id

const individual_movie = await fetch_movie(movie_url)

movieCards([individual_movie], card_information)