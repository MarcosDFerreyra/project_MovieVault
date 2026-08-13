import { getMovieId, isFavorite, getFavorite } from "./utils.js";

export function movieCards(movies, data, card_place) {

    const rotten = data.Ratings?.find(
        rating => rating.Source === "Rotten Tomatoes"
    );

    const fave = getFavorite();
    const id = getMovieId();
    const value = isFavorite(fave, id);

    let html = "";

    movies.forEach(movie => {

        const cast = movie.credits?.cast
            ?.slice(0, 5)
            .map(actor => actor.name)
            .join(", ") || "N/A";

        const director = movie.credits?.crew
            ?.find(person => person.job === "Director");

        const production = movie.production_companies
            ?.map(company => company.name)
            .join(", ") || "N/A";

        const genres = movie.genres
            ?.map(genre => genre.name)
            .join(", ") || "N/A";  

        html += `
        <div class="info_card" id="${movie.id}">

            <div class="movie-poster">
                <img 
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                    alt="${movie.title}"
                >
            </div>

            <div class="movie_info">

                <h1>${movie.title}</h1>

                <div class="movie_meta">

                    <span>⭐ ${movie.vote_average.toFixed(1)}</span>

                    <span>
                        📅 ${movie.release_date
                ? movie.release_date.split("-")[0]
                : "N/A"}
                    </span>

                    <span>
                        ⏱️ ${movie.runtime || "N/A"} min
                    </span>

                    <span>
                        🌎 ${movie.original_language.toUpperCase()}
                    </span>

                    <h3>Overview</h3>

                    <p>${movie.overview || "No overview available."}</p>

                    ${value? `<button class="fav_button" id="favorites"> Remove from Favorites </button>`
                    : `<button class="fav_button" id="favorites"> Add to Favorites</button>`}
                </div>
            </div>


            <div class="movie_extra">

                <div>
                    <h3><strong>Cast</strong></h3>
                    <p>${cast}</p>
                </div>


                <div>
                    <h3><strong>Director</strong></h3>
                    <p>${director ? director.name : "N/A"}</p>
                </div>


                <div>
                    <h3><strong>Production</strong></h3>
                    <p>${production}</p>
                </div>


                <div>
                    <h3><strong>Genres</strong></h3>
                    <p>${genres}</p>
                </div>


                <h3><strong>All Ratings</strong></h3>

                <p>
                    <strong>TMDB:</strong>
                    ⭐ ${movie.vote_average.toFixed(1)}/10
                </p>

                <p>
                    <strong>IMDb:</strong>
                    ⭐ ${data.imdbRating || "N/A"}/10
                </p>

                <p>
                    <strong>Metascore:</strong>
                    ⭐ ${data.Metascore || "N/A"}/100
                </p>

                ${rotten
                ? `<p>
                            <strong>Rotten Tomatoes:</strong>
                            ⭐ ${rotten.Value}
                           </p>`
                : ""
            }

            </div>

        </div>`;
    });

    card_place.innerHTML = html;
}
