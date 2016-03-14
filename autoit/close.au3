#include <src/clashbot.au3>

closeClashBotApp()
Sleep(500)

If Not isClashBotRunning() Then
    ConsoleWrite('true')
Else
    ConsoleWrite('false')
EndIf