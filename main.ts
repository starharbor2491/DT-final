hummingbird.startHummingbird()
hummingbird.setPositionServo(FourPort.One, 50)
basic.forever(function () {
    if (10 < hummingbird.getSensor(SensorType.Distance, ThreePort.One)) {
        hummingbird.setPositionServo(FourPort.One, 90)
    } else {
        hummingbird.setPositionServo(FourPort.One, 20)
    }
})
