input.onPinPressed(TouchPin.P0, function () {
	
})
input.onSound(DetectedSound.Quiet, function () {
    images.createBigImage(`
        # . . . # # . . . #
        . # . . # . # . # .
        # # # # . # # # # #
        # # . . . . . # . #
        # # # . . . # # # #
        `).showImage(0)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    soundExpression.slide.playUntilDone()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showString("Hello!")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # # . #
        . . # # .
        # # . # #
        . # # . .
        # . # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.EigthNote)
    soundExpression.twinkle.playUntilDone()
    basic.showString("Anju")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        # . # . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.spring.playUntilDone()
    basic.showString("SAKUMA")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.yawn.play()
})
basic.showLeds(`
    . . # # #
    . . . # #
    . . . . .
    # # # . .
    # # # # #
    `)
