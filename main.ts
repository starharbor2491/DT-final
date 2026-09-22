let x = 0
hummingbird.startHummingbird()
hummingbird.setPositionServo(FourPort.One, 115)
basic.forever(function () {
    if (5 > hummingbird.getSensor(SensorType.Distance, ThreePort.One)) {
        x = 0
        hummingbird.setPositionServo(FourPort.One, 115)
    } else {
        x = 1
        hummingbird.setPositionServo(FourPort.One, 140)
    }
})
basic.forever(function () {
    if (x == 0) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    }
})
