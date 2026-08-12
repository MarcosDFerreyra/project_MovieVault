const token = import.meta.env.VITE_TMDB_READ_TOKEN;
const key = import.meta.env.VITE_OMBD_READ_KEY;

// empezar con el fetch de movies
export async function fetch_movie(url) {    
    let response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    let data = await response.json();

    return data.results ?? data;
}

export async function fetch_omdb_movie(id) {
    const movie = `https://www.omdbapi.com/?apikey=${key}&i=${id}`
    let response = await fetch(movie)
    
    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    let data = await response.json();
    
    if (data.Response === "False") {
        throw new Error(data.Error);
    }

    return data
}