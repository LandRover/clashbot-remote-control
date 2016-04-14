#include <config.au3>
#include <clashbot.au3>

Func loadLoaderApp()
   Local $hWnd = WinGetHandle($LOADER_WINDOW)

   If Not isLoaderRunning() Then
	  runLoader()
   Else
	  ; all good.. continue. not extra steps needed.
   EndIf

   WinActivate($LOADER_WINDOW) ; bring to front.
EndFunc


Func isLoaderRunning()
   Local $hWnd = WinGetHandle($LOADER_WINDOW)

   If @error Then
	  Return False
   Else
	  Return True
   EndIf
EndFunc


Func runLoader()
   Run($CLASHBOT_PATH & $LOADER_EXEC, $CLASHBOT_PATH)

   launch()
EndFunc


Func launch()
   WinWait($LOADER_WINDOW, '', 8)
   Sleep(1000)

   If Not isClashBotRunning() Then
	  click($LOADER_WINDOW, $LOADER_WINDOW_BTN_LAUNCH)
   EndIf
EndFunc