
export function getMovieId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id;
}

export function getMovieQuery() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    return query;
}

export function getFavorite() {
    const fave = JSON.parse(localStorage.getItem("favorites")) || [];
    return fave;
}

export function addFavorite(fave, id) {
    fave.push(id);
    localStorage.setItem("favorites", JSON.stringify(fave));
}

export function removeFavorite(fave, id) {
    const remove_fave = fave.filter(favorite => favorite !== id);
    localStorage.setItem("favorites", JSON.stringify(remove_fave));
}

export function isFavorite(fave, id) {
    return fave.includes(id);
}