// 使用 CDN 全局 Phaser（在 index.html 中已经通过 <script> 加载）
// 本文件假设在 index.html 中在 Phaser 之后加载，并且 scenes 已先加载好

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: '#2d2d2d'
  // parent: 'game',
  // 使用全局注册的 MainScene（由 /src/scenes/MainScene.js 注册到 window.MainScene）
  // scene: [window.MainScene]
};

// window.addEventListener('load', () => {
  // 在没有打包器的情况下，Phaser 可通过全局变量访问
  const game = new Phaser.Game(config);
  console.log(game);
  // window.game = game; // 方便调试
// });
