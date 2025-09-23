# run with .\main.ps1
Write-Output "=== Whisper Portable Transcriber ==="

# 1. Find a WAV file using find-wav.ps1
    # & is the call operator in PowerShell. It runs another script, command, or program.
    # ".\find-wav.ps1" points to the script file inside the same folder (scripts\).
    # $InputFile captures the output of that script.
$InputFile = & ".\find-wav.ps1"

    # If $InputFile is empty (meaning no .wav file was found), the script prints an error and stops execution with exit 1.
    # This prevents calling the transcriber with no input.

if (-not $InputFile) {
    Write-Error "Stopping: no input file found."
    exit 1
}

Write-Output "Found input file: $InputFile"

# 2. Pass it into transcribe.ps1

# Runs transcribe.ps1.
# -InputFile $InputFile passes the found .wav file path as a parameter into that script.
# Inside transcribe.ps1, it uses $InputFile to tell whisper-cli.exe which file to process.
# So effectively:
# 👉 "Now run the transcription script, giving it the .wav file path we just found."

& ".\transcribe.ps1" -InputFile $InputFile

Write-Output "=== Done ==="