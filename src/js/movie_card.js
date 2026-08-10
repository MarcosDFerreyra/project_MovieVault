
export function movieCards(movies, card_place) {
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
            <p><strong>Votes:</strong> ${movie.vote_count}</p>
        </div>
    </div>`


    });
    card_place.innerHTML = html;

}

