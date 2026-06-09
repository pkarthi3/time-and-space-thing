classDiagram
    Phaser.GameObjects.Text <|-- Button
    Phaser.GameObjects.Image <|-- PastItem
    class Button {
        Button : setFontSize()
        Button : setInteractive()
    }
    
    class PastItem {
        PastItem : this physics.world.enable()
        PastItem : + String description
        PastItem : body.allowGravity(false)
        PastItem : body.setImmovable(true)
        PastItem : + boolean found

    }