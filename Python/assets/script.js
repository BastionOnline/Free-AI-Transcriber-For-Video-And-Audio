
document.addEventListener("DOMContentLoaded", () => {
    // alert("loaded!")

    // const mediaInput = document.getElementById("mediaInput");
    const mediaFileInput = document.getElementById("mediaFileInput");
    const transcribe = document.getElementById("transcribeBtn");
    const status = document.getElementById("status");
    // const viewpath = document.getElementById("viewpath");

    // viewpath.addEventListener("click", async () => {   
    //     const result = await window.pywebview.api.print_file_path();
    //     // alert(result);
    // });

    // mediaFileInput.addEventListener("click", () => {
    //     alert("clicked")})


    mediaFileInput.addEventListener("click", async () => {
        try {
            // alert("clicked")
            const mediafilePath = await window.pywebview.api.selectFile();
            console.log(mediafilePath)
            
            if (!mediafilePath) {
                status.textContent = "⚠️ No file selected.";
            } else {
                status.textContent = `✅ Selected file: ${mediafilePath}`;
                console.log("File selected:", mediafilePath);
                // You can now pass filePath to your transcription function
            }
        } catch (err) {
            alert("File selection failed:", err);
            // status.textContent = "❌ File selection failed.";
        }})

    transcribe.addEventListener("click", async () => {
        status.textContent = "⏳ Transcription started... this may take a few minutes.";

        const result = await window.pywebview.api.transcribe();
        status.textContent = "✅ Transcript completed"

        alert('Transcript Completed');
    })

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