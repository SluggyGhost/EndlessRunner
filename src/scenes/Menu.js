class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    init() {}

    preload() {
        this.sceneWhoosh = this.sound.add('whoosh', {volume: 3, rate:3})
    }

    create() {
        this.add.sprite(centerX, centerY, 'sky')
        this.add.text(centerX, centerY / 2, 'INFINITE SKY', titleConfig).setOrigin(0.5)

        // Menu buttons
        new Button(this, centerX, centerY * 5/4, 'Play', () => {
            if(sfxOn){
                this.sceneWhoosh.play()
            }
            this.scene.start('playScene')
        });
        new Button(this, centerX, centerY * 6/4, 'Options', () => this.scene.start('optionsScene'));
        new Button(this, centerX, centerY * 7/4, 'Credits', () => this.scene.start('creditsScene'));
        new Button(this, centerX/4, centerY * 6.5/4, 'How\nto\nPlay', () => this.scene.start('howToScene'))

        // console.log(highScore)
    }

    update() {
        // this.skybox.tilePositionY += 5
    }
}