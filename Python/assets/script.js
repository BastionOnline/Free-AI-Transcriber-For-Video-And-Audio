document.addEventListener("DOMContentLoaded", () => {
    const mediaFileInput = document.getElementById("mediaFileInput");
    const transcribe = document.getElementById("transcribeBtn");
    const status = document.getElementById("status");

    // viewpath.addEventListener("click", async () => {   
    //     const result = await window.pywebview.api.print_file_path();
    //     // alert(result);
    // });

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

});