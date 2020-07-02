enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const House = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const dungeon_level = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const NPC_wife = SpriteKind.create()
    export const first_level = SpriteKind.create()
    export const tree_stump = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Goomba = SpriteKind.create()
    export const Flag = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 1 1 1 1 1 9 9 9 9 9 9 9 9 
1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 1 1 1 1 1 1 1 1 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, the_hero)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flag, function (sprite, otherSprite) {
    controller.moveSprite(the_hero, 0, 0)
    the_hero.ay = 150
    if (the_hero.isHittingTile(CollisionDirection.Bottom)) {
        the_hero.setVelocity(50, 0)
        animation.runImageAnimation(
        the_hero,
        [img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`],
        50,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goomba, function (sprite, otherSprite) {
    if (sprite.vy > otherSprite.vy) {
        otherSprite.destroy(effects.spray, 500)
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    the_hero,
    [img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`,img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`],
    50,
    true
    )
})
scene.onHitWall(SpriteKind.Goomba, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
    }
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    the_hero,
    [img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`],
    50,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.rings, 100)
    music.baDing.play()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (the_hero.vy == 0) {
        the_hero.vy = -150
    }
})
let goomba_anim: animation.Animation = null
let goomba1: Sprite = null
let coin: Sprite = null
let the_hero: Sprite = null
info.setLife(3)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`4000100009090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090901010109090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090404040409090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090d090909090909090909010909090909090909090909090909090909090909090909090404090909090909090909090909090909090909090909090909090904040404090909090d09090909090909090909090909090909090909090909090909090409090909090909090909090909090909090909090109090901090909090909090909090404040404040409090909090909090909090909090909090909040409090909090909090909090909090909090909090909090404040404090909090909090909090909090909090909010909090909090909090909090904040909090909090909090909090909090901090909090909090909090909090909090909010909090909090909090909090909090909090909090909090404090909090909090909090909090909090909090909090909090909090909090909090d09090909090909090909090d0909090909090909090d09090909090909090909090909090909090909090904040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.dungeon.darkGroundNorthWest1,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter,sprites.builtin.forestTiles12,sprites.builtin.forestTiles16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7],
            TileScale.Sixteen
        ))
let flag_pole = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 5 5 5 . . . . . . . . . . . 
. 5 5 5 5 5 . . . . . . . . . . 
. 5 5 5 5 5 . . . . . . . . . . 
. 5 5 5 5 5 . . . . . . . . . . 
. . 5 5 5 . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
. . 1 1 d . . . . . . . . . . . 
e e 1 1 d e e e . . . . . . . . 
e e 1 1 d e e e . . . . . . . . 
e e e d e e e e . . . . . . . . 
e e e e e e e e . . . . . . . . 
e e e e e e e e . . . . . . . . 
e e e e e e e e . . . . . . . . 
`, SpriteKind.Flag)
tiles.placeOnTile(flag_pole, tiles.getTileLocation(58, 10))
the_hero = sprites.create(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(the_hero, 100, 0)
tiles.placeOnTile(the_hero, tiles.getTileLocation(0, 14))
the_hero.ay = 350
scene.cameraFollowSprite(the_hero)
let tree_stump_height_1_1 = sprites.create(img`
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . b e e e e e e e e e e b . . . . . . 
. . . . . . . b e e e e e e e e b . . . . . . . 
. . . . . . . . b e e e e e e b . . . . . . . . 
`, SpriteKind.tree_stump)
tiles.placeOnTile(tree_stump_height_1_1, tiles.getTileLocation(10, 14))
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 4 4 4 4 5 5 5 f . . . 
. f 5 5 4 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 4 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    [img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 4 4 4 4 5 5 5 f . . . 
. f 5 5 4 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 4 4 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 4 4 5 5 5 f . . . . 
. . f 5 5 4 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 4 4 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 5 5 4 5 5 f . . . . . 
. . . f 5 5 4 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 f . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . f 5 4 5 f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f 5 4 5 f . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 4 f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f 4 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f 4 f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f 4 f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . f 5 4 5 f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 4 5 5 5 f . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f 5 4 5 f . . . . . . 
. . . . . . f 5 f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 5 5 4 5 5 f . . . . . 
. . . f 5 5 4 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 4 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f 5 5 4 5 5 f . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . f 5 5 4 4 5 5 5 f . . . . 
. . f 5 5 4 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 4 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 4 4 5 5 5 f . . . . 
. . . . f 5 5 5 5 5 f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 4 4 4 4 5 5 5 f . . . 
. f 5 5 4 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 4 5 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 4 4 4 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, myTiles.tile0)
}
for (let value of tiles.getTilesByType(myTiles.tile7)) {
    goomba1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e . . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . e f f e f f e . . . . . 
. . . e e d f f f d e e . . . . 
. . e e e d f e f d e e e . . . 
. . e e e e e e e e e e e . . . 
. . . e e d d d d d e e . . . . 
. . . . . d d d d d . . . . . . 
. . . f f f d d d f f f . . . . 
. . . . f f f 1 f f f . . . . . 
`, SpriteKind.Goomba)
    goomba_anim = animation.createAnimation(ActionKind.Walking, 100)
    goomba_anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e . . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . e f f e f f e . . . . . 
. . . e e d f f f d e e . . . . 
. . e e e d f e f d e e e . . . 
. . e e e e e e e e e e e . . . 
. . . e e d d d d d e e . . . . 
. . . . . d d d d d . . . . . . 
. . . f f f d d d f f f . . . . 
. . . . f f f 1 f f f . . . . . 
`)
    goomba_anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e . . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . e f f e f f e . . . . . 
. . . e e d f f f d e e . . . . 
. . e e e d f e f d e e e . . . 
. . e e e e e e e e e e e . . . 
. . . e e d d d d d e e . . . . 
. . . . f f d d d f f . . . . . 
. . . f f f f 1 f f f f . . . . 
`)
    animation.attachAnimation(goomba1, goomba_anim)
    animation.setAction(goomba1, ActionKind.Walking)
    goomba1.setVelocity(-50, 0)
    goomba1.ay = 350
    tiles.placeOnTile(goomba1, value)
    tiles.setTileAt(value, myTiles.tile0)
}
