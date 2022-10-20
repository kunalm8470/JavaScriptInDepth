'use strict';

const onDocumentLoaded = function(domContentLoadedEvent) {
    const btnRef = document.querySelector('#btnMakeXhr');
    const preRef = document.querySelector('#preApiResponse');

    const onBtnClicked = async function(event) {
        
        // axios.get(url, <options>)
        // axios.post(url, <options>)
        // axios.put()
        // axios.delete()

        const controller = new AbortController();
        const { signal } = controller;

        const timeoutMilliseconds = 1_000;

        const timerId = setTimeout(() => {
            controller.abort();
        }, timeoutMilliseconds);

        /*
            1. Request interceptor -

            axios.interceptors.request.use(function(options) {
                // Get the new access_token based on the refresh_token
            });

            2. Response interceptor -

            axios.interceptors.response.use(function(options) {
                // Get the new access_token based on the refresh_token
            });
        */

        try {
            const url = 'https://jsonplaceholder.typicode.com/comments';

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                signal
            };

            const response = await axios.get(url, options);
            /*
                Response object schema -

                {
                    "data": // Server response,
                    "status": // HTTP status code
                    "statusText": // Textual representation of status code,
                    "headers": // Response headers,
                    "config": // same object as line 16,
                    "request": // Actual request what we sent
                }
            */

            clearTimeout(timerId);

            preRef.innerHTML = JSON.stringify(response.data, null, 4); 
        } catch (err) {

            /*
                If err.response property truthy value or not ?
                If yes, then server has sent non success status code

                HTTP 400-500 (Something wrong with user request)
                HTTP 500-600 (Something broke in the server)

                400 < status code < 600
            */
            if (err.response && err.response.data) {
                console.error('Error from server - ', err.response.data);
                return false;
            }

            /*
                Check if something went wrong from front end/client side
            */
            if (err.request && err.request.data) {
                console.error('Error from client side/front end - ', err.request.data);
                return false;
            } 
        }
    };

    btnRef.addEventListener('click', onBtnClicked);
};


document.addEventListener('DOMContentLoaded', onDocumentLoaded);