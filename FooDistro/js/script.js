< script >
    let saveFile = () => {

            // Get the data from each element on the form.
            const name = document.getElementById('txtName');
            const phone = document.getElementById('txtPhone');
            const email = document.getElementById('txtEmail');
            const pulocation = document.getElementById('txtPULoc');
            const msg = document.getElementById('msg');
            const PUTime = document.getElementById('txtPUTime');
            // This variable stores all the data.
            let data =
                'Name: ' + name.value + ' \r\n ' +
                'Phone: ' + phone.value + ' \r\n ' +
                'Email: ' + email.value + ' \r\n ' +
                'PULoc: ' + pulocation.value + ' \r\n ' +
                'Message: ' + msg.value;
            'PUTime: ' + putime.value + ' \r\n ' +

                // Convert the text to BLOB.
                const textToBLOB = new Blob([data], {
                    type: 'text/plain'
                });
            const sFileName = 'formData.txt'; // The file to save the data.

            let newLink = document.createElement("a");
            newLink.download = sFileName;

            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click();
        } <
        /script>