#include <src/clashbot.au3>

If isClashBotRunning() AND isLoggedIn() AND isStarted() Then
    ConsoleWrite('true')
Else
    ConsoleWrite('false')
EndIf