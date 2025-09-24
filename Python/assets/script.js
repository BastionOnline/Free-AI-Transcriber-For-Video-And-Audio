document.addEventListener("DOMContentLoaded", () => {
    const mediaFileInput = document.getElementById("mediaFileInput");
    const transcribe = document.getElementById("transcribeBtn");
    const status = document.getElementById("status");

    function random(min, max, c, numberSwitch, element, elementLength) {
        // numberSwitch.innerHTML = rnd;
        var rnd = Math.floor(Math.random() * (max - min + 1)) + min
        // numberSwitch.innerHTML = element.slice(0, c + 1) + rnd;
        if (c === elementLength) {
            numberSwitch.innerHTML = `${element.slice(0, c)}`;
        } else{
            numberSwitch.innerHTML = `${element.slice(0, c)}${rnd}`;
        }
        

        console.log(rnd);    
        return numberSwitch.innerHTML;
    }

    function animateTitle(elementId) {
        const numberSwitch = document.getElementById(elementId)
        const element = document.getElementById(elementId).innerHTML;
        const elementLength = element.length
        console.log(element)
        console.log(elementLength)

        // var rnd;

        for (let c = 0; c <= elementLength; c++) {
            setTimeout(function() {
            for (let i = 0; i < 5; i++) {
                setTimeout(function() {
                    // var rnd = random(1,10);
                    random(1, 9, c, numberSwitch, element, elementLength);
                }, i * 80);
            }
            // console.log(element.slice(0, i));
        }, c * 60)
        }}

    animateTitle("title");
    // document.addEventListener("DOMContentLoaded", (event) => {animateTitle("wordId")});

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