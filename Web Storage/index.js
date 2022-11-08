'use strict';

const onDomContentLoaded = function(event) {

    const txtAreaWebStorageInputEleRef = document.querySelector('#txtAreaWebStorageInput');
    const btnSubmitEleRef = document.querySelector('#btnSubmit');
    const btnShowEleRef = document.querySelector('#btnShow');
    const btnResetEleRef = document.querySelector('#btnReset');
    const btnResetAllEleRef = document.querySelector('#btnResetAll');
    const preWebStorageOutputEleRef = document.querySelector('#preWebStorageOutput');

    btnSubmitEleRef.addEventListener('click', function(event) {
        const submittedValue = txtAreaWebStorageInputEleRef.value;

        localStorage.setItem('demoKey', submittedValue);
    });

    btnShowEleRef.addEventListener('click', function(event) {
        const storedValue = localStorage.getItem('demoKey');

        const totalKeys = localStorage.length;

        const preTagValue = `Total keys - ${totalKeys}\n
        Value - ${storedValue}`;

        preWebStorageOutputEleRef.innerHTML = preTagValue;
    });

    btnResetEleRef.addEventListener('click', function(event) {
        localStorage.removeItem('demoKey');
    });

    btnResetAllEleRef.addEventListener('click', function(event) {
        // Will clear all keys (Use with caution)
        localStorage.clear();
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
