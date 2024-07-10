import { defineConfig } from "vite";


export default defineConfig ({
    root : './',
    publicDir : 'src',
    build : {
        outDir : 'dist',
    },
    css : {
        postcss : './postcss.config.js'
    }
});