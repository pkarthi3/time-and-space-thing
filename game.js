let viewedOpening = false;
let muteMusic = false;
let muteSFX = false;

class Logo extends Phaser.Scene {
    constructor() {
        super('logo');
    }
    preload() {
        this.load.path = "assets/";
        this.load.image('guy', 'sillyguy.png');
        this.load.image('logotext', 'sillytextnew.png');
    }
    create() {
        this.scene.start('introlevel2');
        this.sillyguy = this.add.image(400, 200, "guy");
        this.sillyguy.setScale(0.001);
        this.tweens.add({
            targets: this.sillyguy,
            angle: 360,
            scale: 0.4,
            duration: 2000,
        });

        this.sillytext = this.add.image(400, 800, "logotext");
        this.sillytext.setScale(0.5);
        this.tweens.add({
            targets: this.sillytext,
            y: 450,
            duration: 500,
            delay: 2500,
        })

        this.time.delayedCall(5000, () => {
            this.cameras.main.fadeOut();
            this.time.delayedCall(1000, () => {
                this.scene.start('menu');
            })
        })
    }
    update() {}
}

class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image('forest', 'forestbg.jpg');
        this.load.image('logo', 'gamelogo.png');
        this.load.audio('menumusic', 'menubg.wav');
    }
    create() {
        this.menubg = this.add.image(400, 300, 'forest');
        this.menubg.setScale(1.1);

        this.menumusic = this.sound.add('menumusic');
        if (muteMusic){
            this.menumusic.setMute();
        }
        else {
            if (this.menumusic.isPlaying == false){
                if(this.menumusic.isPaused == true){
                    this.menumusic.resume();
                }
                else {
                    this.menumusic.play();
                }
            }
        }
        this.logo = this.add.image(550, 150, "logo");
        this.logo.setScale(0.4);
        this.sideRect = this.add.rectangle(-400, 300, 400, 600, 0x447182, 1);
        this.tweens.add({
            targets: this.sideRect,
            x: 100,
            duration: 500,
        })

        this.button1 = this.add.rectangle(150, 100, 200, 50, 0x94B9C7);
        this.button1.setAlpha(0);
        this.label1 = this.add.text(100, 100, "Play Game");
        this.label1.setAlpha(0);
        this.tweens.add({
            targets: [this.button1, this.label1],
            alpha: 0.7,
            duration: 500,
            delay: 1000,
        });
        this.button1.setInteractive();
        this.button1.on("pointerover", () => {
            this.button1.setFillStyle(0x5892A7);
            this.tweens.chain({
                targets: [this.button1, this.label1],
                tweens: [
                    {
                        scale: 1.1,
                        duration: 250,
                    }, 
                    {
                        alpha: 1,
                        duration: 250,
                    }
                ]
            });
        });
        this.button1.on("pointerout", () => {
            this.button1.setFillStyle(0x94B9C7);
            this.tweens.chain({
                targets: [this.button1, this.label1],
                tweens: [
                    {
                        scale: 1,
                        duration: 250,
                    }, 
                    {
                        alpha: 0.7,
                        duration: 250,
                    }
                ]
            });
        })
        this.button1.on("pointerdown", () => {
            this.menumusic.pause();
            if (viewedOpening == false) {
                this.scene.start('intro');
            }
            else {
                this.scene.start('introlevel1');
            }
        })

        this.button2 = this.add.rectangle(150, 300, 200, 50, 0x94B9C7);
        this.label2 = this.add.text(100, 300, "Settings");
        this.button2.setAlpha(0);
        this.label2.setAlpha(0);
        this.tweens.add({
            targets: [this.button2, this.label2],
            alpha: 0.7,
            duration: 500,
            delay: 2000,
        });
        this.button2.setInteractive();
        this.button2.on("pointerover", () => {
            this.button2.setFillStyle(0x5892A7);
            this.tweens.chain({
                targets: [this.button2, this.label2],
                tweens: [
                    {
                        scale: 1.1,
                        duration: 250,
                    }, 
                    {
                        alpha: 1,
                        duration: 250,
                    }
                ]
            });
        })
        this.button2.on("pointerout", () => {
            this.button2.setFillStyle(0x94B9C7);
            this.tweens.chain({
                targets: [this.button2, this.label2],
                tweens: [
                    {
                        scale: 1,
                        duration: 250,
                    }, 
                    {
                        alpha: 0.7,
                        duration: 250,
                    }
                ]
            });
        })
        this.button2.on("pointerdown", () => {
            this.menumusic.pause();
            this.scene.start('settings');
        });

        this.button3 = this.add.rectangle(150, 500, 200, 50, 0x94B9C7);
        this.label3 = this.add.text(100, 500, "Credits");
        this.button3.setAlpha(0);
        this.label3.setAlpha(0);
        this.tweens.add({
            targets: [this.button3, this.label3],
            alpha: 0.7,
            duration: 500,
            delay: 3000,
        });
        this.button3.setInteractive();
        this.button3.on("pointerover", () => {
            this.button3.setFillStyle(0x5892A7);
             this.tweens.chain({
                targets: [this.button3, this.label3],
                tweens: [
                    {
                        scale: 1.1,
                        duration: 250,
                    }, 
                    {
                        alpha: 1,
                        duration: 250,
                    }
                ]
            });
        })
        this.button3.on("pointerout", () => {
            this.button3.setFillStyle(0x94B9C7);
            this.tweens.chain({
                targets: [this.button3, this.label3],
                tweens: [
                    {
                        scale: 1,
                        duration: 250,
                    }, 
                    {
                        alpha: 0.7,
                        duration: 250,
                    }
                ]
            });
        });
        this.button3.on('pointerdown', () => {
            this.menumusic.pause();
            this.scene.start('credits');
        })


    }
    update() {}
}

class Settings extends Phaser.Scene {
    constructor() {
        super('settings');
    }

    preload() {}
    create() {
        this.add.rectangle(400, 300, 800, 600, 0x447182);
        this.fsbutton = this.add.existing(new MenuButton(this, 200, 300));
        this.fsbutton.on('pointerdown', () => {
            if(this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        })
        this.fslabel = this.add.text(150, 300, 'fullscreen');

        this.mutebutton = this.add.existing(new MenuButton(this, 200, 100));
        this.mutebutton.on('pointerdown', () => {
            muteMusic = !muteMusic;
        });
        this.add.text(100, 100, "mute music");

        
        this.sfxbutton = this.add.existing(new MenuButton(this, 200, 200));
        this.sfxbutton.on('pointerdown', () => {
            muteSFX = !muteSFX;
        });
        this.add.text(100, 200, "mute SFX");

        this.toMenu = this.add.text(100, 500, "back");
        this.toMenu.setInteractive();
        this.toMenu.on('pointerdown', () => {
            this.scene.start('menu');
        })
    }
    update() {}
}

class Credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }

    preload() {}
    create() {
        this.add.rectangle(400, 300, 800, 600, 0x447182);
        this.add.text(150, 100, "credits go here");
        this.menuButton = this.add.existing(new MenuButton(this, 175, 500));
        this.toMenu = this.add.text(100, 500, "back");
        this.menuButton.on('pointerdown', () => {
            this.scene.start('menu');
        });
    }
    update() {}
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        this.load.path = "assets/";
        this.load.video('introcutscene', 'introcutscene.mp4');
    }
    create() {
        viewedOpening = true;
        this.introVideo = this.add.video(400, 300, 'introcutscene');
        this.introVideo.setScale(0.7);
        this.introVideo.play();
        this.time.delayedCall(17000, () => {
           this.scene.start('introlevel1');
        })
    }
    update() {}
}

class Button extends Phaser.GameObjects.Text {
     constructor(scene, x, y, text) {
        super(scene, x, y, text);
        this.setFontSize(50);
        this.setInteractive();
     }       
}

class PastItem extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, description) {
        super(scene, x, y, texture);
        this.description = description;
        scene.physics.world.enable(this);
        this.body.allowGravity = false;
        this.body.setImmovable(true);
        this.found = false;
        scene.totalItems++;
    }
}

class MenuButton extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y) {
        super(scene, x, y, 200, 50, 0x94B9C7);
        this.setAlpha(0.7);
        this.setInteractive();
        this.on("pointerover", () => {
            this.setFillStyle(0x5892A7);
            scene.tweens.chain({
                targets: this,
                tweens: [
                    {
                        scale: 1.1,
                        duration: 250,
                    }, 
                    {
                        alpha: 1,
                        duration: 250,
                    }
                ]
            });
        })
        
        this.on("pointerout", () => {
            this.setFillStyle(0x94B9C7);
            scene.tweens.chain({
                targets: [this, this.label],
                tweens: [
                    {
                        scale: 1,
                        duration: 250,
                    }, 
                    {
                        alpha: 0.7,
                        duration: 250,
                    }
                ]
            });
        });
    }
}

class IntroLevel1 extends Phaser.Scene {
    constructor() {
        super('introlevel1');
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("player", "player.png"); 
        this.load.image("ground", "ground.png");
        this.load.audio("levelbgm", "levelbg.wav");
        this.load.image('forest', 'forestbg.jpg');
        
    }
    create() {
        this.cameras.main.fadeIn();
        this.totalItems = 0;
        this.itemsFound = 0;

        this.menubg = this.add.image(400, 100, 'forest');
        this.menubg.setScale(1.1);
        

        this.bgm = this.sound.add('levelbgm');
        this.bgm.setLoop(true);
        if (muteMusic == true){
            this.bgm.setMute(true);
        }
        else {
            if (this.bgm.isPaused == true) {
                this.sound.resume('levelbgm');
            }
            else {
                this.bgm.play();
            }
        }

        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.035);
        this.player.setCollideWorldBounds(true);

        this.leveldesc = this.add.text(100, 50, "\"Doing this always puts my mind at ease...\"");
        this.tweens.add({
            targets: this.leveldesc,
            alpha: 0,
            duration: 3000,
        });
        
        this.cursors = this.input.keyboard.createCursorKeys();

        this.ground = this.physics.add.image(400, 600, "ground");
        this.ground.body.allowGravity = false;
        this.ground.body.setImmovable(true);

        this.leftButton = this.add.existing(new Button(this, 50, 500, "<"));
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.upButton = this.add.existing(new Button(this, 650, 500, "^"));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 150, 500, ">"));
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })



        this.physics.add.collider(this.player, this.ground);
        this.settings = this.add.existing(new Button(this, 500, 0, "settings"));
        this.settings.on('pointerdown', () => {
            this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.start('settingsingame', {prevKey: 'introlevel1'});
        })

        
    }
    update() {
        // based off example at https://labs.phaser.io/phaser4-view.html?src=src%5Cphysics%5Carcade%5Cbody%20on%20a%20path.js&return=phaser4-index.html%3Fpath%3Dphysics%252Farcade
        const { left, right, up } = this.cursors;
        if (left.isDown) {
            this.player.setVelocityX(-150);
            this.player.flipX = true;
        }
        else if (right.isDown) {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        }

        left.on("up", () => {
            this.player.setVelocityX(0);
        })

        right.on("up", () => {
            this.player.setVelocityX(0);
        })


        if (up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-250);
        }

        if (this.player.x > 750) {
            this.scene.start('introlevel2');
        }
    
    }

}

class SettingsIngame extends Phaser.Scene {
    constructor() {
        super('settingsingame');
    }
    init(data) {
        this.prevKey = data.prevKey;
    }
    preload() {}
    create() {
        this.add.rectangle(400, 300, 800, 600, 0x447182);
        this.add.text(100, 100, "settings go here");

        this.back = this.add.text(500, 500, "back");
        this.back.setInteractive();
        this.back.on('pointerdown', () => {
            this.scene.run(this.prevKey);
            this.scene.stop('settingsingame');
        });

        this.toMenu = this.add.text(100, 500, "to main menu");
        this.toMenu.setInteractive();
        this.toMenu.on('pointerdown', () => {
            this.scene.stop(this.prevKey);
            this.scene.start('menu');
        });

        this.fsbutton = this.add.existing(new MenuButton(this, 200, 300));
        this.fsbutton.on('pointerdown', () => {
            if(this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        })
        this.fslabel = this.add.text(150, 300, 'fullscreen');
    }
    
}

class IntroLevel2 extends Phaser.Scene {
    constructor() {
        super('introlevel2');
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("player", "player.png"); 
        this.load.image("doodle", "objects/doodle.png");
        this.load.image("ground", "ground.png");
        this.load.audio("levelbgm", "levelbg.wav");
        this.load.image('forest', 'forestbg.jpg');
        this.load.audio('itemFound', 'itemfound.wav');
        
    }
    create() {
        this.totalItems = 0;
        this.itemsFound = 0;

        this.menubg = this.add.image(400, 100, 'forest');
        this.menubg.setScale(1.1);

        this.bgm = this.sound.add('levelbgm');

        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.035);
        this.player.setCollideWorldBounds(true);

        this.leveldesc = this.add.text(100, 50, "\"Maybe I'm too at ease... Did I maybe wander into the wrong parts of the forest?\"", {wordWrap: {width: 600}});
        this.tweens.add({
            targets: this.leveldesc,
            alpha: 0,
            duration: 3000,
        });
        
        this.cursors = this.input.keyboard.createCursorKeys();

        this.ground = this.physics.add.image(400, 600, "ground");
        this.ground.body.allowGravity = false;
        this.ground.body.setImmovable(true);

        this.leftButton = this.add.existing(new Button(this, 50, 500, "<"));
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.doodle = this.add.existing(new PastItem(this, 400, 400, 'doodle', 'An old doodle from a few years ago of a somewhat familiar character. How did that get here?'));
        this.doodle.setScale(0.05);

        this.upButton = this.add.existing(new Button(this, 650, 500, "^"));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 150, 500, ">"));
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.physics.add.overlap(this.player, this.doodle, () => {
            if (this.doodle.found == false) {
                this.doodle.found = true;
                this.itemsFound++;
                if (muteSFX == false) {
                    this.sound.play('itemFound');
                }
            }
            this.itemdesc = this.add.text(100, 50, this.doodle.description,  {wordWrap: {width: 600}});
            this.tweens.add({
                targets: this.itemdesc,
                alpha: 0,
                duration: 3000,
                delay: 1000,
            });
        });

        this.physics.add.collider(this.player, this.ground);
        this.settings = this.add.existing(new Button(this, 500, 0, "settings"));
        this.settings.on('pointerdown', () => {
            this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.start('settingsingame', {prevKey: 'introlevel2'});
        })
    }
    update() {
        const { left, right, up } = this.cursors;
        if (left.isDown) {
            this.player.setVelocityX(-150);
            this.player.flipX = true;
        }
        else if (right.isDown) {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        }

        left.on("up", () => {
            this.player.setVelocityX(0);
        })

        right.on("up", () => {
            this.player.setVelocityX(0);
        })


        if (up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-250);
        }

        if (this.player.x > 750) {
            this.scene.start('introlevel3');
        }
    }

}

class IntroLevel3 extends Phaser.Scene {
    constructor() {
        super('introlevel3');
    }

    preload() {}
    create() {
        this.add.text(50, 100, "intro to finding past items to delve deeper into past, very basic gameplay");
        this.input.once("pointerdown", () => {
           this.scene.start('mainlevel1');
        })
    }
    update() {}

}

class MainLevel1 extends Phaser.Scene {
    constructor() {
        super('mainlevel1');
    }

    preload() {}
    create() {
        this.add.text(100, 100, "gameplay: basic object placements");
        this.input.once("pointerdown", () => {
           this.scene.start('mainlevel2');
        })
    }
    update() {}

}

class MainLevel2 extends Phaser.Scene {
    constructor() {
        super('mainlevel2');
    }

    preload() {}
    create() {
        this.add.text(100, 100, "gameplay: more complex object placements with obstacles");
        this.input.once("pointerdown", () => {
           this.scene.start('mainlevel3');
        })
    }
    update() {}

}

class MainLevel3 extends Phaser.Scene {
    constructor() {
        super('mainlevel3');
    }

    preload() {}
    create() {
        this.add.text(100, 100, "gameplay: many objects placed in complex spots");
        this.input.once("pointerdown", () => {
           this.scene.start('finallevel');
        })
    }
    update() {}

}

class FinalLevel extends Phaser.Scene {
    constructor() {
        super('finallevel');
    }

    preload() {}
    create() {
        this.add.text(50, 100, "plays out like normal level at first, but \ncharacter has to confront younger self");
        this.add.text(100, 200, "press 1 for ending 1, press 2 for ending 2");
        this.input.keyboard.on('keydown-ONE', () => {
            this.scene.start('ending1');
        })
        this.input.keyboard.on('keydown-TWO', () => {
            this.scene.start('ending2');
        })
    }
    update() {}
}

class Ending1 extends Phaser.Scene {
    constructor() {
        super('ending1');
    }

    preload() {}
    create() {
        this.add.text(50, 100, "character accepts their past self, decides to move forward in the present");
    }
    update() {}

}

class Ending2 extends Phaser.Scene {
    constructor() {
        super('ending2');
    }

    preload() {}
    create() {
        this.add.text(50, 100, "character avoids their past self, \naccepts that they'll always be running away and stays in the past");
    }
    update() {}

}



let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    //based on example solution at https://labs.phaser.io/phaser4-view.html?src=src%5Cscalemanager%5Cfull%20screen%20game.js&return=phaser4-index.html%3Fpath%3Drenderer
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true,
        }
    },
    scene: [Logo, Menu, Settings, SettingsIngame, Credits, Intro, IntroLevel1, IntroLevel2, IntroLevel3, MainLevel1, MainLevel2, MainLevel3, FinalLevel, Ending1, Ending2],
}

let game = new Phaser.Game(config);
