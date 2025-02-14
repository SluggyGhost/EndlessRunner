class HowTo extends Phaser.Scene {
    constructor() {
        super('howToScene')
    }

    init() {}

    preload() {}

    create() {
        this.add.sprite(centerX, centerY, 'sky')
        this.instructions = this.add.sprite(centerX, centerY, 'instructions')
        this.returnButton = new Button(this, centerX, centerY * 7/4, 'Return to Menu', () => {
            this.scene.start('menuScene')
        })
    }

    update() {}
}