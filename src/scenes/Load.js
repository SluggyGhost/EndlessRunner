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
// TODO: find graphics
        // load audio assets
// TODO: find audio
        // load font(s)
        this.load.bitmapFont('digital', 'fonts/DigitalRegular.png', 'fonts/DeadRevolverDigital.json')
        this.load.bitmapFont('display', 'fonts/DisplayRegular.png', 'fonts/DeadRevolverDisplay.json')
        this.load.bitmapFont('text', 'fonts/GameRegular.png', 'fonts/DeadRevolverGame.json')
    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        }
    }

    update() {}
}