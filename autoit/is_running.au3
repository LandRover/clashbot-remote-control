#include <src/clashbot.au3>

If isClashBotRunning() AND isLoggedIn() Then
    ConsoleWrite('true' & @CRLF)
Else
    ConsoleWrite('false' & @CRLF)
EndIf