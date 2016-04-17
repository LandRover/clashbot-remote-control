#include <src/clashbot.au3>

If isClashBotRunning() AND isLoggedIn() Then
    ConsoleWrite(getLog())
Else
    ConsoleWrite('false')
EndIf