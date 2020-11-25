radio.onReceivedString(function (receivedString) {
    count += 1
    if (receivedString == password) {
        radio.sendString("pass")
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
})
let count = 0
let password = ""
password = "x"
count = 0
basic.showIcon(IconNames.Target)
