
export function getMovieId() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    return id
}

export function getMovieQuery() {
    const params = new URLSearchParams(window.location.search)
    const query = params.get("query")
    return query
}