import webview
import os
import sys
import subprocess
from tkinter import filedialog

def selectFile():
    file_path = filedialog.askopenfilename(
        title="Choose a media file",
        filetypes=[("Audio/Video Files", "*.wav *.mp4 *.mkv")]
    )

# import loadUserDefaults


# Check if dirs exist first, if not make them
    # Create folders if not made

# Load user defaults
# def loadUserDefaults():
#     pass

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




def transcribe(audio_file_path):
    # Build the command
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

class Api:
    def selectFile(self):
        file_path = filedialog.askopenfilename(
            title="Choose a media file",
            filetypes=[("Audio/Video Files", "*.wav *.mp4 *.mkv")]
        )
        print(file_path)
        return file_path

    def transcribe_file(self, name, data):
        print("✅ Transcription requested for:", name)
        # transcription = transcribe(audio_path)
        # if transcription:
        #     print("Transcription:", transcription)
        # else:
        #     print("Transcription failed.")

def resource_path(relative_path):
    """ Get the absolute path to a resource, works for dev and for PyInstaller """
    try:
        # PyInstaller creates a temporary folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)



html_file = resource_path(r'.\Python\index.html')

if __name__ == '__main__':
    # Example usage of transcribe function
    api = Api()

    # Open the HTML file in a webview window
    webview.create_window("Upload App", f"file://{html_file}", js_api=api)
    webview.start()

# Example usage
audio_path = 'your_audio_file.wav'
transcription = transcribe(audio_path)
if transcription:
    print("Transcription:", transcription)
