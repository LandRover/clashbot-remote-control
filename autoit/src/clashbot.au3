#include <config.au3>
#include <utils.au3>

Func botStart()
   bluestacksShow()
   btnToggle('start bot', $CLASBOT_WINDOW_TOGGLE_START, 'start bot', 'stop')
EndFunc

Func botStop()
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
	  msgNotify('err', 'clash bot not running.')
	  ; Not running and not logged in.. Strage state.
	  Return False
   EndIf

   Local $btnToggleText = ControlGetText($CLASBOT_WINDOW, '', $toggleBtn)

   If ('' == $action) OR ($textOptionA == StringLower($btnToggleText) AND $textOptionA == $action) OR ($textOptionB == StringLower($btnToggleText) AND $textOptionB == $action) Then
	  click($CLASBOT_WINDOW, $toggleBtn)
   Else
	  ; invalid state or already in the requested state.
   EndIf

EndFunc



Func loadClashBotApp()
   Local $hWnd = WinGetHandle($CLASBOT_WINDOW)

   If Not isClashBotRunning() Then
	  runBot()
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
   WinWait($CLASBOT_CONFIRM_WINDOW, '', 5);
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