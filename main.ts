let C = 0
let F = 0
let IntF = 0
basic.forever(function () {
    C = input.temperature()
    F = 9 / 5 * C + 32
    IntF = Math.trunc(F)
    basic.showString("" + convertToText(IntF) + "." + Math.trunc(10 * (F - IntF)) + "F")
    basic.pause(1000)
})
