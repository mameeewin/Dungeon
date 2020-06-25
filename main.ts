namespace SpriteKind {
    export const Poooooortal = SpriteKind.create()
    export const Boss01 = SpriteKind.create()
    export const INFIN = SpriteKind.create()
    export const Boss02 = SpriteKind.create()
}
namespace StatusBarKind {
    export const YSGD = StatusBarKind.create()
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
c c c c c c c c c c c c c c c c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
. c . c . c . c . c . c . c . c 
c c c c c c c c c c c c c c c c 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    FUGVBG = true
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100008090909131313131313090909090905020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106030404040401010101040404040404070e0e0e0e0501010101080e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e02010b0b01060e0e0e0e0e0e`,
            img`
2 2 2 2 . . . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,myTiles.tile1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,sprites.dungeon.floorLight0,sprites.dungeon.hazardLava0,sprites.dungeon.hazardSpike,sprites.dungeon.hazardHole,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouthWest1],
            TileScale.Sixteen
        ))
})
statusbars.onZero(StatusBarKind.YSGD, function (status) {
    game.splash("Goodayyyyyyyy")
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark5, function (sprite, location) {
    game.splash("Great you have reached Boss02")
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000020202020202020a0202020202020202020202020202030a0302020202020202020202020202030a0a030202020202020202020202030a0a0a0a03020202020202020202030a0a0a0a0a0a0302020202020202030a0a0a0a0a0a0a0a030202020202030a0a0a0a050a0a0a0a030202020202030a0a0a0a0a0a0a0a0a0a03020202030a0a0a0a0a0a0a0a0a0a0a0a030203030303030303030303030303030303020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202060202020202020202`,
            img`
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
`,
            [myTiles.tile0,myTiles.tile1,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorMixed,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark1,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorLight3,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight2],
            TileScale.Sixteen
        ))
    statusbar2.destroy()
    GGSH = true
    bossable02 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f c c c c f f . . . . . . . . 
. . . . . . . f b c c c c c c b f . . . . . . . 
. . . . . . . f c c c c c c c c f . . . . . . . 
. . . . . . f a c c c c c c c c a f . . . . . . 
. . . . . . f a c c c c c c c c a f . . . . . . 
. . . . . . f a a a c c c c a a a f . . . . . . 
. . . . . . f b a b f d d f b a b f . . . . . . 
. . . . . . f c a c f c c f c a c f . . . . . . 
. . . . . . . a b c c c c c c b f . . . . . . . 
. . . . . . a a a c d b c b d f f f f . . . . . 
. . . . f c a a a c b a b a c a a a c f . . . . 
. . . . f a b a b a a a a a a b a b a f . . . . 
. . . . f b f b a a a a a a b f b f b f . . . . 
. . . . . . . . . a a a a a a . . . . . . . . . 
. . . . . . . . . . . a a a . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Boss02)
    tiles.placeOnRandomTile(bossable02, sprites.dungeon.floorDark1)
    tiles.placeOnRandomTile(Player_MANSION, sprites.dungeon.floorDark2)
    STAUSBAR = statusbars.create(100, 4, StatusBarKind.YSGD)
    STAUSBAR.setColor(14, 2, 15)
    STAUSBAR.setPosition(58, 14)
    STAUSBAR.setLabel("HP Boss", 8)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (FUGVBG == false) {
        projectile2 = sprites.createProjectileFromSprite(img`
. . . b b . . . 
. . b 9 9 b . . 
. . b 6 6 b . . 
. . b 9 9 b . . 
. . b 8 8 b . . 
. . c 8 8 c . . 
. . c 6 6 c . . 
. . . f f . . . 
`, Player_MANSION, 0, -100)
        projectile2.setKind(SpriteKind.INFIN)
    }
    if (FUGVBG == true) {
        projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . a . . . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . b b a b b . . . . . . 
. . . . . b b a b b . . . . . . 
. . . . . b b a b b . . . . . . 
. . . . . b a a b b . . . . . . 
. . . . . a a a b a . . . . . . 
. . . . . b a a b a . . . . . . 
. . . . . b a a b a . . . . . . 
. . . . . b a a b a . . . . . . 
. . . . . b a a b a . . . . . . 
. . . . . b a a b a . . . . . . 
. . . . . b a a b a . . . . . . 
. . . . . b a a b a . . . . . . 
. . . . . b a b a a . . . . . . 
. . . . . b a b a a . . . . . . 
. . . . . b a b a a . . . . . . 
. . . . . b a b a a . . . . . . 
. . . . . b a b a a . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . b a a a b . . . . . . 
. . . . . 2 5 5 5 2 . . . . . . 
. . . . 2 2 5 5 5 5 2 . . . . . 
. . . . 2 4 5 5 5 5 2 . . . . . 
. . . 2 2 4 5 5 5 5 2 . . . . . 
. . . 2 2 4 5 5 5 5 2 . . . . . 
. . . 2 2 4 4 4 4 4 2 . . . . . 
. . . . 2 4 4 4 4 4 2 . . . . . 
. . . . 2 2 4 4 4 4 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Player_MANSION, 0, -100)
        projectile2.setKind(SpriteKind.INFIN)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`100010000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a010101010101010e0101010101010101010101010101011001010101010101010707070707020101010a0a0a0a0a0a0a0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b020c0d0c090b0b0b0b0b0b`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardSpike,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonOrange,sprites.vehicle.roadVertical,myTiles.tile1],
            TileScale.Sixteen
        ))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.INFIN, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbar2.setLabel("Enemy", 5)
    statusbar2.value += -40
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100008080808080808080808080808080808080808080808080808080808080808080808020303030303030303030303030308080201010101010101010101010106080802010101010101010101010101060808020101010101010101010101010608080201010405050505050505050505080802010104080808080808080808080808020101040808080808080808080808080201010408080808080808080808080802010104080808080808080808080808020101040808080808080808080808080201010408080808080808080808080802010104080808080808080808080808020101040808080808080808080808080207010408080808080808080808`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorOpenEast,sprites.dungeon.doorOpenSouth,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.hazardLava0,myTiles.tile1],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleBlueCrystal)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    game.splash("You win first boss", "Great Job")
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100008090909111111111111090909090905020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010112010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106030404040401010101040404040404070e0e0e0e0501010101080e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e02010b0b01060e0e0e0e0e0e`,
            img`
2 2 2 2 . . . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,myTiles.tile1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,sprites.dungeon.floorLight0,sprites.dungeon.hazardLava0,sprites.dungeon.hazardSpike,sprites.dungeon.hazardHole,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
    status.destroy()
    Boss01.destroy(effects.fire, 500)
    FVVGYGYHGHG = true
})
statusbars.onZero(StatusBarKind.Magic, function (status) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020201060606060606010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020203020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202040404020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
. . . 2 . . . . . . 2 . . . . . 
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
`,
            [myTiles.tile0,myTiles.tile1,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorLockedNorth,sprites.dungeon.floorLight3,sprites.dungeon.darkGroundSouth,sprites.dungeon.floorDark5],
            TileScale.Sixteen
        ))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthWest1, function (sprite, location) {
    game.splash("Your first Enemy", "Normal")
    game.splash("BatTeam", "Normal")
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202010101010101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020203020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202040404020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
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
`,
            [myTiles.tile0,myTiles.tile1,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorLockedNorth,sprites.dungeon.floorLight3,sprites.dungeon.darkGroundSouth],
            TileScale.Sixteen
        ))
    statusbar2 = statusbars.create(40, 4, StatusBarKind.Magic)
    statusbar2.setPosition(84, 14)
    tiles.placeOnRandomTile(sprite, sprites.dungeon.floorLight3)
    ENNNNNMEMYY = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(ENNNNNMEMYY, sprites.dungeon.doorLockedNorth)
    ENNNNNMEMYY.follow(Player_MANSION, 50)
    ENNNNNMEMYY = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(ENNNNNMEMYY, sprites.dungeon.doorLockedNorth)
    ENNNNNMEMYY.follow(Player_MANSION, 20)
    ENNNNNMEMYY = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(ENNNNNMEMYY, sprites.dungeon.doorLockedNorth)
    ENNNNNMEMYY.follow(Player_MANSION, 60)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.INFIN, SpriteKind.Boss01, function (sprite, otherSprite) {
    statusbar.value += -5
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.splash("First boss", "are you ready")
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000080909090a0a0a0a0a0a09090909090502010101010101010101010101010106020101010101010101010101010101060201010101010c010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106030404040401010101040404040404070e0e0e0e0501010101080e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e0201010101060e0e0e0e0e0e0e0e0e0e02010b0b01060e0e0e0e0e0e`,
            img`
2 2 2 2 . . . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,myTiles.tile1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,sprites.dungeon.floorLight0,sprites.dungeon.hazardLava0,sprites.dungeon.hazardSpike,sprites.dungeon.hazardHole,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleRedCrystal)
    Boss01 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Boss01)
    tiles.placeOnRandomTile(Boss01, sprites.dungeon.chestOpen)
    statusbar = statusbars.create(100, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(5, 2, 10)
    statusbar.setLabel("HP Boss", 5)
    statusbar.setPosition(58, 14)
})
sprites.onOverlap(SpriteKind.INFIN, SpriteKind.Boss02, function (sprite, otherSprite) {
    sprite.destroy()
    STAUSBAR.value += -3
})
let fcoud: Sprite = null
let Vs: Sprite = null
let projectile3: Sprite = null
let vdssdfs: Sprite = null
let dvsdsdvsd: Sprite = null
let dsvvs: Sprite = null
let sdvv: Sprite = null
let sdv: Sprite = null
let ds: Sprite = null
let dc: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let ENNNNNMEMYY: Sprite = null
let Boss01: Sprite = null
let projectile2: Sprite = null
let STAUSBAR: StatusBarSprite = null
let bossable02: Sprite = null
let statusbar2: StatusBarSprite = null
let GGSH = false
let FUGVBG = false
let FVVGYGYHGHG = false
let Player_MANSION: Sprite = null
Player_MANSION = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 4 4 f f f . . . . 
. . . f f f 4 4 4 4 4 f f . . . 
. . f f f e e e e e e f f f . . 
. . f f 4 4 4 4 4 4 4 4 e f . . 
. . f e 4 f f f f f f 4 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d 5 5 d f 4 4 4 4 e f . . . 
. f 5 5 5 5 f 4 4 4 4 f 4 e . . 
. f 5 5 5 5 f 4 4 4 4 f d 4 . . 
. . f 5 5 f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(Player_MANSION)
Player_MANSION.z = 278901
scene.cameraFollowSprite(Player_MANSION)
animation.runImageAnimation(
Player_MANSION,
[img`
. . . . . . f f f f . . . . . . 
. . . . f f f 4 4 f f f . . . . 
. . . f f f 4 4 4 4 4 f f . . . 
. . f f f e e e e e e f f f . . 
. . f f 4 4 4 4 4 4 4 4 e f . . 
. . f e 4 f f f f f f 4 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d 5 5 d f 4 4 4 4 e f . . . 
. f 5 5 5 5 f 4 4 4 4 f 4 e . . 
. f 5 5 5 5 f 4 4 4 4 f d 4 . . 
. . f 5 5 f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f f f f f f . . . . 
. . f f f f 4 4 4 4 4 f f . . . 
. f f f f e e e e e e f f f . . 
. f f f 4 4 4 4 4 4 4 4 e f . . 
f . f e 4 f f f f f f 4 e f f . 
f . f f f f e e e e f f f f f . 
f f f e f b f 4 4 f b f e f f . 
f f e e 4 1 f d d f 1 4 e e f . 
f . f f f f d d d d d e e f f . 
f f d 5 5 d f 4 4 4 4 e f . f . 
f f 5 5 5 5 f 4 4 4 4 f 4 e f . 
. f 5 5 5 5 f 4 4 4 4 f d f . . 
. f f 5 5 f 4 5 5 4 4 f 4 f . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f f f f f f . . . . 
. . f f f f 4 4 4 4 4 f f . . . 
. f f f f f f f f f f f f f . . 
. f f f f 4 4 4 4 4 4 4 f f . . 
f . f f 4 f f f f f f 4 e f f . 
f . f f f f e e e e f f f f f . 
f f f e f b f 4 4 f b f e f f . 
f f f e 4 1 f d d f 1 4 e e f . 
f . f f f f d d d d d e e f f . 
f f f 5 5 d f 4 4 4 4 e f . f . 
f f f 5 5 5 f 4 4 4 4 f 4 e f . 
. f f 5 5 5 f 4 4 4 4 f d f f . 
. f f f 5 f 4 5 5 4 4 f 4 f . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f f . . . . 
`,img`
. . . . . f f f f f f f . . . . 
. . . f f f f f f f f f f f . . 
. . f f f f 4 4 4 4 4 f f . f . 
. f f f f f f f f f f f f f f . 
. f f f f 4 4 4 4 4 4 4 f f . f 
f f f f 4 f f f f f f 4 e f f f 
f f f f f f e e e e f f f f f f 
f f f e f b f 4 4 f b f e f f f 
f f f e 4 1 f d d f 1 4 e e f f 
f f f f f f d d d d d e e f f f 
f f f 5 5 d f 4 4 4 4 e f . f f 
f f f 5 5 5 f 4 4 4 4 f 4 e f . 
. f f 5 5 5 f 4 4 4 4 f d f f . 
. f f f f f 4 5 5 4 4 f f f . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f f . . . . 
`,img`
. . . . . f f f f f f f . . . . 
. . . f f f f f f f f f f f . . 
. . f f f f 4 4 4 4 4 f f . f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f . f 
f f f f f f f f f f f f e f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f 4 4 f f f f f f f 
f f f f f f f d d f f f f f f f 
f f f f f f d d d d d f f f f f 
f f f f f f f 4 4 4 f f f f f f 
f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f f . . . . 
`,img`
. . . . . f f f f f f f . . . . 
. . . f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f f . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 4 4 f f f . . . . 
. . . f f f 4 4 4 4 4 f f . . . 
. . f f f e e e e e e f f f . . 
. . f f 4 4 4 4 4 4 4 4 e f . . 
. . f e 4 f f f f f f 4 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d 5 5 d f 4 4 4 4 e f . . . 
. f 5 5 5 5 f 4 4 4 4 f 4 e . . 
. f 5 5 5 5 f 4 4 4 4 f d 4 . . 
. . f 5 5 f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`],
80,
false
)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a010101010101010f0101010101010101010101010101010101010101010101010707070707020101010a0a0a0a0a0a0a0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b02010101090b0b0b0b0b0b0b0b0b0b0b020c0d0c090b0b0b0b0b0b`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardSpike,sprites.dungeon.hazardHole,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonOrange,myTiles.tile1,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(Player_MANSION, sprites.dungeon.hazardHole)
FVVGYGYHGHG = false
FUGVBG = false
GGSH = false
game.onUpdateInterval(2000, function () {
    if (FVVGYGYHGHG == false) {
        projectile = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, -55, 100)
        dc = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, 0, 100)
        ds = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, 55, 100)
        sdv = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, 100, 0)
        sdvv = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, 100, -55)
        dsvvs = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, 100, 55)
        dvsdsdvsd = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, -100, 55)
        vdssdfs = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 2 2 2 2 5 . 
5 2 5 4 4 5 2 5 
5 2 4 2 2 4 2 5 
5 2 4 2 2 4 5 5 
5 5 5 4 4 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Boss01, -100, -55)
    }
    if (FVVGYGYHGHG == true) {
        dc.destroy()
        ds.destroy()
        dsvvs.destroy()
        dvsdsdvsd.destroy()
        sdv.destroy()
        sdvv.destroy()
        vdssdfs.destroy()
    }
})
game.onUpdateInterval(2000, function () {
    if (GGSH == true) {
        music.playTone(349, music.beat(BeatFraction.Half))
        animation.runImageAnimation(
        bossable02,
        [img`
. . . . . . f f f f . . . . . . 
. . . . f f c c c c f f . . . . 
. . . f b c c c c c c b f . . . 
. . . f c c c c c c c c f . . . 
. . f a c c c c c c c c a f . . 
. . f a c c c c c c c c a f . . 
. . f a a a c c c c a a a f . . 
. . f b a b f d d f b a b f . . 
. . f c a c f c c f c a c f . . 
. . . a b c c c c c c b f . . . 
. . a a a c d b c b d f f f f . 
f c a a a c b a b a c a a a c f 
f a b a b a a a a a a b a b a f 
f b f b a a a a a a b f b f b f 
. . . . . a a a a a a . . . . . 
. . . . . . . a a a . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f c c c c f f . . . . 
. . . f b c c c c c c b f . . . 
. . . f c c c c c c c c f . . . 
. . f a c c c c c c c c a f . . 
. . f a c c c c c c c c a f . . 
. . f a a 2 2 2 2 2 a a a f . . 
. . f b a 2 f d d 2 b a b f . . 
. . f c a 2 f c c 2 c a c f . . 
. . . a b 2 c c c 2 c b f . . . 
. . a a a 2 2 2 2 2 d f f f f . 
f c a a a c b a b a c a a a c f 
f a b a b a a a a a a b a b a f 
f b f b a a a a a a b f b f b f 
. . . . . a a a a a a . . . . . 
. . . . . . . a a a . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f c c c c f f . . . . 
. . . f b c c c c c c b f . . . 
. . . f c c c c c c c c f . . . 
. . f a c c c c c c c c a f . . 
. . f a c c 2 2 2 2 2 c a f . . 
. . f a a 2 4 4 4 4 4 2 a f . . 
. . f b a 2 4 d d f 4 2 b f . . 
. . f c a 2 4 c c f 4 2 c f . . 
. . . a b 2 4 c c c 4 2 f . . . 
. . a a a 2 4 4 4 4 4 2 f f f . 
f c a a a c 2 2 2 2 2 a a a c f 
f a b a b a a a a a a b a b a f 
f b f b a a a a a a b f b f b f 
. . . . . a a a a a a . . . . . 
. . . . . . . a a a . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f c c c c f f . . . . 
. . . f b c c c c c c b f . . . 
. . . f 2 2 2 2 2 2 2 c f . . . 
. . f 2 4 4 4 4 4 4 4 2 a f . . 
. . 2 4 5 4 4 4 4 4 5 4 2 f . . 
. . 2 4 4 5 5 5 5 5 4 4 2 f . . 
. . 2 4 4 5 f d d 5 4 4 2 f . . 
. . 2 4 4 5 f c c 5 4 4 2 f . . 
. . 2 4 4 5 c c c 5 4 4 2 . . . 
. . 2 4 4 5 5 5 5 5 4 4 2 f f . 
f c 2 4 5 4 4 4 4 4 5 4 2 a c f 
f a b 2 4 4 4 4 4 4 4 2 a b a f 
f b f b 2 2 2 2 2 2 2 f b f b f 
. . . . . a a a a a a . . . . . 
. . . . . . . a a a . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . 2 2 2 2 2 2 2 f . . . . 
. . 2 2 4 4 4 4 4 4 4 2 2 . . . 
. 2 . 4 4 4 4 4 4 4 4 4 f 2 . . 
. 2 4 4 5 5 5 5 5 5 5 4 4 2 . . 
2 4 4 5 c c c c c c c 5 4 4 2 . 
2 4 4 5 a a c c c c a 5 4 4 2 . 
2 4 4 5 a b f d d f b 5 4 4 2 . 
2 4 4 5 a c f c c f c 5 4 4 2 . 
2 4 4 5 b c c c c c c 5 4 4 2 . 
2 4 4 5 a c d b c b d 5 4 4 2 . 
2 4 4 5 a c b a b a c 5 4 4 2 f 
f 2 4 4 5 5 5 5 5 5 5 4 4 2 a f 
f 2 f 4 4 4 4 4 4 4 4 4 b 2 b f 
. . 2 2 4 4 4 4 4 4 4 2 2 . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f c c c c f f . . . . 
. . . f b c c c c c c b f . . . 
. . . f c c c c c c c c f . . . 
. . f a c c c c c c c c a f . . 
. . f a c c c c c c c c a f . . 
. . f a a a c c c c a a a f . . 
. . f b a b f d d f b a b f . . 
. . f c a c f c c f c a c f . . 
. . . a b c c c c c c b f . . . 
. . a a a c d b c b d f f f f . 
f c a a a c b a b a c a a a c f 
f a b a b a a a a a a b a b a f 
f b f b a a a a a a b f b f b f 
. . . . . a a a a a a . . . . . 
. . . . . . . a a a . . . . . . 
`],
        80,
        false
        )
        projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 5 . 2 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 5 5 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . 4 5 5 . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 . 5 . . 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 2 2 . . . . 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 . 4 4 5 5 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 . 4 4 5 . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 . 4 4 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 2 . . 4 4 5 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 2 . . 4 4 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 . . 4 5 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 2 . . 4 5 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 2 . 4 4 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 . 4 4 5 . 2 2 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 . 4 . 5 . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 . 4 2 5 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . 4 5 5 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 . . . 4 5 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . 4 4 5 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . 4 4 5 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 4 4 5 5 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . 4 4 . 5 5 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . 4 4 . 5 . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . 4 4 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 4 4 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 4 . 5 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 4 . 5 5 . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 4 5 5 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
4 4 5 . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
4 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, bossable02, 50, 100)
        Vs = sprites.createProjectileFromSprite(img`
5 2 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 5 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 5 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 5 4 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 . 2 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 4 . 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 . 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 5 2 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 2 . 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 5 4 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 2 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 4 4 4 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . 4 4 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 5 4 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 4 4 4 2 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 4 4 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 5 2 2 2 4 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 5 . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 5 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 . 2 2 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 . 5 4 4 4 2 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 5 . 4 4 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 5 . 4 2 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 5 5 2 . 4 4 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 2 5 . 4 4 4 4 . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 5 5 . 4 4 4 . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 4 4 4 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 2 2 5 . . 4 4 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 4 4 4 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 5 4 4 4 4 4 4 2 2 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 2 2 2 4 4 4 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 5 5 5 4 4 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 4 2 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . 5 4 4 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 2 2 4 4 4 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 5 5 5 . 4 
`, bossable02, -50, 100)
        fcoud = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . 5 2 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 5 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 5 4 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 5 4 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 2 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 5 . 2 4 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 4 . 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 5 . 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 5 2 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 . 4 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 5 4 4 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 5 4 4 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 5 4 4 4 2 4 . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 5 4 4 . 2 . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 4 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . 4 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 5 4 4 2 2 . . 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . 2 2 . . . . . . 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 4 4 4 2 . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . 4 4 2 2 . 2 2 . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . 4 2 2 2 2 . . 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 2 . 4 4 2 2 2 . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 . 2 . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . 4 4 4 . 2 . . . . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 4 2 2 . 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . 4 4 2 2 2 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 4 4 4 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 4 4 4 4 4 4 2 2 . . 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 2 2 2 4 4 4 2 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 4 4 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 4 4 4 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 2 2 2 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 . 4 . 
`, bossable02, 50, -100)
        projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 4 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . 2 2 4 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 4 4 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 4 4 2 . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 2 . . 2 2 4 4 5 . 2 2 . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 2 2 2 4 4 5 5 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . 2 2 2 4 5 5 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 2 4 4 . 5 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 4 4 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 4 5 5 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 . . 2 2 . 4 4 5 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 2 2 2 . 4 4 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 2 2 . 4 4 5 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 2 . 2 4 4 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . 2 . . 4 5 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 2 . 2 . . 4 5 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 2 . 4 4 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 2 2 4 4 5 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 . 4 . 5 . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . 2 . . . . 2 2 . 4 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . 2 2 2 . 4 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 . . . 2 2 2 . . . 4 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . . 2 2 2 . . 4 4 5 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 . 2 2 . . 4 4 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 . . 4 4 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 2 4 4 . 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . 2 . 4 4 . 5 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . 2 . 4 4 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 2 4 4 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 2 4 . 5 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 4 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 4 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
4 4 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
4 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, bossable02, -50, -100)
    }
})
forever(function () {
    music.playTone(139, music.beat(BeatFraction.Half))
    music.playTone(156, music.beat(BeatFraction.Half))
    music.playTone(165, music.beat(BeatFraction.Half))
})
