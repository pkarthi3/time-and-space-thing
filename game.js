let viewedOpening = false;

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
    preload() {}
    create() {
        this.add.text(400, 100, "A Not So Distant Past");
        
        this.gameStart = this.add.text(100, 100, "start");
        this.gameStart.setInteractive();
        this.gameStart.on("pointerdown", () => {
            if (viewedOpening = false) {
                this.scene.start('intro');
            }
            else {
                this.scene.start('introlevel1');
            }
        });

        this.gameSettings = this.add.text(100, 300, "settings");
        this.gameSettings.setInteractive();
        this.gameSettings.on("pointerdown", () => {
            this.scene.start('settings');
        });

        this.gameCredits = this.add.text(100, 500, "credits");
        this.gameCredits.setInteractive();
        this.gameCredits.on("pointerdown", () => {
            this.scene.start('credits');
        });

    }
    update() {}
}

class Settings extends Phaser.Scene {
    constructor() {
        super('settings');
    }

    preload() {}
    create() {
        this.add.text(100, 100, "music/sfx volume settings");
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
        this.add.text(100, 100, "credits go here");
        this.toMenu = this.add.text(100, 500, "back");
        this.toMenu.setInteractive();
        this.toMenu.on('pointerdown', () => {
            this.scene.start('menu');
        });
    }
    update() {}
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {}
    create() {
        this.add.text(100, 100, "opening cinematic");
        this.add.text(100, 200, "main character discusses current disconnect from life");
        this.add.text(100, 300, "ends with main character walking into forest");
        // viewedOpening = true;
        this.input.once("pointerdown", () => {
           this.scene.start('introlevel1');
        })
    }
    update() {}
}

class IntroLevel1 extends Phaser.Scene {
    constructor() {
        super('introlevel1');
    }

    preload() {}
    create() {
        this.add.text(100, 100, "intro to game world/controls, no real gameplay (press 1 to continue)");
        this.settings = this.add.text(500, 300, "settings");
        this.settings.setInteractive();
        this.settings.on('pointerdown', () => {
            this.scene.sleep(this.key);
            this.scene.start('settingsingame', {prevKey: 'introlevel1'});
        })
        this.input.keyboard.on("keydown-ONE", () => {
           this.scene.start('introlevel2');
        })
    }
    update() {}

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
            this.scene.start('menu');
        });
    }
    
}

class IntroLevel2 extends Phaser.Scene {
    constructor() {
        super('introlevel2');
    }

    preload() {}
    create() {
        this.add.text(50, 100, "slight visual differences from previous due to being in the past, \n no real gameplay");
        this.input.once("pointerdown", () => {
           this.scene.start('introlevel3');
        })
    }
    update() {}

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
    scene: [Logo, Menu, Settings, SettingsIngame, Credits, Intro, IntroLevel1, IntroLevel2, IntroLevel3, MainLevel1, MainLevel2, MainLevel3, FinalLevel, Ending1, Ending2],
}

let game = new Phaser.Game(config);
