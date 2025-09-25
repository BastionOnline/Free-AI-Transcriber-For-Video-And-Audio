param (
    [string]$videoFile,
    [string]$videoPath
    # [string]$TimeStamp
)

Write-Host $videoFile

$videoName = [System.IO.Path]::GetFileNameWithoutExtension($videoFile)
# $videoPath = Split-Path -Path $videoFile -Parent
# $fileInfoObject = Get-Item $filePathString # This creates a System.IO.FileInfo object

Write-Host $videoName
Write-Host $videoPath

$convertedFile = "$videoPath\$videoName.wav"

Write-Host $convertedFile
# & ".\bin\ffmpeg.exe" -i ".\3. Input\lecture1.mkv" -ar 16000 -ac 1 ".\3. Input\lecture1.wav"
# ffmpeg -i ".\sample\2025-08-23 19-43-36.mkv" -ar 16000 -ac 1 ".\sample\2025-08-23-19-43-36.wav"
Write-Host "Converting video file to WAV"
& ffmpeg -i "$videoFile" -ar 16000 -ac 1 $convertedFile

Write-Host $convertedFile.GetType()

$convertedFileInfoObject = Get-Item $convertedFile # This creates a System.IO.FileInfo object

Write-Host $convertedFileInfoObject.GetType()

$convertedFileInfoObject