import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Better chunk splitting for faster loading
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'framer-motion',
            'react-intersection-observer'
          ],
          'icons': [
            'react-icons'
          ],
        },
        // Optimize chunk names for caching
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]',
      }
    },
    // Optimize CSS code splitting
    cssCodeSplit: true,
    // Set a reasonable chunk size warning threshold
    chunkSizeWarningLimit: 1000,
    // Enable source maps in production for debugging (optional)
    sourcemap: false,
    // Optimize for modern browsers
    target: 'esnext',
  },
  // Development optimizations
  server: {
    preTransformRequests: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'react-icons',
      'react-intersection-observer',
    ],
  },
})
