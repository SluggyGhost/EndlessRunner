class HowTo extends Phaser.Scene {
    constructor() {
        super('howToScene')
    }

    init() {}

    preload() {}

    create() {
        this.add.rectangle(0, 0, w, h, 0xc1b17e).setOrigin(0,0)
        this.instructions = this.add.sprite(centerX, centerY, 'instructions')
        this.returnButton = new Button(this, centerX, centerY * 7/4, 'Return to Menu', () => {
            this.scene.start('menuScene')
        })
    }

    update() {}
}