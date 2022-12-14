'use strict';

const onDomContentLoaded = function(ev) {
    const inpFileRef = document.querySelector('#inpFile');

    inpFileRef.addEventListener('change', function(ev) {
        const inputEle = ev.target;

        /*
            File is a subset of blob
            and it will extra properties -

            1. name (File name)
            2. lastModified (Last modified)
            3. lastModifiedDate (Last modified JS Date)
        */
        const file = inputEle.files[0];

        /*
            FileReader is used to process the file in
            client side.

            For simple files, we can process it using FileReader
            instead of making API call
        */
        const fileReader = new FileReader();

        /*
            fileReader will have the below extension methods -
            
            1. fileReader.readAsText(file);
            2. fileReader.readAsArrayBuffer(file); // Will give underlying arraybuffer
            3. fileReader.readAsDataUrl(file); // Will give base64 encoding of the file
        */
        fileReader.readAsText(file);

        fileReader.addEventListener('load', function(le) {
            const fileContents = fileReader.result;
        });

        fileReader.addEventListener('error', function(ee) {

        });
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
