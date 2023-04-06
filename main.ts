function update () {
    basic.clearScreen()
    wert = zeit
    for (let Index = 0; Index <= 5; Index++) {
        if (wert % 2 == 1) {
            if (Index == 5) {
                led.plot(0, 3)
            } else {
                led.plot(4 - Index, wert2)
            }
        }
        wert = Math.floor(wert / 2)
    }
}
let wert = 0
let wert2 = 0
let zeit = 0
zeit = 0
wert2 = 4
update()
basic.forever(function () {
    basic.pause(200)
    update()
    zeit += 1
})
