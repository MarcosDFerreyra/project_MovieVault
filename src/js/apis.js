const token = import.meta.env.VITE_TMDB_READ_TOKEN;

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