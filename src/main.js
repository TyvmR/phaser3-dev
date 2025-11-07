import Phaser from 'phaser';
import MainScene from './scenes/MainScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'game',
  scene: [MainScene]
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
  window.game = game; // 方便调试
});
