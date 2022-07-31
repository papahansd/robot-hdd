function laat_zien () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 0)
    basic.showString("" + (Verschil_snelheid))
    basic.pause(500)
    basic.showString("L")
    basic.pause(1000)
    basic.showString("" + (Wiel_links))
    basic.pause(500)
    basic.showString("R")
    basic.pause(1000)
    basic.showString("" + (Wiel_rechts))
    basic.pause(1000)
    basic.showString(" ")
}
input.onButtonPressed(Button.A, function () {
    Verschil_snelheid += 1
    laat_zien()
})
input.onGesture(Gesture.Shake, function () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    Wiel_links = 0
    Wiel_rechts = 0
    laat_zien()
})
function Rijden () {
    if (Wiel_rechts != 0) {
        Wiel_rechts += 5
    }
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, Wiel_links)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, Wiel_rechts)
}
input.onButtonPressed(Button.B, function () {
    Verschil_snelheid += -1
    laat_zien()
})
function BEWAREN () {
	
}
let Wiel_rechts = 0
let Wiel_links = 0
let Verschil_snelheid = 0
let Wit = 0
Verschil_snelheid = 10
let Standaard_Snelheid = 40
let Zwart = 1
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == Zwart) {
        Wiel_links = Standaard_Snelheid
        Wiel_rechts = Standaard_Snelheid
    } else {
        Wiel_links = 0
        Wiel_rechts = 0
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == Zwart) {
        Wiel_links = Standaard_Snelheid - Verschil_snelheid
        Wiel_rechts = Standaard_Snelheid + Verschil_snelheid
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == Zwart) {
        Wiel_links = Standaard_Snelheid + Verschil_snelheid
        Wiel_rechts = Standaard_Snelheid - Verschil_snelheid
    }
    Rijden()
})
