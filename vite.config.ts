import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  },
  build: {
    target: 'esnext'
  },
  plugins: [react()],
  server: {
    port: 8090,
    cors: true
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@qbitui': path.resolve(__dirname, './src'),
      // '~': path.resolve(__dirname, './node_modules'),
    }
  }
});
