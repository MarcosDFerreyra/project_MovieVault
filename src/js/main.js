import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import { loadHeaderFooter, footerInfo } from './templates.js';

await loadHeaderFooter();

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// render header and footer

footerInfo();
