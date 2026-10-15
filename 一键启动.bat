@echo off
setlocal
cd /d "%~dp0"
title DeepSeek Harness

where node >nul 2>&1
if errorlevel 1 (
  powershell -NoProfile -Command "Write-Host ([string]::new([char[]](0x672A,0x68C0,0x6D4B,0x5230,0x20,0x4E,0x6F,0x64,0x65,0x2E,0x6A,0x73,0x3002,0x8BF7,0x5148,0x5B89,0x88C5,0xFF1A))); Write-Host 'https://nodejs.org'"
  pause
  exit /b 1
)

curl.exe -sf -o NUL --max-time 1 http://127.0.0.1:8080/ >nul 2>&1
if not errorlevel 1 (
  start "" "http://127.0.0.1:8080/"
  powershell -NoProfile -Command "Write-Host ([string]::new([char[]](0x670D,0x52A1,0x5DF2,0x5728,0x8FD0,0x884C,0xFF0C,0x5DF2,0x6253,0x5F00,0x6D4F,0x89C8,0x5668,0x3002)))"
  pause
  exit /b 0
)

if not exist "node_modules\" (
  powershell -NoProfile -Command "Write-Host ([string]::new([char[]](0x7B2C,0x4E00,0x6B21,0x8FD0,0x884C,0xFF0C,0x6B63,0x5728,0x5B89,0x88C5,0x4F9D,0x8D56,0x002E,0x002E,0x002E)))"
  call npm install
  if errorlevel 1 (
    powershell -NoProfile -Command "Write-Host ([string]::new([char[]](0x4F9D,0x8D56,0x5B89,0x88C5,0x5931,0x8D25,0x3002)))"
    pause
    exit /b 1
  )
)

if exist "scripts\restore-assets.mjs" node scripts\restore-assets.mjs

set "VITE_AUTH_ENABLED=false"
powershell -NoProfile -Command "Write-Host ([string]::new([char[]](0x6B63,0x5728,0x542F,0x52A8,0x3002,0x6D4F,0x89C8,0x5668,0x4F1A,0x5728,0x670D,0x52A1,0x5C31,0x7EEA,0x540E,0x81EA,0x52A8,0x6253,0x5F00,0x3002))); Write-Host ([string]::new([char[]](0x5173,0x95ED,0x6B64,0x7A97,0x53E3,0x5373,0x505C,0x6B62,0x670D,0x52A1,0x3002)))"

start "" /MIN powershell -NoProfile -Command "for($i=0;$i -lt 60;$i++){ try { Invoke-WebRequest -UseBasicParsing -TimeoutSec 1 -Uri 'http://127.0.0.1:8080/' ^> $null; Start-Process 'http://127.0.0.1:8080/'; break } catch { Start-Sleep -Seconds 1 } }"

call npm run dev
echo.
powershell -NoProfile -Command "Write-Host ([string]::new([char[]](0x670D,0x52A1,0x5DF2,0x505C,0x6B62,0x3002)))"
pause
