class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    init() {}

    preload() {}

    create() {
        // background
        this.add.rectangle(centerX, centerY, w, h, 0x87ceeb)

        // text
        this.add.text(centerX, centerY*2/6, 'Created by', titleConfig).setOrigin(0.5)
        this.add.text(centerX, centerY*3/6, 'Joshua Acosta', textConfig).setOrigin(0.5)
        this.add.text(centerX/2, centerY*5/6, 'Music', titleConfig).setOrigin(0.5)
        this.add.text(centerX/2, centerY*6.2/6, '"Go (No Vocals)"\nby Three Red Hearts', textConfig).setOrigin(0.5)
        this.add.text(centerX*3/2, centerY*4/6, 'SFX', titleConfig).setOrigin(0.5)
        this.add.text(centerX*3/2, centerY*5/6, 'Floraphonic', textConfig).setOrigin(0.5)
        this.add.text(centerX*3/2, centerY*6/6, 'SamsterBirdies', textConfig).setOrigin(0.5)
        this.add.text(centerX*3/2, centerY*7/6, 'SoundReality', textConfig).setOrigin(0.5)
        this.add.text(centerX*3/2, centerY*8/6, 'Neptune Ringgs', textConfig).setOrigin(0.5)

        // Return button
        this.returnButton = new Button(this, centerX, centerY * 7/4, 'Return to Menu', () => {
            this.scene.start('menuScene')
        })
    }

    update() {}
}