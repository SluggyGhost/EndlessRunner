/*********************************************************************
 * AUTHOR: Joshua Acosta
 * TITLE: 'Infinite Sky'
 * CREATED: 2/3/25
 * UPDATED: 2/13/25
 * TIME TO COMPLETE: ~30 hours
 * CREATIVE TILT:
 *  - I created a few different prefabs that used different types of
 *  saved state data, which is something I hadn't done before.
 *  - I drew all the sprite assets myself, which is the most artwork
 *      I've drawn in years.
 *  - 
 *********************************************************************/

'use strict';

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    pixelArt: true, // toggle for Pixel Art
    // zoom: 3,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Menu, HowTo, Credits, Options, Play]
}

let titleConfig = {
    fontFamily: 'Courier',
    fontSize: '36px',
    color: '#ffe135',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let textConfig = {
    fontFamily: 'Courier',
    fontSize: '24px',
    color: '#000',
}

let resultsConfig = {
    fontFamily: 'Courier',
    fontSize: '24px',
    color: '#000',
    backgroundColor: '#1e90ff',
    padding: {
        top: 5,
        bottom: 5,
    },
}

const game = new Phaser.Game(config);

// define global variables
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
var highScore = 0;  // default value (global access)
let titleHeight = 36;
let textHeight = 24;
var musicOn = true;
var sfxOn = true;