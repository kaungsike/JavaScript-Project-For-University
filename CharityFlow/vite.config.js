import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

export default defineConfig ({
    root : './',
    publicDir : 'public',
    build : {
        outDir : 'dist',
    },
    css : {
        postcss
    }
});