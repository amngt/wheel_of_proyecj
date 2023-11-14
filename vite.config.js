// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
 build: {
   rollupOptions: {
     input: {
       home: resolve(__dirname, 'index.html'),
       player: resolve(__dirname, 'src/pages/players/players.html'),
       results: resolve(__dirname, 'src/pages/results/results.html'),
  
     },
   },
 },

  
})
