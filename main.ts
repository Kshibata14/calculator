input.onButtonPressed(Button.A, function () {
    NUmber += 1
    basic.showNumber(NUmber)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Number_2 = NUmber
    A = Number_2 + 9
    B = Number_2 - 9
    C = Number_2 * 2
    D = Number_2 / 3
    E = Number_2 % 4
    F = Math.sqrt(Number_2)
    G = Math.round(3 / 4)
    H = Math.ceil(3 / 9)
    I = Number_2 * Number_2 * Number_2
    J = randint(0, 100)
})
input.onButtonPressed(Button.B, function () {
    NUmber += -1
    basic.showNumber(NUmber)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (A))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (B))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (C))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (D))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (E))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (F))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (G))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (H))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (I))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("" + (J))
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let Number_2 = 0
let NUmber = 0
NUmber = 0
let count = 0
basic.forever(function () {
	
})
