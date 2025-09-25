param(

    [System.IO.FileInfo]$audioFile,
    [string]$timeStamp,
    [string]$mediaPathOnly,
    [string]$whisperExe,
    [string]$modelFile
)


$wavPathwFile = $audioFile.FullName
$wavNameAndExt = $audioFile.Name
$wavName = $audioFile.BaseName

Write-Host "Audio Path: $wavPathwFile"
Write-Host "Audio Name and Type: $wavNameAndExt"
Write-Host "Audio Name: $wavName"


# $WhisperExe = "..\..\1. bin\whisper-cli.exe"
# $ModelFile = "..\..\2. models\ggml-base.en.bin"
# $OutputDir = "..\..\4. Output\$wavName - Transcribed $TimeStamp"
$outputDir = "$mediaPath\$wavName - Transcribed $timeStamp"

Write-Host "Transcribing file: $wavNameAndExt"
# run whisper-cli or ffmpeg here with $InputFile
& $whisperExe -m $modelFile -f $wavPathwFile -otxt -of $outputDir

# Prepend the timestamp line
# $GitHubLink = "https://github.com/BastionOnline/Free-AI-Transcriber-For-Video-And-Audio"
$GitHubLink = "https://github.com/BastionOnline/"

# Create a single clean header line
$headerLine = "For more FREE productivity tools, visit: $GitHubLink`r`n`r`n"

# Read transcription content
$Content = Get-Content "$outputDir.txt"

# Write header + content to the same file
Set-Content "$outputDir.txt" ($headerLine + ($Content -join "`r`n"))