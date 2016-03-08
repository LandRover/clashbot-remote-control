#include <src/clashbot.au3>

If isClashBotRunning() Then
    ConsoleWrite('true' & @CRLF)
Else
    ConsoleWrite('false' & @CRLF)
EndIf