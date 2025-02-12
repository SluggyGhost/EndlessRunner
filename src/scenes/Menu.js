class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    init() {}

    preload() {}

    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.skybox = this.add.tileSprite(0, 0, w, h, 'sky').setOrigin(0,0)
        this.add.text(centerX, centerY, 'MAIN MENU', menuConfig).setOrigin(0.5)

        // Menu buttons
        new Button(this, 400, 250, 'Play', () => this.scene.start('playScene'));
        new Button(this, 400, 320, 'Options', () => this.scene.start('optionsScene'));
        new Button(this, 400, 390, 'Credits', () => this.scene.start('creditsScene'));
    }

    update() {
        this.skybox.tilePositionY += 5
    }
}