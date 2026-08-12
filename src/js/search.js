import { renderMovies } from './render_movies.js';
import { fetch_movie } from './apis.js';
import { getMovieQuery } from './utils.js';


// ---- render search movies

const movie_place = document.querySelector("#search_movies")

const search = "https://api.themoviedb.org/3/search/movie?query=";
const query = getMovieQuery();
const search_url = search + query;

try {
    const movies = await fetch_movie(search_url);
    console.log(movies);
    
    if (movies.length === 0) {
        movie_place.innerHTML = `<h2>No Movies Found</h2>
        <p>please try again later</p>
        `;
        
    } else {
        await renderMovies(movies, movie_place);
    }
} catch (error) {
    console.error("Error searching for movies:", error);
    movie_place.innerHTML = "<h2>Something went wrong while searching for movies.</h2>";

}

// ---- render search movies
