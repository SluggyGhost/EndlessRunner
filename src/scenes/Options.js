class Options extends Phaser.Scene {
    constructor() {
        super('optionsScene')
    }

    init() {}

    preload() {}

    create() {
        // Background
        this.add.sprite(centerX, centerY, 'sky')

        // Text
        this.add.text(centerX*6/7, centerY*3/4, 'MUSIC', textConfig).setOrigin(0.5)
        this.add.text(centerX*6/7, centerY, 'SFX', textConfig).setOrigin(0.5)

        // Toggles
        this.toggleMusic = new Toggle(this, centerX*9/7, centerY*3/4, 'toggleOn', 'toggleOff', musicOn).setScale(2.0)
        this.toggleSFX = new Toggle(this, centerX*9/7, centerY, 'toggleOn', 'toggleOff', sfxOn).setScale(2.0)

        // Reset highScore Button
        new Button(this, centerX, centerY*5/4, 'Reset HighScore', () => {
            localStorage.setItem('highScore', 0)
            highScore = 0
        })

        // Return Button
        this.returnButton = new Button(this, centerX, centerY * 7/4, 'Return to Menu', () => {
            this.scene.start('menuScene')
        })
    }

    update() {}
}