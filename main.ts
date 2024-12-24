function heart () {
    if (run_function == 3) {
        strip.showRainbow(1, 360)
    } else {
        turn_off()
    }
}
function turn_off () {
    strip.clear()
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    if (run_function == 3) {
        run_function = 1
    } else {
        run_function += 1
    }
})
function smile () {
    strip.showRainbow(1, 360)
    while (run_function == 2) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
    turn_off()
}
function cross () {
    while (run_function == 1) {
        for (let index = 0; index < 6; index++) {
            strip.shift(1)
            strip.setPixelColor(Led, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(200)
            Led += 1
        }
        Led = 0
        for (let index = 0; index < 6; index++) {
            strip.shift(1)
            strip.setPixelColor(Led, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(200)
            Led += 1
        }
        Led = 0
        for (let index = 0; index < 6; index++) {
            strip.shift(1)
            strip.setPixelColor(Led, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(200)
            Led += 1
        }
        Led = 0
        turn_off()
    }
}
input.onButtonPressed(Button.B, function () {
    if (run_function > 0) {
        run_function = 0
        turn_off()
    } else {
        run_function = 1
    }
})
let Led = 0
let strip: neopixel.Strip = null
let run_function = 0
run_function = 1
strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
basic.forever(function () {
    cross()
    heart()
    smile()
})
