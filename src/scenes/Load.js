class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    init() {}

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();
            loadingBar.fillStyle(0xFFFFFF, 1);  // reset fill/line style
            loadingBar.fillRect(0, centerY, w * value, 5);
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        // load graphics assets
        this.load.image('player', 'sprites/diver.png')
        this.load.image('sky', 'sprites/skybox.png')
        // load audio assets
        this.load.audio('bgMusic', 'audio/ThreeRedHearts-Go(NoVocal).ogg')
        this.load.audio('wind', 'audio/wind.wav')
        this.load.audio('slap', 'audo/slap.mp3')
        // load font(s)
    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        }

        // go to Menu scene
        this.scene.start('menuScene')
    }

    update() {}
}