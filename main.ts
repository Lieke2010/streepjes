basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        basic.clearScreen()
        basic.pause(2000)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.clearScreen()
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(2000)
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
        basic.clearScreen()
        basic.pause(2000)
    }
})
