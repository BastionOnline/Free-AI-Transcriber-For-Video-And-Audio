import subprocess

def transcribe(audio_file_path):
    # Build the command
    # cmd = ['path/to/whisper-cli.exe', audio_file_path]
    cmd = ['path/to/whisper-cli.exe', audio_file_path]

    # Run the command and capture output
    result = subprocess.run(cmd, capture_output=True, text=True)

    # Check if the command was successful
    if result.returncode == 0:
        # Output will be in result.stdout
        transcription = result.stdout
        return transcription
    else:
        # Something went wrong, print the error
        print("Error:", result.stderr)
        return None

# Example usage
audio_path = 'your_audio_file.wav'
transcription = transcribe(audio_path)
if transcription:
    print("Transcription:", transcription)
