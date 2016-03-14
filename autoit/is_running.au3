#include <src/clashbot.au3>

If isClashBotRunning() AND isLoggedIn() Then
    ConsoleWrite('true')
Else
    ConsoleWrite('false')
EndIf