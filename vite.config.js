import { defineConfig } from 'vite';

// Vite 配置：将构建输出目录设置为 docs，适合 GitHub Pages 等场景
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs'
  }
});
