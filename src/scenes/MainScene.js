import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // 使用线上示例资源，避免提交二进制资源；后续可替换为 public/ 本地资源
    this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
  }

  create() {
    const logo = this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo');

    this.tweens.add({
      targets: logo,
      y: logo.y - 100,
      duration: 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}
