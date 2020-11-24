input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("1234qwer")
    basic.showIcon(IconNames.Chessboard)
    basic.clearScreen()
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    count += 1
    if (receivedString == password) {
        radio.sendString("pass")
        basic.showIcon(IconNames.Square)
    } else if (receivedString == "pass") {
        basic.showIcon(IconNames.Target)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(count)
})
let count = 0
let password = ""
password = "1234qwer"
count = 0
