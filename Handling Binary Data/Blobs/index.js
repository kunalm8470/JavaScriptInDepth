'use strict'

const onDomContentLoaded = function(ev) {

    const btnDownloadBlobRef = document.querySelector('#btnDownloadBlob');

    btnDownloadBlobRef.addEventListener('click', function(e) {
        const mimeType = 'text/plain';

        /*
            Blobs are nothing but abstraction over ArrayBuffer

            We will create Blobs using Blob constructor

            new Blob(blobparts[], options);

            1. Blobparts is an array
            2. options is simple javascript object
            {
                type: '<MIME type>' // How the browser will interpret the Blob,
                ending: 'transparent or native' // Default value is transparent
            }
        */
        
        /*
            A - 65
            a - 97
        */
        const helloTypedArray = new Uint8Array([72, 101, 108, 108, 111 ]);
        
        const blob = new Blob([helloTypedArray, 'world'], { type: mimeType });

        const link = document.createElement('a');

        // Name of the downloaded file
        link.download = 'blob.txt';

        // Conversion of blob to href
        // E.g: It will generate a link like this - blob:null/f340c41e-1e40-4339-8a98-8b0b99e432de (null because we have not deployed it)

        // If you use LiveServer VS code extension link will look like this - "blob:http://127.0.0.1:5500/f7f54279-b081-4f8e-827a-447bdc345082"
        /*
            'blob:https://devux.securewebserv.com/2d7bb895-ca63-4abb-9dae-9d696c3ff7f7'

            Syntax: 'blob:<HOSTNAME OF FRONT END APP>/UUID v4'
        */
        link.href = URL.createObjectURL(blob);

        // Programmatically click the generated anchor element
        link.click();

        // Cleanup to avoid memory leakage
        URL.revokeObjectURL(link.href);
    });

    const btnDownloadJSONRef = document.querySelector('#btnDownloadJSON');

    btnDownloadJSONRef.addEventListener('click', async function(e) {
        const mimeType = 'application/json';

        const blob = new Blob(["{ \"message\": \"Hello world\" }"], { type: mimeType });

        /*
            To access the internal arraybuffer we use blob.arrayBuffer();
            This will return a promise
        */
        const arrayBuffer = await blob.arrayBuffer();

        /*
            If blobs are more than 2 GB is size, browser will try to
            fit the blob in page memory which is a performance hit.

            To read it in an efficient way, we have to use streams
            Streams - Will use the iterator design pattern
        */
        // 1. Access the underlying stream of the blob
        const readableStream = blob.stream();

        // 2. Get the reader object, to iterate on
        const reader = readableStream.getReader();

        while (true) {
            const { done, value } = await reader.read();

            // If done is true, break the loop
            // Because no more data in the stream
            if (done) {
                break;
            }

            console.log('Stream data', value);
        }

        const link = document.createElement('a');

        link.download = 'blob.json';

        link.href = URL.createObjectURL(blob);

        link.click();

        URL.revokeObjectURL(link.href);
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);