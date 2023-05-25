import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa"
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true
  },
  plugins: [vue(), VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
    },
    menifest: {
      name: "Music App",
      theme_color: "#ff5e3a",
      icons: [
        {
          src: "assests/img/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        }
      ]
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,jpg,}"]
    }
  }),
    // visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
