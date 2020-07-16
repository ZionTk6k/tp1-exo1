let posY = 0
let posX = 1
if (posX > 4) {
    posX += -1
}
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(1000)
    led.unplot(0, 0)
    led.plot(1, 0)
    basic.pause(1000)
    led.unplot(1, 0)
    led.plot(2, 0)
    basic.pause(1000)
    led.unplot(2, 0)
    led.plot(3, 0)
    basic.pause(1000)
    led.unplot(3, 0)
    led.plot(4, 0)
    basic.pause(1000)
    led.unplot(4, 0)
})
