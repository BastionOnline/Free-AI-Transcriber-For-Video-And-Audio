# run with .\main.ps1

param(

    [string]$mediaFileObj = "",
    [string]$mediaType  # Default value for the parameter

    # testing
    # [string]$mediaFileObj = "..\..\3. Input\2025-08-23 19-43-36.mkv",
    # [string]$mediaType = "video"
)

# .\main.ps1 -mediaFileObj '..\..\3. Input\2025-08-23 19-43-36.mkv' -mediaType 'video'


Write-Host "=== Whisper Portable Transcriber ==="

# Load user defaults
    # check if .\user-defaults.json exists
    # if not, create with default values
    # if yes, load values into variables


# Check if dirs exist first, if not make them
    # Create folders if not made


# If video, make sure ffmpeg exists
    # guide to URL to download ffmpeg
    # show upload button which gets local path of download and copies to .\bin\
    # check if .\bin\ffmpeg.exe exists

# If audio, make sure input dir exists
    # and whisper-cli.exe exist


# checks if .bin model file exists in .\2. models\
    # if not, guide to URL to download model
    # show upload button which gets local path of download and copies to .\2. models\

$TimeStamp = Get-Date -Format "MMM d, yyyy h-mm-ss tt"

Write-Host "Media file argument: $mediaFileObj"
Write-Host "Media type argument: $mediaType"


# Prep media if needed
if ($mediaType -eq "video") {
    Write-Host "Video File Found: $mediaFileObj"
    $mediaFileObj = & ".\convertVideo.ps1" -VideoFile $mediaFileObj -TimeStamp $TimeStamp
    # $mediaFileObj = & ".\find-wav.ps1"
    # & is the call operator in PowerShell. It runs another script, command, or program.
    $mediaFileObj.GetType()
    Write-Host "Converted file: $mediaFileObj"
} else {
    Write-Host "Audio File Found: $mediaFileObj"
}


# Transcribe the media file
Write-Host "Found input file: $mediaFileObj"
& "$PSScriptRoot\transcribe.ps1" -AudioFile $mediaFileObj -TimeStamp $TimeStamp
# Pass a named parameter (or argument) into transcribe.ps1, 
# -AudioFile → parameter name in the script being called.
# $wavFileObj → the value being passed to that parameter.


Write-Host "=== Done ==="