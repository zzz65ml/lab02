import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'dist', // 构建输出目录，Vercel 默认识别 dist 目录
        assetsDir: 'assets'
    }
})