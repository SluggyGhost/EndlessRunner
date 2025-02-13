class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    init() {}

    preload() {}

    create() {
        

        // Return button
        this.returnButton = new Button(this, centerX, centerY * 6/4, 'Return to Menu', () => {
            this.scene.start('menuScene')
        })
    }

    update() {}
}