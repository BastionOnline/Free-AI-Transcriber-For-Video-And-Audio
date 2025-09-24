param(

    [System.IO.FileInfo]$AudioFile,
    [string]$TimeStamp
)


$wavPath = $AudioFile.FullName
$wavNameAndExt = $AudioFile.Name
$wavName = $AudioFile.BaseName

Write-Host "Audio Path: $wavPath"
Write-Host "Audio Name and Type: $wavNameAndExt"
Write-Host "Audio Name: $wavName"


$WhisperExe = "..\..\1. bin\whisper-cli.exe"
$ModelFile = "..\..\2. models\ggml-base.en.bin"
$OutputDir = "..\..\4. Output\$wavName - Transcribed $TimeStamp"

Write-Host "Transcribing file: $wavNameAndExt"
# run whisper-cli or ffmpeg here with $InputFile
& $WhisperExe -m $ModelFile -f $wavPath -otxt -of $OutputDir

# Prepend the timestamp line
# $GitHubLink = "https://github.com/BastionOnline/Free-AI-Transcriber-For-Video-And-Audio"
$GitHubLink = "https://github.com/BastionOnline/"

# Create a single clean header line
$HeaderLine = "For more FREE productivity tools, visit: $GitHubLink`r`n`r`n"

# Read transcription content
$Content = Get-Content "$OutputDir.txt"

# Write header + content to the same file
Set-Content "$OutputDir.txt" ($HeaderLine + ($Content -join "`r`n"))