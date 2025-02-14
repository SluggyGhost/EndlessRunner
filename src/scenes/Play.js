class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {
        this.clock = 0
        this.newHighScore = false
        this.spawnRate = 500
    }

    preload() {}

    create() {
        // Skybox
        this.skybox = this.add.tileSprite(0, 0, w, h, 'sky').setOrigin(0,0)

        // Enable physics for the player
        this.player = this.physics.add.sprite(centerX, centerY, 'player')
        this.player.setSize(this.player.width * 0.8, this.player.height * 0.8)
        this.player.setCollideWorldBounds(true)

        // Create an obstacle group
        this.obstacles = this.physics.add.group()

        // Add collider between player and obstacles
        this.physics.add.collider(this.player, this.obstacles, this.hitObstacle, null, this)

        // // Randomly spawn obstacles
        // this.time.addEvent({
        //     delay: spawnRate,
        //     callback: this.spawnObstacle,
        //     callbackScope: this,
        //     loop: true
        // })

        // Display the clock in the top right
        this.clockText = this.add.text(this.cameras.main.width - h/10, 20, '0s', {
            fontSize: '24px',
            fill: '#FFF'
        }).setOrigin(1, 0);
        
        // Add event listener for mouse movement
        this.input.on('pointermove', (pointer) => {
            // Move the player toward the pointer position
            this.physics.moveTo(this.player, pointer.x, pointer.y, 300)
        })

        // Start counting time
        this.startClock()
        // this.time.addEvent({
        //     delay: 1000,
        //     callback: () => {
        //         this.clock++
        //         this.clockText.setText(this.clock + 's')
        //     },
        //     loop: true
        // })
    }

    update() {
        this.skybox.tilePositionY += 10

        // Stop player movement when close enough to cursor
        if(Phaser.Math.Distance.Between(this.player.x, this.player.y, this.input.x, this.input.y) < 10) {
            this.player.body.setVelocity(0)
        }

        // Remove obstacles that move above the screen
        this.obstacles.children.iterate((obstacle) => {
            if(obstacle && obstacle.y < -50) {
                obstacle.destroy()
            }
        })
    }

    spawnObstacle() {
        // List of obstacle keys
        const obstacleTypes = ['balloon', 'blimp', 'bats']

        // Choose a random type
        const randomType = Phaser.Utils.Array.GetRandom(obstacleTypes)

        // Generate random x position
        const randomX = Phaser.Math.Between(-centerX, w - (h/8))

        // Create the obstacle just below the screen
        let obstacle = this.obstacles.create(randomX, h*1.2, randomType)

        // Set physics properties
        obstacle.setVelocityY(-200)
        obstacle.setVelocityX(Phaser.Math.Between(0, 100))
        if(randomType == 'bats'){
            obstacle.setVelocityX(Phaser.Math.Between(100, 200))
        }
        obstacle.setScale(2.0)
        obstacle.setSize(obstacle.width * 0.8, obstacle.height * 0.8)
        obstacle.setCollideWorldBounds(false)
    }

    hitObstacle(player, obstacle) {
        this.stopClock()

        if(this.clock > highScore) {
            highScore = this.clock
            this.newHighScore = true
            localStorage.setItem('highScore', highScore)
        }

        // console.log('Collision detected!')
        console.log(highScore)
        player.setTint(0xff0000)
        this.physics.pause()
        
        // Restart button
        this.restartButton = new Button(this, centerX, centerY * 5/4, 'Restart', () => {
            this.player.setPosition(centerX, centerY)
            this.player.setVelocity(0)
            this.player.clearTint()
            this.obstacles.clear(true, true)
            this.physics.resume()
            this.startClock()
            this.restartButton.destroy()
            this.returnButton.destroy()
        });
        
        // Return button
        this.returnButton = new Button(this, centerX, centerY * 6/4, 'Return to Menu', () => {
            this.scene.start('menuScene')
        })
    }

    startClock() {
        // Start counting time
        this.clock = 0  // reset the clock
        this.clockEvent = this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.clock++
                this.clockText.setText(this.clock + 's')
            },
            loop: true
        })

        // Start spawning objects
        this.spawnEvent = this.time.addEvent({
            delay: this.spawnRate,
            callback: this.spawnObstacle,
            callbackScope: this,
            loop: true
        })
    }

    stopClock() {
        if(this.clockEvent) {
            this.clockEvent.remove()
        }
        if(this.spawnEvent) {
            this.spawnEvent.remove()
        }
    }
}