import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: 5173,
        strictPort: true,
        host: true,
        watch: {
            usePolling: true
        }
    },
    build: {
        rollupOptions: {
            onwarn: function (warning, warn) {
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE')
                    return;
                warn(warning);
            }
        },
        modulePreload: {
            polyfill: true
        },
        sourcemap: true
    }
});
