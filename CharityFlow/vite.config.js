import { defineConfig } from "vite";


export default defineConfig ({
    root : './',
    publicDir : 'src',
    build : {
        outDir : 'src',
        
    },
    css : {
        postcss : './postcss.config.js'
    }
});