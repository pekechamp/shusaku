input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.spring.playUntilDone()
    basic.showString("  S  A  K  U  M  A")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.yawn.play()
})
