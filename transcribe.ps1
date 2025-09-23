param(
    # -Path $wavPath -Name $wavName -Type $wavFileExtension
    [string]$Path,
    [string]$Name,
    [string]$Type
)

$WhisperExe = ".\1. bin\whisper-cli.exe"
$ModelFile = ".\2. models\ggml-base.en.bin"
# $((Split-Path $InputFile -LeafBase).txt) → MLKDream.txt
# leafbase = filename without extension
# split-path = full path broken into parts
$OutputDir = ".\4. output\$Name.txt"

Write-Host "Transcribing file: $Type"
# run whisper-cli or ffmpeg here with $InputFile
# ".\1. bin\whisper-cli.exe" -m ".\2. models\ggml-base.en.bin" -f ".\3. Input\MLKDream.wav" -otxt -of ".\3. Input\MLKDream"
& $WhisperExe -m $ModelFile -f $Path -otxt -of $OutputDir