import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig } from "vite";
// import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => ({
    plugins: [
        react(),
        // viteSingleFile()
    ],
    server: {
        host: "::",
        port: 8080,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
