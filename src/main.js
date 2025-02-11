/*********************************************************************
 * AUTHOR: Joshua Acosta
 * TITLE: 'NeoNightRun'
 * DESC: 
 * CREATED: 2/3/25
 * UPDATED: 2/10/25
 * TIME TO COMPLETE: 
 * CREATIVE TILT:
 *********************************************************************/

'use strict';

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