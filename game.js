let viewedOpening = true;
// based on solution at https://www.slingacademy.com/article/saving-user-preferences-and-applying-them-to-the-dom-with-javascript/
let muteMusic = localStorage.getItem('muteMusic');
let muteSFX = localStorage.getItem('muteSFX');
console.log(muteMusic);
console.log(muteSFX);

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
        this.scene.start('mainlevel2');
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
        this.menumusic.setVolume(0.5);
        this.menumusic.play();
        if (muteMusic == true){
            this.menumusic.setMute(true);
        }
        else {
            this.menumusic.setMute(false);
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
        this.fsbutton = this.add.existing(new MenuButton(this, 400, 300));
        this.fsbutton.on('pointerdown', () => {
            if(this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        })
        this.fslabel = this.add.text(350, 300, 'Fullscreen');

        this.mutebutton = this.add.existing(new MenuButton(this, 400, 100));
        this.mutebutton.on('pointerdown', () => {
            muteMusic = !muteMusic;
            localStorage.setItem('muteMusic', muteMusic);
            console.log(muteMusic);
        });
        this.add.text(350, 100, "Mute Music");

        
        this.sfxbutton = this.add.existing(new MenuButton(this, 400, 200));
        this.sfxbutton.on('pointerdown', () => {
            muteSFX = !muteSFX;
            localStorage.setItem('muteSFX', muteSFX);
        });
        this.add.text(350, 200, "Mute SFX");

        this.menuButton = this.add.existing(new MenuButton(this, 150, 500));
        this.menuButton.on('pointerdown', () => {
            this.scene.start('menu');
        })
        this.toMenu = this.add.text(130, 500, "Back");
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
        this.toMenu = this.add.text(130, 500, "Back");
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
        if (muteSFX == true) {
            this.introVideo.setMute(true);
        }
        else{
            this.introVideo.setMute(false);
        }
        this.caption = this.add.text(350, 500, '*footsteps*');
        this.caption.setAlpha(0);
        this.introVideo.on('unlocked', () => {
            this.tweens.add({
            targets: this.caption,
            alpha: 1,
            delay: 5000,
            ease: 'Quint.easeIn',
            });
        });
        this.introVideo.on('complete', () => {
           this.cameras.main.fadeOut();
           this.time.delayedCall(1000, () => {
            this.scene.start('introlevel1');
           });
        });
    }
    update() {}
}

class Button extends Phaser.GameObjects.Image {
     constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.setAlpha(0.7);
        this.setScale(0.2);
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

class Branch extends Phaser.GameObjects.Image {
    constructor(scene, x, y) {
        super(scene, x, y, 'branch');
        scene.physics.world.enable(this);
        this.body.setSize(this.body.width, this.body.halfHeight);
        this.setScale(0.15);
        this.body.allowGravity = false;
        this.body.setImmovable(true);
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
        this.load.image('arrowButton', 'arrowButton.png');
        this.load.image('settingsButton', 'settingsButton.png');
        
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
            this.bgm.setMute(false);
        }
        this.bgm.play();

        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.05);
        this.player.setCollideWorldBounds(true);

        this.leveldesc = this.add.text(100, 50, "\"Going out for a walk like this always puts my mind at ease...\"",  {wordWrap: {width: 600}});
        this.tweens.add({
            targets: this.leveldesc,
            alpha: 0,
            duration: 3000,
        });
        
        this.cursors = this.input.keyboard.createCursorKeys();

        this.ground = this.physics.add.image(400, 600, "ground");
        this.ground.body.allowGravity = false;
        this.ground.body.setImmovable(true);

        this.leftButton = this.add.existing(new Button(this, 100, 525, 'arrowButton'));
        this.leftButton.setAngle(270);
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.upButton = this.add.existing(new Button(this, 725, 525, 'arrowButton'));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 250, 525, 'arrowButton'));
        this.rightButton.setAngle(90);
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })



        this.physics.add.collider(this.player, this.ground);

        this.settings = this.add.existing(new Button(this, 750, 50, 'settingsButton'));
        this.settings.on('pointerdown', () => {
            this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.launch('settingsingame', {prevKey: 'introlevel1'});
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

        if (this.bgm.isPaused) {
            this.bgm.resume();
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
        this.fsbutton = this.add.existing(new MenuButton(this, 400, 300));
        this.fsbutton.on('pointerdown', () => {
            if(this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        })
        this.fslabel = this.add.text(350, 300, 'Fullscreen');

        this.mutebutton = this.add.existing(new MenuButton(this, 400, 100));
        this.mutebutton.on('pointerdown', () => {
            muteMusic = !muteMusic;
            localStorage.setItem('muteMusic', muteMusic);
            console.log(muteMusic);
        });
        this.add.text(350, 100, "Mute Music");

        
        this.sfxbutton = this.add.existing(new MenuButton(this, 400, 200));
        this.sfxbutton.on('pointerdown', () => {
            muteSFX = !muteSFX;
            localStorage.setItem('muteSFX', muteSFX);
        });
        this.add.text(350, 200, "Mute SFX");

        this.menuButton = this.add.existing(new MenuButton(this, 150, 500));
        this.menuButton.on('pointerdown', () => {
            this.scene.start('menu');
        })
        this.toMenu = this.add.text(115, 500, "To Menu");

        this.back = this.add.existing(new MenuButton(this, 650, 500));
        this.back.on('pointerdown', () => {
            this.scene.run(this.prevKey);
            this.scene.stop('settingsingame');
        });
        this.backText = this.add.text(630, 500, "Back");
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
        this.load.image('forest', 'forestbg.jpg');
        this.load.audio('itemFound', 'itemfound.wav');
        this.load.image('arrowButton', 'arrowButton.png');
        this.load.image('settingsButton', 'settingsButton.png');
        
    }
    create() {
        this.totalItems = 0;
        this.itemsFound = 0;

        this.cameras.main.filters.external.addVignette(0.5, 0.5, 1, 0.1, 0xB0E4F7);

        this.menubg = this.add.image(400, 100, 'forest');
        this.menubg.setScale(1.1);

        let first = this.scene.get('introlevel1');
        this.bgm = first.sound.get('levelbgm');

        this.itemSFX = this.sound.add('itemFound');
        this.itemSFX.setVolume(0.5);
        if (muteSFX == true) {
            this.itemSFX.setMute(true);
        }
        else {
            this.itemSFX.setMute(false);
        }

        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.05);
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

        this.doodle = this.add.existing(new PastItem(this, 400, 400, 'doodle', 'An old doodle from a few years ago of a somewhat familiar character. How did that get here?'));
        this.doodle.setScale(0.05);

        this.leftButton = this.add.existing(new Button(this, 100, 525, 'arrowButton'));
        this.leftButton.setAngle(270);
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.upButton = this.add.existing(new Button(this, 725, 525, 'arrowButton'));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 250, 525, 'arrowButton'));
        this.rightButton.setAngle(90);
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.itemdesc = this.add.text(100, 50, this.doodle.description,  {wordWrap: {width: 600}});
        this.itemdesc.setAlpha(0);
        this.sfxDesc = this.add.text(this.doodle.x - 50, this.doodle.y - 50, '*picks up item*');
        this.sfxDesc.setAlpha(0);

        this.physics.add.overlap(this.player, this.doodle, () => {
            if (this.doodle.found == false) {
                this.doodle.found = true;
                this.itemsFound++;
                this.itemSFX.play();
                this.sfxDesc.setAlpha(1);
                this.tweens.add({
                    targets: this.sfxDesc,
                    alpha: 0,
                    duration: 500,
                    delay: 500,
                });
            }
            this.itemdesc.setAlpha(1);
            this.tweens.add({
                targets: this.itemdesc,
                alpha: 0,
                duration: 3000,
                delay: 1000,
            });
        });

        this.physics.add.collider(this.player, this.ground);
        
        this.settings = this.add.existing(new Button(this, 750, 50, 'settingsButton'));
        this.settings.on('pointerdown', () => {
            this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.launch('settingsingame', {prevKey: 'introlevel2'});
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

        if (this.bgm.isPaused) {
            this.bgm.resume();
        }
    
        
    }

}

class IntroLevel3 extends Phaser.Scene {
    constructor() {
        super('introlevel3');
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("player", "player.png"); 
        this.load.image("ground", "ground.png");
        this.load.image('forest', 'forestbg.jpg');
        this.load.image('arrowButton', 'arrowButton.png');
        this.load.image('settingsButton', 'settingsButton.png');
        this.load.image('doodle', 'objects/doodle.png');
        this.load.image('branch', 'objects/treebranch.png');
        this.load.image('trunk', 'objects/treetrunk.png');
        this.load.image('portal', 'objects/portal.png');
        this.load.audio('itemFound', 'itemfound.wav');
        this.load.audio('portalSFX', 'nextarea.flac');
    }
    create() {
        this.totalItems = 0;
        this.itemsFound = 0;

        this.cameras.main.filters.external.addVignette(0.5, 0.5, 1, 0.15, 0xB0E4F7);

        this.menubg = this.add.image(400, 100, 'forest');
        this.menubg.setScale(1.1);

        let first = this.scene.get('introlevel1');
        this.bgm = first.sound.get('levelbgm');

        this.itemSFX = this.sound.add('itemFound');
        this.itemSFX.setVolume(0.5);
        if (muteSFX == true) {
            this.itemSFX.setMute(true);
        }
        else {
            this.itemSFX.setMute(false);
        }

        this.portalSFX = this.sound.add('portalSFX');
        this.portalSFX.setVolume(0.2);
        if (muteSFX == true) {
            this.portalSFX.setMute(true);
        }
        else {
            this.portalSFX.setMute(false);
        }

        this.portal = this.physics.add.image(700, 225, 'portal');
        this.portal.setScale(0.1);
        this.portal.body.allowGravity = false;
        this.portal.body.setImmovable(true);

        
        this.trunk = this.add.image(300, 300, 'trunk');
        this.trunk.setScale(0.5);
        
        this.branch = this.add.existing(new Branch(this, 425, 350));
        this.branch.flipX = true;

        this.branch2 = this.add.existing(new Branch(this, 200, 250));

        this.cursors = this.input.keyboard.createCursorKeys();

        this.ground = this.physics.add.image(400, 600, "ground");
        this.ground.body.allowGravity = false;
        this.ground.body.setImmovable(true);

        this.doodle = this.add.existing(new PastItem(this, 50, 200, 'doodle', 'Another old doodle. It seems to feature a character that you don\'t care for all that much, and it\'s fairly rough.'));
        this.doodle.setScale(0.05);

        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.05);
        this.player.setCollideWorldBounds(true);

        this.leveldesc = this.add.text(100, 50, "\"The area looks the same as usual, but at the same time it feels a lot stranger. Hopefully whatever I've gotten myself into ends up being worth it in the end.\"", {wordWrap: {width: 600}});
        this.tweens.add({
            targets: this.leveldesc,
            alpha: 0,
            duration: 3000,
        });
        

        this.leftButton = this.add.existing(new Button(this, 100, 525, 'arrowButton'));
        this.leftButton.setAngle(270);
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.upButton = this.add.existing(new Button(this, 725, 525, 'arrowButton'));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 250, 525, 'arrowButton'));
        this.rightButton.setAngle(90);
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.itemdesc = this.add.text(100, 50, this.doodle.description,  {wordWrap: {width: 600}});
        this.itemdesc.setAlpha(0);
        this.sfxDesc = this.add.text(this.doodle.x - 50, this.doodle.y - 50, '*picks up item*');
        this.sfxDesc.setAlpha(0);
        this.portalsfxDesc = this.add.text(this.portal.x - 75, this.portal.y - 100, '*cartoon warp sfx*');
        this.portalsfxDesc.setAlpha(0);

        this.physics.add.overlap(this.player, this.doodle, () => {
            if (this.doodle.found == false) {
                this.doodle.found = true;
                this.itemsFound++;
                this.itemSFX.play();
                this.sfxDesc.setAlpha(1);
                this.tweens.add({
                    targets: this.sfxDesc,
                    alpha: 0,
                    duration: 500,
                    delay: 500,
                });
            }
            this.itemdesc.setAlpha(1);
            this.tweens.add({
                targets: this.itemdesc,
                alpha: 0,
                duration: 3000,
                delay: 1000,
            });
        });

        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.branch);
        this.physics.add.collider(this.player, this.branch2);
        
        this.settings = this.add.existing(new Button(this, 750, 50, 'settingsButton'));
        this.settings.on('pointerdown', () => {
            this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.launch('settingsingame', {prevKey: 'introlevel3'});
        });

        this.physics.add.overlap(this.player, this.portal, () => {
            if(this.itemsFound == this.totalItems) {
                this.portal.disableBody();
                this.add.text(100, 50, "You travel deeper into the past...");
                this.portalSFX.play();
                this.portalsfxDesc.setAlpha(1);
                this.cameras.main.fadeOut();
                this.time.delayedCall(1500, () => {
                    this.scene.start('mainlevel1');
                });
            }
            else {
                this.portaldesc = this.add.text(100, 50, "This portal seems to lead further into the past. Maybe if you get more in tune with your past, you can go through...", {wordWrap: {width: 600}});
            }

            this.tweens.add({
                targets: this.portaldesc,
                alpha: 0,
                duration: 3000,
                delay: 1000,
            });
        });
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

        if (this.bgm.isPaused) {
            this.bgm.resume();
        }
    
    }

}

class MainLevel1 extends Phaser.Scene {
    constructor() {
        super('mainlevel1');
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("player", "player.png"); 
        this.load.image("ground", "ground.png");
        this.load.image('forest', 'forestbg.jpg');
        this.load.image('arrowButton', 'arrowButton.png');
        this.load.image('settingsButton', 'settingsButton.png');
        this.load.image('pins', 'objects/pins.png');
        this.load.image('merchshirt', 'objects/merchshirt.png');
        this.load.image('branch', 'objects/treebranch.png');
        this.load.image('trunk', 'objects/treetrunk.png');
        this.load.image('portal', 'objects/portal.png');
        this.load.audio('itemFound', 'itemfound.wav');
        this.load.audio('portalSFX', 'nextarea.flac');
    }
    create() {

        this.totalItems = 0;
        this.itemsFound = 0;

        this.cursors = this.input.keyboard.createCursorKeys();

        this.menubg = this.add.image(400, 100, 'forest');
        this.menubg.setScale(1.1);

        let first = this.scene.get('introlevel1');
        this.bgm = first.sound.get('levelbgm');

        this.cameras.main.filters.external.addVignette(0.5, 0.5, 1, 0.25, 0xB0E4F7);

        this.itemSFX = this.sound.add('itemFound');
        this.itemSFX.setVolume(0.5);
        if (muteSFX == true) {
            this.itemSFX.setMute(true);
        }
        else {
            this.itemSFX.setMute(false);
        }

        this.portalSFX = this.sound.add('portalSFX');
        this.portalSFX.setVolume(0.2);
        if (muteSFX == true) {
            this.portalSFX.setMute(true);
        }
        else {
            this.portalSFX.setMute(false);
        }

        this.trunk = this.add.image(300, 300, 'trunk');
        this.trunk.setScale(0.5);
        
        this.branch = this.add.existing(new Branch(this, 425, 350));
        this.branch.flipX = true;

        this.branch5 = this.add.existing(new Branch(this, 425, 150));
        this.branch5.flipX = true;

        this.branch2 = this.add.existing(new Branch(this, 200, 250));

        this.trunk2 = this.add.image(800, 300, 'trunk');
        this.trunk2.setScale(0.5);
        
        this.branch3 = this.add.existing(new Branch(this, 925, 350));
        this.branch3.flipX = true;

        this.branch4 = this.add.existing(new Branch(this, 700, 250));

        this.pins = this.add.existing(new PastItem(this, 50, 200, 'pins', 'Pins from some old event you went to. You remember being thrilled to get these, but as of now you don\'t think much of them.'));
        this.pins.setScale(0.05);

        this.merchshirt = this.add.existing(new PastItem(this, 400, 100, 'merchshirt', 'A shirt featuring that character you doodled earlier, likely from an event. Were they some favorite to you?'));
        this.merchshirt.setScale(0.05);

        this.ground = this.physics.add.image(400, 600, "ground");
        this.ground.body.allowGravity = false;
        this.ground.body.setImmovable(true);

        this.leveldesc = this.add.text(100, 50, "\"Why is the forest littered with things I hardly remember anyway? It's all just embarrassing in the end. I guess the same could be said about a lot of my current things, though...\"", {wordWrap: {width: 600}});
        this.tweens.add({
            targets: this.leveldesc,
            alpha: 0,
            duration: 3000,
        });

         
        this.portal = this.physics.add.image(700, 350, 'portal');
        this.portal.setScale(0.1);
        this.portal.body.allowGravity = false;
        this.portal.body.setImmovable(true);

        
        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.05);
        this.player.setCollideWorldBounds(true);

        this.leftButton = this.add.existing(new Button(this, 100, 525, 'arrowButton'));
        this.leftButton.setAngle(270);
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.upButton = this.add.existing(new Button(this, 725, 525, 'arrowButton'));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 250, 525, 'arrowButton'));
        this.rightButton.setAngle(90);
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        
        this.settings = this.add.existing(new Button(this, 750, 50, 'settingsButton'));
        this.settings.on('pointerdown', () => {
            this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.launch('settingsingame', {prevKey: 'mainlevel1'});
        });

        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.branch);
        this.physics.add.collider(this.player, this.branch2);
        this.physics.add.collider(this.player, this.branch3);
        this.physics.add.collider(this.player, this.branch4);
        this.physics.add.collider(this.player, this.branch5);

        this.itemdesc = this.add.text(100, 50, this.pins.description,  {wordWrap: {width: 600}});
        this.itemdesc.setAlpha(0);
        this.itemdesc2 = this.add.text(100, 50, this.merchshirt.description,  {wordWrap: {width: 600}});
        this.itemdesc2.setAlpha(0);
        this.sfxDesc = this.add.text(this.pins.x - 50, this.pins.y - 50, '*picks up item*');
        this.sfxDesc.setAlpha(0);
        this.sfxDesc2 = this.add.text(this.merchshirt.x - 75, this.merchshirt.y + 30, '*picks up item*');
        this.sfxDesc2.setAlpha(0);
        this.portalsfxDesc = this.add.text(this.portal.x - 75, this.portal.y - 100, '*cartoon warp sfx*');
        this.portalsfxDesc.setAlpha(0)

        this.physics.add.overlap(this.player, this.pins, () => {
            if (this.pins.found == false) {
                this.pins.found = true;
                this.itemsFound++;
                this.itemSFX.play();
                this.sfxDesc.setAlpha(1);
                this.tweens.add({
                    targets: this.sfxDesc,
                    alpha: 0,
                    duration: 500,
                    delay: 500,
                });
            }
            this.itemdesc.setAlpha(1);
            this.tweens.add({
                targets: this.itemdesc,
                alpha: 0,
                duration: 3000,
                delay: 1000,
            });
        });

         this.physics.add.overlap(this.player, this.merchshirt, () => {
            if (this.merchshirt.found == false) {
                this.merchshirt.found = true;
                this.itemsFound++;
                this.itemSFX.play();
                this.sfxDesc2.setAlpha(1);
                this.tweens.add({
                    targets: this.sfxDesc2,
                    alpha: 0,
                    duration: 500,
                    delay: 500,
                });
            }
            this.itemdesc2.setAlpha(1);
            this.tweens.add({
                targets: this.itemdesc2,
                alpha: 0,
                duration: 3000,
                delay: 1000,
            });
        });

        this.physics.add.overlap(this.player, this.portal, () => {
            if(this.itemsFound == this.totalItems) {
                this.portal.disableBody();
                this.add.text(100, 50, "You travel deeper into the past...");
                this.portalSFX.play();
                this.portalsfxDesc.setAlpha(1);
                this.cameras.main.fadeOut();
                this.time.delayedCall(1500, () => {
                    this.scene.start('mainlevel2');
                });
            }
            else {
                this.portaldesc = this.add.text(100, 50, "This portal seems to lead further into the past. Maybe if you get more in tune with your past, you can go through...", {wordWrap: {width: 600}});
            }

            this.tweens.add({
                targets: this.portaldesc,
                alpha: 0,
                duration: 3000,
                delay: 1000,
            });
        });

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


        /* if (this.bgm.isPaused) {
            this.bgm.resume();
        }
        */

    }

}

class MainLevel2 extends Phaser.Scene {
    constructor() {
        super('mainlevel2');
    }

    preload() {
        this.load.path = "assets/";
        this.load.image("player", "player.png"); 
        this.load.image("ground", "ground.png");
        this.load.image('forest', 'forestbg.jpg');
        this.load.image('arrowButton', 'arrowButton.png');
        this.load.image('settingsButton', 'settingsButton.png');
        this.load.image('branch', 'objects/treebranch.png');
        this.load.image('trunk', 'objects/treetrunk.png');
        this.load.image('portal', 'objects/portal.png');
        this.load.audio('itemFound', 'itemfound.wav');
        this.load.audio('portalSFX', 'nextarea.flac');
    }
    create() {
        let first = this.scene.get('introlevel1');
        this.bgm = first.sound.get('levelbgm');
        this.add.text(100, 100, "gameplay: more complex object placements with obstacles");

        this.cameras.main.filters.external.addVignette(0.5, 0.5, 1, 0.3, 0xB0E4F7);

        this.itemSFX = this.sound.add('itemFound');
        this.itemSFX.setVolume(0.5);
        if (muteSFX == true) {
            this.itemSFX.setMute(true);
        }
        else {
            this.itemSFX.setMute(false);
        }

        this.portalSFX = this.sound.add('portalSFX');
        this.portalSFX.setVolume(0.2);
        if (muteSFX == true) {
            this.portalSFX.setMute(true);
        }
        else {
            this.portalSFX.setMute(false);
        
        }
        this.cursors = this.input.keyboard.createCursorKeys();

        this.menubg = this.add.image(400, 100, 'forest');
        this.menubg.setScale(1.1);

        this.trunk = this.add.image(0, 225, 'trunk');
        this.trunk.setScale(0.35);

        this.trunk = this.add.image(300, 225, 'trunk');
        this.trunk.setScale(0.35);

        this.trunk = this.add.image(700, 225, 'trunk');
        this.trunk.setScale(0.35);

        this.branches = this.physics.add.staticGroup();
        this.branch = this.add.existing(new Branch(this, 400, 300));
        this.branch.flipX = true;
        this.branch.setScale(0.1);
        this.branch2 = this.add.existing(new Branch(this, 250, 200));
        this.branch2.setScale(0.1);
        this.branch3 = this.add.existing(new Branch(this, 625, 175));
        this.branch3.setScale(0.1);
        this.branch4 = this.add.existing(new Branch(this, 775, 275));
        this.branch4.flipX = true;
        this.branch4.setScale(0.1);
        this.branch5 = this.add.existing(new Branch(this, 600, 375));
        this.branch5.setScale(0.1);
        this.branch6 = this.add.existing(new Branch(this, 100, 350));
        this.branch6.flipX = true;
        this.branch6.setScale(0.1);
        this.branch7 = this.add.existing(new Branch(this, 75, 150));
        this.branch7.flipX = true;
        this.branch7.setScale(0.1);
        this.branch8 = this.add.existing(new Branch(this, 400, 85));
        this.branch8.flipX = true;

        this.branches.add(this.branch);
        this.branches.add(this.branch2);
        this.branches.add(this.branch3);
        this.branches.add(this.branch4);
        this.branches.add(this.branch5);
        this.branches.add(this.branch6);
        this.branches.add(this.branch7);
        this.branches.add(this.branch8);


        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.05);
        this.player.setCollideWorldBounds(true);

        this.portal = this.physics.add.image(75, 75, 'portal');
        this.portal.setScale(0.1);
        this.portal.body.allowGravity = false;
        this.portal.body.setImmovable(true);
        

        this.ground = this.physics.add.image(400, 600, "ground");
        this.ground.body.allowGravity = false;
        this.ground.body.setImmovable(true);

        this.leftButton = this.add.existing(new Button(this, 100, 525, 'arrowButton'));
        this.leftButton.setAngle(270);
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.upButton = this.add.existing(new Button(this, 725, 525, 'arrowButton'));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 250, 525, 'arrowButton'));
        this.rightButton.setAngle(90);
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        
        this.settings = this.add.existing(new Button(this, 750, 50, 'settingsButton'));
        this.settings.on('pointerdown', () => {
            //this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.launch('settingsingame', {prevKey: 'mainlevel2'});
        });

        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.branches);

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
        /*if (this.bgm.isPaused) {
            this.bgm.resume();
        }*/
    }


}

class FinalLevel extends Phaser.Scene {
    constructor() {
        super('finallevel');
    }

    preload() {this.load.path = "assets/";
        this.load.image("player", "player.png"); 
        this.load.image("ground", "ground.png");
        this.load.audio("levelbgm", "levelbg.wav");
        this.load.image('arrowButton', 'arrowButton.png');
        this.load.image('settingsButton', 'settingsButton.png');
        this.load.image('doodle', 'objects/doodle.png');
        this.load.image('portal', 'objects/portal.png');
        this.load.audio('itemFound', 'itemfound.wav');
        this.load.audio('portalSFX', 'nextarea.flac');}
    create() {
        this.add.text(50, 100, "plays out like normal level at first, but \ncharacter has to confront younger self");
        this.add.text(100, 200, "press 1 for ending 1, press 2 for ending 2");
        this.menubg = this.add.image(400, 100, 'forest');
        this.menubg.setScale(1.1);
        this.input.keyboard.on('keydown-ONE', () => {
            this.scene.start('ending1');
        })
        this.input.keyboard.on('keydown-TWO', () => {
            this.scene.start('ending2');
        })
        this.cursors = this.input.keyboard.createCursorKeys();


        this.player = this.physics.add.image(100, 410, "player");
        this.player.setScale(0.05);
        this.player.setCollideWorldBounds(true);

        this.ground = this.physics.add.image(400, 600, "ground");
        this.ground.body.allowGravity = false;
        this.ground.body.setImmovable(true);

        this.leftButton = this.add.existing(new Button(this, 100, 525, 'arrowButton'));
        this.leftButton.setAngle(270);
        this.leftButton.on("pointerdown", () => {
            this.player.setVelocityX(-150);
            //based off solution at https://labs.phaser.io/phaser4-view.html?src=src%5Ctransform%5Cflip%20x.js&return=phaser4-index.html%3Fpath%3Daudio%252FWeb%2520Audio
            this.player.flipX = true;
        })
        this.leftButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        this.upButton = this.add.existing(new Button(this, 725, 525, 'arrowButton'));
        this.upButton.on("pointerdown", () => {
            this.player.setVelocityY(-250);
        });

        this.rightButton = this.add.existing(new Button(this, 250, 525, 'arrowButton'));
        this.rightButton.setAngle(90);
        this.rightButton.on("pointerdown", () => {
            this.player.setVelocityX(150);
            this.player.flipX = false;
        })
        this.rightButton.on("pointerup", () => {
            this.player.setVelocityX(0);
        })

        
        this.settings = this.add.existing(new Button(this, 750, 50, 'settingsButton'));
        this.settings.on('pointerdown', () => {
            this.bgm.pause();
            this.scene.sleep(this.key);
            this.scene.launch('settingsingame', {prevKey: 'mainlevel2'});
        });

        this.physics.add.collider(this.player, this.ground);
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
    }
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
    scene: [Logo, Menu, Settings, SettingsIngame, Credits, Intro, IntroLevel1, IntroLevel2, IntroLevel3, MainLevel1, MainLevel2, FinalLevel, Ending1, Ending2],
}

let game = new Phaser.Game(config);
