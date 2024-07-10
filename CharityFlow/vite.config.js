import { defineConfig } from "vite";


// export default defineConfig ({
//     root : './',
//     publicDir : 'src',
//     build : {
//         outDir : 'src',
        
//     },
//     css : {
//         postcss : './postcss.config.js'
//     }
// });

export default defineConfig({
    root : './',
    publicDir: 'public',
    build: {
        outDir : 'dist',
      rollupOptions: {
        input: {
          main: 'index.html',
          about: 'about.html'
        }
      }
    }
  })