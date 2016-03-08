#include <MsgBoxConstants.au3>


Func msgNotify($title = '', $text = '')
   MsgBox($MB_OK, $title, $text);
EndFunc


Func moveWindow($hwd = Null, $x = 0, $y = 0)
   Return WinMove($hwd, '', $x, $y)
EndFunc


Func waitWindow($title = '', $timeout = 5)
   Local $hWnd = WinWait($title, '', $timeout);

   Return $hWnd
EndFunc


Func click($hWnd = Null, $btn = Null)
   ControlClick($hWnd, '', $btn);
EndFunc

