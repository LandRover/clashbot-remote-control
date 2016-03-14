#include <src/clashbot.au3>

loadClashBotApp()
botStart()

Sleep(2000)

If isClashBotRunning() AND isLoggedIn() AND isStarted() Then
    ConsoleWrite('true')
Else
    ConsoleWrite('false')
EndIf