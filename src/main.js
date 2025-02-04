/*****************************************************************************
 * AUTHOR: Joshua Acosta
 * CREATED: 2/3/25
 * UPDATED: 2/3/25
 *****************************************************************************/

let config = {
    type: Phaser.AUTO,
    width: 160,
    height: 90,
    pixelArt: true, // toggle for Pixel Art
    zoom: 5,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Menu, Credits, Options, Play]
}

const game = new Phaser.Game(config)

// reserve keyboard bindings

// set UI sizes