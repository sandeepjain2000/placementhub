@echo off
setlocal
cd /d "%~dp0"

echo.
echo === PlacementHub Git Push ===
echo.

git status -sb
echo.

set "MSG=%*"
if "%MSG%"=="" set /p MSG=Commit message: 

if "%MSG%"=="" (
  echo No commit message. Cancelled.
  exit /b 1
)

git add -A
git status -sb
echo.

git commit -m "%MSG%"
if errorlevel 1 (
  echo.
  echo Nothing to commit, or commit failed.
  exit /b 1
)

echo.
git push origin main
if errorlevel 1 (
  echo.
  echo Push failed. Try: git pull --rebase origin main
  echo Then run this batch file again.
  exit /b 1
)

echo.
echo Done.
git status -sb
endlocal
