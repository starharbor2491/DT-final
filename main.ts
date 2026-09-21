input.onButtonPressed(Button.A, function () {
    x += 5
})
input.onButtonPressed(Button.B, function () {
    x += -5
})
let x = 0
hummingbird.startHummingbird()
if (10 < hummingbird.getSensor(SensorType.Distance, ThreePort.One)) {
    hummingbird.setPositionServo(FourPort.One, 90)
} else {
    hummingbird.setPositionServo(FourPort.One, 0)
}
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.One, x)
    basic.showString("" + (x))
})
