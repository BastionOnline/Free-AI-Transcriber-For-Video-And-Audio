// alert("loaded!")

document.addEventListener("DOMContentLoaded", () => {
    const mediaInput = document.getElementById("mediaInput");
    const transcribeBtn = document.getElementById("transcribeBtn");
    const status = document.getElementById("status");
    const mediaFileInput = document.getElementById("mediaFileInput");
    

    mediaFileInput.addEventListener("click", async () => {
        try {
            // alert("clicked")
            const filePath = await window.pywebview.api.selectFile();
            console.log(filePath)
            
            if (!filePath) {
                status.textContent = "⚠️ No file selected.";
            } else {
                status.textContent = `✅ Selected file: ${filePath}`;
                console.log("File selected:", filePath);
                // You can now pass filePath to your transcription function
            }
        } catch (err) {
            alert("File selection failed:", err);
            // status.textContent = "❌ File selection failed.";
        }})

    transcribeBtn.addEventListener("click", () => {
        const mediaFile = mediaInput.files[0];

        if (!mediaFile) {
            status.textContent = "⚠️ Please choose a file first!";
            console.log("No file selected.");
            return;
        } else {
            status.textContent = " ✅ File ready to be transcribed.";
            console.log("File selected:", mediaFile.name);
        }

        const transcribeData = new FormData();
        transcribeData.append("file", mediaFile);

        console.log(transcribeData);

        transcribeData.onload = async () => {
            try {
                // Send file name and contents to Python
                const result = await window.pywebview.api.transcribe_file(mediaFile.name, transcribeData);
                status.textContent = result;
            } catch (err) {
                alert("Transcription failed:", err);
                status.textContent = "❌ Transcription failed.";
            }
    }})

});