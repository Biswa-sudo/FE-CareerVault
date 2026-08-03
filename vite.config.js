import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/bentureai/api': {
  //       target: 'http://127.0.0.1:8000',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // This splits React/third-party libs into a separate file
          }
        }
      }
    }
  }
})