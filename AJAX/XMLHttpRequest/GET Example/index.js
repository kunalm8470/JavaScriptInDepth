'use strict';

const onDomContentLoaded = () => {
    // Make an instance of XMLHttpRequest
    const xhr = new XMLHttpRequest();

    const httpMethod = 'GET';
    const isAsync = true;

    // Build optional query params
    const searchParams = new URLSearchParams();
    searchParams.append('_limit', 2);
    const queryParams = searchParams.toString();

    const url = `https://jsonplaceholder.typicode.com/users?${queryParams}`;

    // Open a socket, and the NIC (Network Interface Card) will send the HTTP request in next step
    xhr.open(httpMethod, url, isAsync);

    // Hit/Call the API
    xhr.send();

    /*
        This event handler will be called 4 times

        xhr.readyState: 1 - Establish the connection with Server (3 way TCP handshake, TLS handshake)
        xhr.readyState: 2 - Server will acknowledge with "Request recieved"
        xhr.readyState: 3 - Process the request
        xhr.readyState: 4 - Request will be finished, and the response will be ready.
    */
    xhr.addEventListener('readystatechange', function(ev) {
        // Log the value of readyState
        console.log(xhr.readyState);

        /*
            The server response will come in xhr.response property

            It can be of text type -> Content-Type: 'text/plain'
            It can be of XML type -> Content-Type: 'application/xml'
            It can be of Blob type -> Content-Type: 'application/octet-stream' (Generic type)
        */
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('#responseEle').innerText = xhr.response;
            return true;
        }

        // Handle for non success status codes
        switch (xhr.status) {
            case 400:
                console.error('Bad request', xhr.response);
                break;
            case 404:
                console.error('Not found', xhr.response);
                break;
        }
    });

    // Client side error handling
    xhr.addEventListener('error', function(ev) {
        console.error('XHR call failed due to', ev);
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
