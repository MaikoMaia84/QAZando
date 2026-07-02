$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

$env:PATH = "$env:APPDATA\npm;$env:PATH"

$targetRoot = 'C:\Users\elgan\OneDrive\Email attachments\Documentos\projetos'
$timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$evidenceFolder = Join-Path $targetRoot "evidence_$timestamp"

New-Item -Path $evidenceFolder -ItemType Directory -Force | Out-Null

$reportDir = Join-Path $scriptDir 'playwright-report'
$resultsDir = Join-Path $scriptDir 'test-results'

if (Test-Path $reportDir) {
    Remove-Item -Path $reportDir -Recurse -Force -ErrorAction SilentlyContinue
}
if (Test-Path $resultsDir) {
    Remove-Item -Path $resultsDir -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Output "Running Playwright tests at $(Get-Date)"
$logFile = Join-Path $evidenceFolder 'playwright-run.log'

npx playwright test e2e --project=chromium --reporter=html 2>&1 | Tee-Object -FilePath $logFile
$exitCode = $LASTEXITCODE

if (Test-Path $reportDir) {
    Copy-Item -Path $reportDir -Destination (Join-Path $evidenceFolder 'playwright-report') -Recurse -Force
}
if (Test-Path $resultsDir) {
    Copy-Item -Path $resultsDir -Destination (Join-Path $evidenceFolder 'test-results') -Recurse -Force
}

Get-ChildItem -Path $scriptDir -Filter '*.webm' -Recurse | Copy-Item -Destination $evidenceFolder -Force

$infoFile = Join-Path $evidenceFolder 'run-info.txt'
"Run at $(Get-Date)`r`nExitCode: $exitCode" | Out-File -FilePath $infoFile -Encoding UTF8

exit $exitCode
