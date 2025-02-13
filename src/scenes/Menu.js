class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    init() {}

    preload() {}

    create() {
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '36px',
            color: '#ffe135',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // this.skybox = this.add.tileSprite(0, 0, w, h, 'sky').setOrigin(0,0)
        this.add.rectangle(centerX, centerY, w, h, 0x87ceeb)
        this.add.text(centerX, centerY / 2, 'INFINITE SKY', titleConfig).setOrigin(0.5)

        // Menu buttons
        new Button(this, centerX, centerY * 5/4, 'Play', () => this.scene.start('playScene'));
        new Button(this, centerX, centerY * 6/4, 'Options', () => this.scene.start('optionsScene'));
        new Button(this, centerX, centerY * 7/4, 'Credits', () => this.scene.start('creditsScene'));
    }

    update() {
        // this.skybox.tilePositionY += 5
    }
}