document.addEventListener("DOMContentLoaded", async () => {
    const mediaFileInput = document.getElementById("mediaFileInput");
    const transcribe = document.getElementById("transcribeBtn");
    const status = document.getElementById("status");


    // looks at json in src when main.py is run
    // python debugging looks at core project folder for json
    async function check(jsonValue) {
        window.addEventListener('pywebviewready', async () => {
            try {
                // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
                // alert(`${jsonValue} about to got to py!`)
                const PyValue = await window.pywebview.api.loadUserDefaults(jsonValue);
                alert(PyValue)
                // alert(PyValue.location)
                if (PyValue.value === true) {
                    alert(`✅ ${jsonValue} found!`);
                    
                } else {
                    alert(`❌ ${jsonValue} needs to be set`);
                    const updatedValue = await window.pywebview.api.chooseDefault(jsonValue);
                    alert(updatedValue)
                }
            } catch (err) {
                alert(`Error loading default:`, err);
                // create needed key, value pair
            }
        })
    }

check("whisper")
check("model")


// working
    // window.addEventListener('pywebviewready', async () => {
    //     try {
    //         // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
    //         alert("about to got to py!")
    //         const PyValue = await window.pywebview.api.loadUserDefaults("whisper");
    //         alert(PyValue)
    //         // alert("about to test!")
    //         // if (PyValue === false) {
    //         //     alert(`❌  not set or empty`);
    //         // } else {
    //         //     alert(`✅  = ${PyValue}`);
    //         // }
    //     } catch (err) {
    //         alert(`Error loading default:`, err);
    //         // create needed key, value pair
    //     }
    // })





        // window.addEventListener('pywebviewready', async () => {
        //     alert("about to try model!")
        //     try {
        //         // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
        //         alert("about to got to py!")
        //         const PyValue = await window.pywebview.api.loadUserDefaults("model");
        //         alert("about to test!")
        //         if (PyValue === false) {
        //             alert(`❌ model not set or empty`);
        //         } else {
        //             alert(`✅ model = ${PyValue}`);
        //         }
        //     } catch (err) {
        //         alert(`Error loading model default:`, err);
        //     }
        // })

        // window.addEventListener('pywebviewready', async () => {
        //     alert("about to try whisper!")
        //     try {
        //         // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
        //         alert("about to got to py!")
        //         const PyValue = await window.pywebview.api.loadUserDefaults("whisper");
        //         alert("about to test!")
        //         if (PyValue === false) {
        //             alert(`❌ whisper not set or empty`);
        //         } else {
        //             alert(`✅ whisper = ${PyValue}`);
        //         }
        //     } catch (err) {
        //         alert(`Error loading whisper default:`, err);
        //     }
        // })













    // async function loadJson(jsonValue){ 
    //     window.addEventListener('pywebviewready', async () => {

    //         alert("about to try ${!")
    //         try {
    //             // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
    //             alert("about to got to py!")
    //             const PyValue = await window.pywebview.api.loadUserDefaults(jsonValue);
    //             alert("about to test!")
    //             if (PyValue === false) {
    //                 alert(`❌ '${jsonValue}' not set or empty`);
    //             } else {
    //                 alert(`✅ '${jsonValue}' = ${PyValue}`);
    //             }
    //         } catch (err) {
    //             alert(`Error loading ${jsonValue} default:`, err);
    //         }
    //     })}
    

    // loadJson("model")
    // loadJson("whisper")




    // Try 6 
    // window.addEventListener('pywebviewready', async () => {
    //     try {
    //         // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
    //         alert("about to got to py!")
    //         const PyValue = await window.pywebview.api.loadUserDefaults(jsonValue);
    //         alert("about to test!")
    //         if (PyValue === false) {
    //             alert(`❌ '${jsonValue}' not set or empty`);
    //         } else {
    //             alert(`✅ '${jsonValue}' = ${PyValue}`);
    //         }
    //     } catch (err) {
    //         alert(`Error loading ${jsonValue} default:`, err);
    //     }
    // })




    // Try 2
    // // document.addEventListener("DOMContentLoaded", async () =>{
    // try {
    //     // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
    //     const model = await window.pywebview.api.loadUserDefaults("model");
        
    //     if (!model) {
    //         alert("❌ 'model' not set or empty");
    //     } else {
    //         alert("✅ model = " + model);
    //     }

    // } catch (err) {
    //     alert("Error loading defaults:", err);
    // }








    // window.addEventListener('pywebviewready', async () => {
    //     alert("JS ready!");
    //     try {
    //         const PyValue = await window.pywebview.api.loadUserDefaultsTest();
    //         alert("Python returned: " + PyValue);
    //     } catch (err) {
    //         alert("Error calling Python: " + err);
    //     }
    // });





    // alert("about to try!")
    // try {
    //     // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
    //     alert("about to got to py!")
    //     const PyValue = await window.pywebview.api.loadUserDefaultsTest();
    //     // const PyValue = await window.pywebview.api.loadUserDefaults(jsonValue);
    //     alert("about to test!")
    //     if (PyValue === false) {
    //         alert(`❌ model not set or empty`);
    //     } else {
    //         alert(`✅ model = ${PyValue}`);
    //     }
    // } catch (err) {
    //     alert(`Error loading model default:`, err);
    // }


    // async function loadJson(jsonValue){ 
    //     alert("about to try!")
    //     try {
    //         // const whisper = await window.pywebview.api.loadUserDefaults("whisper");
    //         alert("about to got to py!")
    //         const PyValue = await window.pywebview.api.loadUserDefaults(jsonValue);
    //         alert("about to test!")
    //         if (PyValue === false) {
    //             alert(`❌ '${jsonValue}' not set or empty`);
    //         } else {
    //             alert(`✅ '${jsonValue}' = ${PyValue}`);
    //         }
    //     } catch (err) {
    //         alert(`Error loading ${jsonValue} default:`, err);
    //     }
    // }

    // loadJson("whisper");
    // loadJson("model");



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

    function timer(elapsedTime, response) {
        var timer = document.getElementById("timer").innerHTML;
        
    }





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