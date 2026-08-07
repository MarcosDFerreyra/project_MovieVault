import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import { loadHeaderFooter, footerInfo } from './templates.js';
import { renderPopularMovies } from './cards_popular.js';
const popular_url = "https://api.themoviedb.org/3/movie/popular"
const card_popular = document.querySelector("#popular_movies")


await loadHeaderFooter();
await renderPopularMovies(popular_url, card_popular)
footerInfo();

