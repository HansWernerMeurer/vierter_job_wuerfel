function Bin_bereit () {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
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
        basic.pause(5000)
        basic.clearScreen()
        Zahl = 0
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
        basic.pause(5000)
        basic.clearScreen()
        Zahl = 0
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
        basic.pause(5000)
        basic.clearScreen()
        Zahl = 0
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
        basic.pause(5000)
        basic.clearScreen()
        Zahl = 0
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
        basic.pause(5000)
        basic.clearScreen()
        Zahl = 0
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
        basic.pause(5000)
        basic.clearScreen()
        Zahl = 0
    }
})
