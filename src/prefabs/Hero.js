// Hero prefab ('Hero' as in the player character)
class Hero extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame)  // call Sprite parent class
        scene.add.existing(this)            // add hero to existing scene
        scene.physics.add.existing(this)    // add physics body to scene

        this.body.setSize(this.width/2, this.height/2)
        this.body.setCollideWorldBounds(true)

        // set custom hero properties

        // initialize state machine managing hero (initial state, possible states, state args[])
        scene.heroFSM = new StateMachine('idle', {
            idle: new IdleState(),
            jump: new JumpState(),
            knockback: new KnockbackState(),
            land: new LandState(),
            roll: new RollState(),
            run: new RunState(),
        }, [scene, this])   // pass these as arguments to maintain scene/object context in the FSM
    }
}

// hero-specific state classes
class IdleState extends State {
    enter(scene, hero) {

    }

    execute(scene, hero) {
        
    }
}

class JumpState extends State {
    enter(scene, hero) {

    }

    execute(scene, hero) {
        
    }
}

class KnockbackState extends State {
    enter(scene, hero) {

    }

    execute(scene, hero) {
        
    }
}

class LandState extends State {
    enter(scene, hero) {

    }

    execute(scene, hero) {
        
    }
}

class RollState extends State {
    enter(scene, hero) {

    }

    execute(scene, hero) {
        
    }
}

class RunState extends State {
    enter(scene, hero) {

    }

    execute(scene, hero) {
        
    }
}