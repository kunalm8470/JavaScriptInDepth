'use strict';

const onDomContentLoaded = function(ev) {
    const frmEmployeeRef = document.querySelector('#frmEmployee');
    const inpFirstNameRef = document.querySelector('#inpFirstName');
    const inpLastNameRef = document.querySelector('#inpLastName');
    const inpDocumentsRef = document.querySelector('#inpDocuments');

    const onFormSubmitted = async (fev) => {
        // It will prevent from reloading the page (Default behaviour)
        fev.preventDefault();

        const formData = new FormData();
        formData.append('firstName', inpFirstNameRef.value);
        formData.append('lastName', inpLastNameRef.value);

        // Append multiple files into FormData
        for (let i = 0; i < inpDocumentsRef.files.length; i++) {
            formData.append('documents', inpDocumentsRef.files[i])
        }

        const url = 'http://localhost:5166/api/Employee';

        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            console.error('Something failed in server');
            return false;
        }

        alert('Form submitted successfully!');

        frmEmployeeRef.reset();
    };

    frmEmployeeRef.addEventListener('submit', onFormSubmitted);
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
