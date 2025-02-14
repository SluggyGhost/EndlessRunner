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
        this.load.image('instructions', 'sprites/instructions.png')
        this.load.image('player', 'sprites/skydiver.png')
        this.load.image('sky', 'sprites/skybox.png')
        this.load.image('balloon', 'sprites/Balloon.png')
        this.load.image('blimp', 'sprites/blimp.png')
        this.load.image('cloud1', 'sprites/cloud1.png')
        this.load.image('cloud2', 'sprites/cloud2.png')
        this.load.spritesheet('bats', 'sprites/bats.png', {
            frameWidth: 29,
            frameHeight: 25,
        })
        this.load.image('toggleOn', 'sprites/toggleOn.png')
        this.load.image('toggleOff', 'sprites/toggleOff.png')
        // load audio assets
        this.load.audio('bgMusic', 'audio/ThreeRedHearts-Go(NoVocal).ogg')
        this.load.audio('wind', 'audio/wind.wav')
        this.load.audio('buttonClick', 'audio/button.mp3')
        this.load.audio('flap', 'audio/flapping-wings.mp3')
        this.load.audio('whoosh', 'audio/whoosh.mp3')
        this.load.audio('slap', 'audio/slap.mp3')
        this.load.audio('gameOver', 'audio/game-over.mp3')
        
        // load font(s)
    }

    create() {
        // check for local storage browser support
        // if(window.localStorage) {
        //     console.log('Local storage supported');
        // }
        if(typeof(Storage) !== 'undefined') {
            let storedHighScore = localStorage.getItem('highScore')
            if(storedHighScore !== null) {
                highScore = parseInt(storedHighScore)
            }
        }

        // go to Menu scene
        this.scene.start('menuScene')
    }

    update() {}
}