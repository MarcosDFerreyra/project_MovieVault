import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./index.html', import.meta.url)),
                cards: fileURLToPath(new URL('./src/cards/cards.html', import.meta.url)),
                search: fileURLToPath(new URL('./src/search/search.html', import.meta.url))
            }
        }
    }
});