#include <src/clashbot.au3>

loadClashBotApp()
botStart()

If isClashBotRunning() AND isLoggedIn() AND isStarted() Then
    ConsoleWrite('true' & @CRLF)
Else
    ConsoleWrite('false' & @CRLF)
EndIf