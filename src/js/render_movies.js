export async function renderMovies(movies, card_place) {
    let html = "";

    movies.forEach(movie => {

        const poster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : `/images/poster.png`;

        html += `
            <div class="movie">
                <a href="/src/cards/cards.html?id=${movie.id}&title=${encodeURIComponent(movie.title)}">
                    <img 
                        src="${poster}" 
                        alt="${movie.title}"
                        onerror="this.src='/images/poster.png'"
                    >
                </a>
            </div>
        `;
    });

    card_place.innerHTML = html;
}