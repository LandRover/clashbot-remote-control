#include <config.au3>
#include <utils.au3>
#include <loader.au3>

Func botStart()
   bluestacksShow()
   btnToggle('start bot', $CLASBOT_WINDOW_TOGGLE_START, 'start bot', 'stop')
EndFunc


Func botStop()
   bluestacksHide()
   btnToggle('stop', $CLASBOT_WINDOW_TOGGLE_START, 'start bot', 'stop')
EndFunc


Func bluestacksShow()
   btnToggle('show bluestacks', $CLASBOT_WINDOW_TOGGLE_HIDE, 'show bluestacks', 'hide bluestacks')
EndFunc


Func bluestacksHide()
   btnToggle('hide bluestacks', $CLASBOT_WINDOW_TOGGLE_HIDE, 'show bluestacks', 'hide bluestacks')
EndFunc


Func btnToggle($action = '', $toggleBtn = '', $textOptionA = '', $textOptionB = '')
   If Not isClashBotRunning() AND Not isLoggedIn() Then
	  ConsoleWrite('[btnToggle] clash bot not running.')
	  ; msgNotify('err', '')
	  ; Not running and not logged in.. Strage state.
	  Return False
   EndIf

   WinActivate($CLASBOT_WINDOW) ; brint to front each toggle. might prevent some odd bugs.

   Local $btnToggleText = ControlGetText($CLASBOT_WINDOW, '', $toggleBtn)

   If ('' == $action) OR ($textOptionA == StringLower($btnToggleText) AND $textOptionA == $action) OR ($textOptionB == StringLower($btnToggleText) AND $textOptionB == $action) Then
	  click($CLASBOT_WINDOW, $toggleBtn)
   Else
	  ; invalid state or already in the requested state.
   EndIf

EndFunc


Func closeClashBotApp()
   Local $hWnd = WinGetHandle($CLASBOT_WINDOW)

   If isClashBotRunning() Then
      WinActivate($CLASBOT_WINDOW)
      WinClose($hWnd);
   EndIf
EndFunc


Func loadClashBotApp()
   Local $hWnd = WinGetHandle($CLASBOT_WINDOW)

   If Not isClashBotRunning() Then
	  ConsoleWrite('[loadClashBotApp] ClashBot is NOT running.')
	  loadLoaderApp() ; load clashbot using only the loader.
	  ; used to run bot directly, now uses loader
   ElseIf Not isLoggedIn() Then
	  login()
   Else
	  ; all good.. continue. not extra steps needed.
   EndIf

   WinActivate($CLASBOT_WINDOW) ; bring to front.
EndFunc


Func login()
   WinWait($CLASBOT_WINDOW, '', 10)
   Sleep(1000)

   If Not isLoggedIn() Then
	  click($CLASBOT_WINDOW, $CLASBOT_WINDOW_BTN_LOGIN)
	  closeConfirmationBox()
   EndIf
EndFunc


Func closeConfirmationBox()
   Sleep(1500)
   WinWait($CLASBOT_CONFIRM_WINDOW, '', 2);
   WinClose($CLASBOT_CONFIRM_WINDOW);
EndFunc


Func runBot()
   Run($CLASHBOT_PATH & $CLASHBOT_EXEC, $CLASHBOT_PATH)

   login()
EndFunc


Func isLoggedIn()
   WinWait($CLASBOT_WINDOW, '', 10)
   Local $loginBtn = ControlGetHandle($CLASBOT_WINDOW, '', $CLASBOT_WINDOW_BTN_LOGIN);

   If @error AND isClashBotRunning() Then
	  Return True
   Else
	  Return False
   EndIf
EndFunc


Func isClashBotRunning()
   Local $hWnd = WinGetHandle($CLASBOT_WINDOW)

   If @error Then
	  Return False
   Else
	  Return True
   EndIf
EndFunc


Func getLog()
   Local $logText = ControlGetText($CLASBOT_WINDOW, '', $CLASBOT_WINDOW_LOG)
   
   Return $logText
EndFunc


Func isStarted()
   If Not isClashBotRunning() AND Not isLoggedIn() Then
	  ; msgNotify('err', 'clash bot not running.')
	  ; Not running and not logged in.. Strage state.
	  Return False
   EndIf

   Local $btnToggleText = ControlGetText($CLASBOT_WINDOW, '', $CLASBOT_WINDOW_TOGGLE_START)

   If 'Stop' == $btnToggleText Then
      Return True
   Else
      Return False
   EndIf
EndFunc