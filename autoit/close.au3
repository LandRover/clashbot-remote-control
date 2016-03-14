#include <src/clashbot.au3>

closeClashBotApp()
Sleep(1000)

If Not isClashBotRunning() AND Not isLoggedIn() AND Not isStarted() Then
    ConsoleWrite('true' & @CRLF)
Else
    ConsoleWrite('false' & @CRLF)
EndIf