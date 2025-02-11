/*********************************************************************
 * AUTHOR: Joshua Acosta
 * TITLE: 'Infinite Sky'
 * DESC: 
 * CREATED: 2/3/25
 * UPDATED: 2/10/25
 * TIME TO COMPLETE: 
 * CREATIVE TILT:
 *********************************************************************/

'use strict';

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    pixelArt: true, // toggle for Pixel Art
    zoom: 3,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Menu, Credits, Options, Play]
}

const game = new Phaser.Game(config);

// reserve keyboard bindings

// set UI sizes

// define global variables
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
let highScore = 0;
let newHighScore = false;