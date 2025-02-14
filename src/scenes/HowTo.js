class HowTo extends Phaser.Scene {
    constructor() {
        super('howToScene')
    }

    init() {}

    preload() {}

    create() {
        this.add.rectangle(centerX, centerY, w, h, 0x87ceeb)
        this.instructions = this.add.sprite(centerX, centerY, 'instructions')
        this.returnButton = new Button(this, centerX, centerY * 7/4, 'Return to Menu', () => {
            this.scene.start('menuScene')
        })
    }

    update() {}
}