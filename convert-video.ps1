param (
    [string]$videoFile,
    [string]$TimeStamp
)

Write-Host $videoFile

$videoName = [System.IO.Path]::GetFileNameWithoutExtension($videoFile)
Write-Host $videoName

$convertedFile = ".\3. Input\$videoName.wav"

Write-Host $convertedFile
# & ".\bin\ffmpeg.exe" -i ".\3. Input\lecture1.mkv" -ar 16000 -ac 1 ".\3. Input\lecture1.wav"
# ffmpeg -i ".\sample\2025-08-23 19-43-36.mkv" -ar 16000 -ac 1 ".\sample\2025-08-23-19-43-36.wav"
Write-Host "Converting video file to WAV"
& ffmpeg -i "$videoFile" -ar 16000 -ac 1 $convertedFile

$convertedFile