import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
const resolve = (path: string) => {
  // eslint-disable-next-line no-undef
  return join(__dirname, path)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
})
