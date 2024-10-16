input.onGesture(Gesture.TiltLeft, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        # # # # #
        . # . # .
        . . . . .
        `)
    basic.showNumber(134)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltRight, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
