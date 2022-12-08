'use strict';

const onDomContentLoaded = function (ev) {
    const inpEleRef = document.querySelector('#txtName');

    inpEleRef.addEventListener('cut', function (e) {
        const cutText = document.getSelection();
        console.log('Cut text', cutText.toString());
    });

    inpEleRef.addEventListener('copy', function (e) {
        const copiedText = document.getSelection();
        console.log('Copied text', copiedText.toString());
    });

    inpEleRef.addEventListener('paste', function (e) {
        /*
            Direct access to system clipboard from client side JavaScript
            is not allowed by browser because of security reasons.

            To access the clipboard in a safe way we can use e.clipboardData.getData('text/plain');
        */

        console.log('Pasted text', e.clipboardData.getData('text/plain'));
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
