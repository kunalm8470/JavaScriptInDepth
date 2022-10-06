'use strict';

const onDomContentLoaded = () => {
    const formEleRef = document.querySelector('#frmPost');

    formEleRef.addEventListener('submit', function(ev) {
        // Default behaviour of form is, the page will
        // get reloaded

        // To avoid page reload, we are preventing default behaviour
        ev.preventDefault();

        // TODO: check later
        // const submittedValues = ev.currentTarget.value;

        const postData = {
            id: document.querySelector('#id').value,
            userId: document.querySelector('#userId').value,
            title: document.querySelector('#title').value,
            body: document.querySelector('#body').value
        };

        const xhr = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/posts';

        xhr.open('POST', url, true);

        // Serialize the JS object into JSON object
        xhr.send(JSON.stringify(postData));

        xhr.addEventListener('readystatechange', function(ev) {
            if (xhr.readyState === 4 && xhr.status === 201) {
                console.log('Created');
            }

            switch (xhr.status) {
                case 400:
                    break;
                case 404:
                    break;
            }
        });

        xhr.addEventListener('error', function(ev) {
            console.error('Request failed to send from client side');
        });
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
