set x=call npm start


for /f "delims=" %%r in ('%x%') do set "return=%%r"
echo %key%

setx TEST "%key%"

pause