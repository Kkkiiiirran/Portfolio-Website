@echo off
echo Copying profile image...

REM Change this path if you saved the image elsewhere
set SOURCE=%USERPROFILE%\Desktop\hero.jpg

if exist "%SOURCE%" (
    copy "%SOURCE%" "public\images\profile\hero.jpg"
    copy "%SOURCE%" "public\images\profile\about.jpg"
    echo Success! Profile images added.
) else (
    echo Error: hero.jpg not found on Desktop
    echo Please save your image as hero.jpg on your Desktop first
)

pause
