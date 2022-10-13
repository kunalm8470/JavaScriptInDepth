'use strict';

const onDocumentLoaded = function(domContentLoadedEvent) {

    const formEleRef = document.querySelector('#frmPost');

    formEleRef.addEventListener('submit', async function (submitEvent) {
        // Avoid page reload (i.e default behaviour of form submission)
        submitEvent.preventDefault();

        // Instantiate the FormData object
        const formData = new FormData(formEleRef);

        for (const [key, value] of formData) {
            console.log(key, '=', value);
        }

        const postData = Object.fromEntries(formData);
        console.log(postData);

        // Step 1. Make the request object ready
        // new Request(URL, <options>)
        const url = 'https://jsonplaceholder.typicode.com/posts';

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST', // HTTP verb,
            headers: headers, // HTTP headers
            body: JSON.stringify(postData) // request body
        };

        const request = new Request(url, options);

        // Step 2. Do the actual API
        const response = await fetch(request);
        /* 
            {
                ok: true/false (HTTP 400-500),
                status: <STATUS_CODE> (actual status code number),
                text: function() {

                },
                json: function() {

                },
                blob: function() {

                },
                arrayBuffer: function() {

                }
            }
        */

        if (!response.ok) {
            throw new Error(`Server returned HTTP status code ${response.status}`);
        }

        /*
            Step 3. Parse the response based on Content-Type header
        */
        const responseData = await response.json();

        document.querySelector('#frmPostResult').textContent = JSON.stringify(responseData, null, 4);
    });
};


document.addEventListener('DOMContentLoaded', onDocumentLoaded);
