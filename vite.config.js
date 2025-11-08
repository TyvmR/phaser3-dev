import { defineConfig } from 'vite';

// Vite 配置：将构建输出目录设置为 docs，适合 GitHub Pages 等场景
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs'
  },
  server: {
    host: true,         // 启用外部访问
    port: 3000,         // 默认服务端口
    strictPort: false,  // 自动处理端口占用
    // 注意：allowedHosts 字段无需配置
    allowedHosts: [
      '460bc851532f42baa013f469bfb2785f--3000.ap-shanghai2.cloudstudio.club']
}
});
