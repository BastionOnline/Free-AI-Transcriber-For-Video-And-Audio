import json
import webview
import os
import sys
import subprocess
from tkinter import filedialog
import mimetypes


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


cwd = os.getcwd()
binPath = os.path.join(cwd, "1. bin")
whisperPath = os.path.join(binPath, "whisper-cli.exe")

jsonPath = "./userDefaults.json"
print(cwd)

jsonfile = os.path.join(cwd,jsonPath)
print(jsonfile)

print(os.path.exists(jsonfile))

# recieve python arguments to see what user wants to do
def check_media_type(file_path):
    mime_type, _ = mimetypes.guess_type(file_path)
    if mime_type:
        if mime_type.startswith("audio"):
            print("audio file")
            return "audio"
        elif mime_type.startswith("video"):
            print("video file")
            return "video"
    return "unknown"


# Load user defaults
# check if user defaults file exists
# if not, create blank
# request user to set defaults
# update user defaults file

# userDefault is the entire json
# jsonValue is the key
def defaultCheck(jsonValue, userDefaults):
    # check if the value is inside
    if jsonValue in userDefaults or userDefaults[jsonValue]:
        path = userDefaults.get(jsonValue)
        # tests to see if path returns None and a number
        if not path or not isinstance(path, str): # if path returns None, it is True, because None is falsy
            # return "path issue"
            return "create key, value pair"
        # return f"{jsonValue} found"
        return path
    else:
        # best way to get a json value

        return "path does not exist"
        # return os.path.exists(path)

class Api:
    # load json file path
    def __init__(self, jsonPath=jsonPath):
        self.jsonPath = jsonPath

    def loadUserDefaultsTest(self, jsonValue):
        # jscwd = os.getcwd()
        # return jscwd
        # if (jsonValue == "banana"):
        #     return f"yum ${jsonValue}"
        # else:
        #     return f"blah ${jsonValue}"
        
        # returns true
        os.path.exists(self.jsonPath)
        with open(self.jsonPath, "r") as f:
            userDefaults = json.load(f)
        requestedValue = defaultCheck(jsonValue, userDefaults)

        return requestedValue



    # this is intialized on js. js sends model and whisper test immediately on startup
    def loadUserDefaults(self, jsonValue):
        try:
            # if there is a json file load it
            if os.path.exists(self.jsonPath):
                with open(self.jsonPath, "r") as f:
                    # userDefault is the entire json
                    # jsonValue is the key
                    userDefaults = json.load(f)

                # check value sent from json to see if it is present
                print(userDefaults)
                requestedValue = defaultCheck(jsonValue, userDefaults)
                # return findings
                return requestedValue

            # if there is no json file, make one
            else:
                # create a template json for the user
                userDefaults = {
                        "whisper": whisperPath,
                        "model": ""
                    }
                with open(self.jsonPath, "w") as f:
                    json.dump(userDefaults,f)
                requestedValue = defaultCheck(jsonValue, userDefaults)
                # need to send a request to select model
                return requestedValue
        except Exception as e:
            print(e)
            return False


    def chooseDefault(self, key):
        file_path = filedialog.askopenfilename(
            title=f"Choose {key}")
        
        if not file_path:
            return None  # User canceled

        # Load existing defaults (if file exists)
        try:
            with open(self.jsonPath, "r") as f:
                data = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError):
            data = {}

        #update with new section
        data[key] = file_path

        with open(jsonPath, "w") as f:
            # handles formatting for JSON, no need to concen with escape \
            json.dump(data, f, indent=4)



    def selectFile(self):
        self.file_path = filedialog.askopenfilename(
            title="Choose a media file",
            filetypes=[("Audio/Video Files", "*.wav *.mp4 *.mkv *.mp3")]
        )
        print(self.file_path)

        self.type = check_media_type(self.file_path)
        print(self.type)

        return self.file_path
    

    def transcribe(self):
        # Build the command
        # cmd = ["echo", "Hello, World!"]  # Example command, replace with actual command

        # good example of reg cmd
        # cmd = [r".\1. bin\whisper-cli.exe", "-m", r".\2. models\ggml-base.en.bin", "-f", r".\3. Input\2025-08-23-19-43-36.wav", "-otxt" ]  # Example command, replace with actual command

        # PowerShell command to run a script
        print(f"passing ${self.file_path} to PowerShell script")
        print(f"media type: {self.type}")
        
        cmd = [
            "powershell",   # or "pwsh" if using PowerShell Core
            "-ExecutionPolicy", "Bypass",  # allow script to run
            "-File",
            r"..\PowerShell\main.ps1",
            "-mediaFileObj", self.file_path,  # path to your script
            "-mediaType", self.type
        ]
        # cmd = [r".\main.ps1"]

        # Run the command and capture output
        result = subprocess.run(cmd, capture_output=True, text=True)

        # Check if the command was successful
        if result.returncode == 0:
            # Output will be in result.stdout
            transcription = result.stdout
            print("transcript completed")
            return transcription
        else:
            # Something went wrong, print the error
            print("Error:", result.stderr)
            return None

#  need to initialize api before debugging
api = Api(jsonPath)
# print(Api.loadUserDefaults(api, "model"))
print(Api.loadUserDefaults(api, "whisper")) # returns true, debug looks in project folder, not src

def resource_path(relative_path):
    """ Get the absolute path to a resource, works for dev and for PyInstaller """
    try:
        # PyInstaller creates a temporary folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

# html_file = resource_path("index.html")
# css_file = resource_path("assets/style.css")
# js_file = resource_path("assets/script.js")


# enable for debugging
html_file = resource_path(r'..\frontend\index.html')
css_file = resource_path(r'..\frontend\assets\style.css')
js_file = resource_path(r'..\frontend\assets\script.js')


if __name__ == '__main__':
    # Example usage of transcribe function
    api = Api()

    # Open the HTML file in a webview window
    webview.create_window("Upload App", f"file://{html_file}", js_api=api)
    webview.start()