import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import { loadHeaderFooter, footerInfo } from './templates.js';


// render header and footer
await loadHeaderFooter();

footerInfo();