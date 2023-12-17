function Bin_bereit () {
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Whole))
}
input.onGesture(Gesture.Shake, function () {
    Zahl = randint(1, 6)
})
let Zahl = 0
Bin_bereit()
Zahl = 0
basic.clearScreen()
basic.forever(function () {
    while (Zahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    while (Zahl == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
})
basic.forever(function () {
    while (Zahl == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    }
})
basic.forever(function () {
    while (Zahl == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
basic.forever(function () {
    while (Zahl == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
})
basic.forever(function () {
    while (Zahl == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
