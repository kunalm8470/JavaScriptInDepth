'use strict';

const onDocumentLoaded = function(domContentLoadedEvent) {
    const btnRef = document.querySelector('#btnMakeXhr');
    const preRef = document.querySelector('#preApiResponse');

    const controller = new AbortController();
    const { signal } = controller;

    const onBtnClicked = async function(event) {
        const timeoutMillisecs = 1_000;

        const timerId = setTimeout(() => {
            // Abort the HTTP request from client side
            // Exception will be thrown with err.name === 'AbortController' and err.code === 20
            controller.abort();
        }, timeoutMillisecs);

        try {
            const url = 'https://jsonplaceholder.typicode.com/comments';

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const options = {
                method: 'GET', // HTTP verb,
                headers: headers, // HTTP headers,
                signal: signal // Signal will cancel the HTTP request from client side
            };

            const request = new Request(url, options);

            const response = await fetch(request);

            if (!response.ok) {
                console.error('API response: ', response.status);
                return false;
            }

            const body = await response.json();

            /*
                If the response is coming within 1 second,
                don't abort the HTTP request
            */
            clearTimeout(timerId);

            preRef.textContent = JSON.stringify(body, null, 4);
        } catch (err) {
            if (
                err.name === 'AbortError'
                && err.code === 20
            ) {
                console.error('User has timed out the request');
                return false;
            }

            console.error('Generic error', err);
        }
    };

    btnRef.addEventListener('click', onBtnClicked);
};


document.addEventListener('DOMContentLoaded', onDocumentLoaded);
