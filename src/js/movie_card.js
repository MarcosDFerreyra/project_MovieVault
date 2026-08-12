
import {getMovieId, isFavorite, getFavorite } from "./utils.js";


export function movieCards(movies, data, card_place) {
    const rotten = data.Ratings.find(rating => rating.Source === "Rotten Tomatoes");
    const fave = getFavorite();
    const id = getMovieId();
    const value = isFavorite(fave, id)
    let html = "";
    movies.forEach(movie => {
        html +=
        `<div class="info_card" id="${movie.id}">
        
        <div class="movie-poster">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        </div>

        <div class="movie_info">
        <h1>${movie.title}</h1>

        <div class="movie_meta">
            <span>⭐ ${movie.vote_average.toFixed(1)}</span>
            <span>📅 ${movie.release_date.split("-")[0]}</span>
            <span>⏱️${movie.runtime} min</span>
            <span>🌎 ${movie.original_language.toUpperCase()}</span>
            <h3>Overview</h3>
            <p>${movie.overview}</p>
            ${value ?
            `<button class="fav_button" id="favorites">Remove from Favorites</button>`
            :
            `<button class="fav_button" id="favorites">Add to Favorites</button>`}
            
        </div>
        </div>



        <div class="movie_extra">
            <div>
            <h3><strong>cast</strong></h3>
            </div>

            <div>
            <h3><strong>Crew</strong></h3>
            </div>

            <div>
            <h3><strong>something</strong></h3>
            </div>

            <div>
            <h3><strong>aomething</strong></h3>
            </div>

                
            <h3><strong>All Ratings ?/10:</strong></h3>
            <p><strong>TMDB:</strong> ⭐ ${movie.vote_average.toFixed(1)}/10</p>
            <p><strong>IMDb:</strong> ⭐ ${data.imdbRating}/10</p>
            <p><strong>Metascore:</strong> ⭐ ${data.Metascore}/100</p>
            ${rotten ? `<p><strong>Rotten Tomatoes:</strong> ⭐ ${rotten.Value}</p>` : ""}
        </div>
    
        </div>`


    });
    card_place.innerHTML = html;

}

