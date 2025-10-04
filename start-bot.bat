@echo off
echo Starting Sigma Bot...
:start
node bot.js
echo Bot crashed or stopped, restarting in 5 seconds...
timeout /t 5
goto start