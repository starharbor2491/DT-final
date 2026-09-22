hummingbird.startHummingbird()
hummingbird.setPositionServo(FourPort.One, 115)
basic.forever(function () {
    if (5 > hummingbird.getSensor(SensorType.Distance, ThreePort.One)) {
        hummingbird.setPositionServo(FourPort.One, 115)
    } else {
        hummingbird.setPositionServo(FourPort.One, 140)
    }
})
basic.forever(function () {
    basic.showString("" + (hummingbird.getSensor(SensorType.Distance, ThreePort.One)))
    if (input.buttonIsPressed(Button.A)) {
        hummingbird.setPositionServo(FourPort.One, 115)
    } else {
        hummingbird.setPositionServo(FourPort.One, 140)
    }
})
