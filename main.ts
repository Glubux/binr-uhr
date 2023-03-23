function update () {
    let Index = 0
    basic.clearScreen()
    wert = zeit
    for (let Index = 0; Index <= 4; Index++) {
        if (wert % 2 == 1) {
            led.plot(4 - Index, wert2)
        }
        wert = Math.floor(wert / 2)
    }
    if (Index == 4) {
        wert2 += -1
    }
}
let wert = 0
let wert2 = 0
let zeit = 0
zeit = 0
wert2 = 4
update()
basic.forever(function () {
    basic.pause(500)
    update()
    zeit += 1
})
