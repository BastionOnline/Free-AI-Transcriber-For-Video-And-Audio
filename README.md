# AI Transcriber

A lightweight, efficient tool that converts audio and video files into clean text transcripts using state-of-the-art AI.

---

## Features

* **Multi-Format Support:** Input MP4, MOV, AVI, MP3, WAV, or M4A files.
* **High Accuracy:** Leverages advanced AI models for precise speech-to-text.
* **Clean Output:** Automatically generates a formatted `.txt` file.
* **Fast Processing:** Optimized for quick turnaround on long-form content.

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com
cd ai-transcriber
```

### 2. Install dependencies:
Make sure you have Python installed.
```bash
pip install -r requirements.txt
```

### 3. Install FFmpeg:
Required for processing media files. Follow the FFmpeg Download Guide for your OS.


## Usage
1. Add your audio or video file (MP4, MOV, AVI, MP3, WAV, or M4A).
2. Run the transcriber.
3. The application processes the media using your configured AI model.
4. A formatted `.txt` transcript is generated automatically.


## Configuration
You need to use your own model for this app.
You can adjust model settings in config.yaml to balance speed and accuracy:
model_size: tiny, base, small, medium, or large.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
