input.onButtonPressed(Button.A, function () {
    if (pwFreq) {
        frequency = frequency / 10
        updateFrequency()
    } else {
        pulseWidth = pulseWidth - 25
        updatePW()
    }
})
input.onButtonPressed(Button.AB, function () {
    pwFreq = !(pwFreq)
    if (pwFreq) {
        updateFrequency()
    } else {
        updatePW()
    }
})
input.onButtonPressed(Button.B, function () {
    if (pwFreq) {
        frequency = frequency * 10
        updateFrequency()
    } else {
        pulseWidth = pulseWidth + 25
        updatePW()
    }
})
function updateFrequency () {
    frequency = Math.constrain(frequency, 50, 500000)
    pins.analogSetPeriod(AnalogPin.P0, 1000000 / frequency)
    if (frequency > 999) {
        displayFreq = frequency / 1000
        units = "kHz"
    } else {
        displayFreq = frequency
        units = "Hz"
    }
    basic.showString("" + displayFreq + units)
}
function updatePW () {
    pulseWidth = Math.constrain(pulseWidth, 10, 90)
    pins.analogWritePin(AnalogPin.P0, 10.24 * pulseWidth)
    basic.showString("" + pulseWidth + "%")
}
let units = ""
let displayFreq = 0
let pwFreq = false
let pulseWidth = 0
let frequency = 0
frequency = 5000
pulseWidth = 50
pwFreq = true
updateFrequency()
updatePW()
