#include <src/clashbot.au3>

closeClashBotApp()
Sleep(500)

If Not isClashBotRunning() Then
    ConsoleWrite('true' & @CRLF)
Else
    ConsoleWrite('false' & @CRLF)
EndIf