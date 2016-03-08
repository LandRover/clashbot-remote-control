#include <src/clashbot.au3>

loadClashBotApp()
botStop()

If isClashBotRunning() AND isLoggedIn() AND Not isStarted() Then
    ConsoleWrite('true' & @CRLF)
Else
    ConsoleWrite('false' & @CRLF)
EndIf