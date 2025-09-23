$inputDir = Join-Path $PSScriptRoot ".\3. Input"

# stored as a FileInfo object
# FileInfo has properties like .FullName, .Extension, .BaseName, .Name
$firstWav = Get-ChildItem -Path $inputDir -Filter *.wav | Select-Object -First 1

if ($firstWav) {

    # return $firstWav.FullName
    return $firstWav

    # Call the second script with the file as a parameter
    & "$PSScriptRoot\transcribe.ps1" -Path $wavPath -Name $wavName -Type $wavNameAndExt
} else {
    Write-Host "No WAV files found."
}