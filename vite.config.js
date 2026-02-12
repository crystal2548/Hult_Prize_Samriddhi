import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // This splits your code into smaller, more manageable pieces
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Further split large libraries if needed
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('antd')) return 'vendor-antd';

            return 'vendor'; // All other node_modules go here
          }
        },
      },
    },
    // Optional: Increase the warning limit slightly if you're okay with larger chunks
    chunkSizeWarningLimit: 600,
  },
})