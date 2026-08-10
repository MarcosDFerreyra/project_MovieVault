const token = import.meta.env.VITE_TMDB_READ_TOKEN;
const key = import.meta.env.VITE_OMBD_READ_key;

// empezar con el fetch de popular movies
export async function fetch_movie(url) {    
    let response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    let data = await response.json();

    return data.results ?? data;
}

export async function fetch_omdb_movie(id) {
    const movie = `https://www.omdbapi.com/?apikey=${key}&i=${id}`
    let response = await fetch(movie)
    let data = await response.json();

    return data
}