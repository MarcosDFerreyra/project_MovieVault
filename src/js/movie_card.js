



export function movieCards(movies, data, card_place) {
    const rotten = data.Ratings.find(rating => rating.Source === "Rotten Tomatoes");
    let html = "";
    movies.forEach(movie => {
        html +=
        `<div class="m_card" id="${movie.id}">
        <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="${movie.title}"
        >

        <div class="movie_info">
        <h1>${movie.title}</h1>

        <div class="movie_meta">
            <span>⭐ ${movie.vote_average.toFixed(1)}</span>
            <span>📅 ${movie.release_date}</span>
            <span>⏱️ ${movie.runtime} min</span>
            <span>🌎 ${movie.original_language.toUpperCase()}</span>
        </div>

        <h3>Overview</h3>
        <p>${movie.overview}</p>

        <div class="movie_stats">
            <h3><strong>All Ratings:</strong></h3>
            <p><strong>TMDB:</strong> ⭐ ${movie.vote_average.toFixed(1)}/10</p>
            <p><strong>IMDb:</strong> ⭐ ${data.imdbRating}/10</p>
            <p><strong>Metascore:</strong> ⭐ ${data.Metascore}/100</p>
            ${rotten ? `<p><strong>Rotten Tomatoes:</strong> ⭐ ${rotten.Value}</p>` : ""}
        </div>
    </div>`


    });
    card_place.innerHTML = html;

}

