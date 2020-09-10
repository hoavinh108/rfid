NFC.nfcEvent(function () {
    x = NFC.getUID()
    if (x == "593519A3") {
        lcd1602.clear()
        lcd1602.putString(
        "Thank to        Abduaziz_Hmadi ",
        0,
        0
        )
    } else if (x == "B96121A3") {
        lcd1602.clear()
        lcd1602.putString(
        "Thank to Dr.    MohammedAlharthi ",
        0,
        0
        )
    } else if (x == "87D7FF33") {
        lcd1602.clear()
        lcd1602.putString(
        "Thank to Nadi   Al microbit",
        0,
        0
        )
    } else if (x == "C74AAA29") {
        lcd1602.clear()
        lcd1602.putString(
        "Thank to DR.    Khalid_Almalhy",
        0,
        0
        )
    } else {
        lcd1602.clear()
    }
})
let x = ""
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
NFC.NFC_setSerial(SerialPin.P1, SerialPin.P2)
