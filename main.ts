hummingbird.startHummingbird()
hummingbird.setPositionServo(FourPort.One, 50)
basic.forever(function () {
    if (50 < hummingbird.getSensor(SensorType.Distance, ThreePort.One)) {
        hummingbird.setPositionServo(FourPort.One, 140)
    } else {
        hummingbird.setPositionServo(FourPort.One, 95)
    }
})
