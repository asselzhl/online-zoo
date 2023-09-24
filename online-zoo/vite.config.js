import { resolve } from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                donate: resolve(__dirname, 'donate/index.html')
            }
        }
    }
}