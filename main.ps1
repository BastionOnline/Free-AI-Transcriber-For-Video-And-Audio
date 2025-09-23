# run with .\main.ps1
Write-Output "=== Whisper Portable Transcriber ==="

# Check if dirs exist first, if not make them
    # Create folders if not made


# recieve python arguments to see what user wants to do
    # video: true or false
    # Audio: true or false
    # 


# If video, make sure ffmpeg exists
    # guide to URL to download ffmpeg
    # show upload button which gets local path of download and copies to .\bin\
    # check if .\bin\ffmpeg.exe exists

# If audio, make sure input dir exists
    # and whisper-cli.exe exist


# checks if .bin model file exists in .\2. models\
    # if not, guide to URL to download model
    # show upload button which gets local path of download and copies to .\2. models\



# Find a WAV file using find-wav.ps1
$wavFileObj = & ".\find-wav.ps1"
# & is the call operator in PowerShell. It runs another script, command, or program.
# ".\find-wav.ps1" points to the script file inside the same folder (scripts\).


$wavFileObj.GetType()

# If a file was found, pass it to transcribe.ps1
if ($wavFileObj) {
    Write-Output "Found input file: $wavFileObj"

    # Pass a named parameter (or argument) into transcribe.ps1, 
    # -AudioFile → parameter name in the script being called.
    # $wavFileObj → the value being passed to that parameter.
    & "$PSScriptRoot\transcribe.ps1" -AudioFile $wavFileObj
} else {
    # No file found, notify the user
    Write-Output "No WAV files found in the input folder. Please add a file and try again."
    exit 1
}

Write-Output "=== Done ==="