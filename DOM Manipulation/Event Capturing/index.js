'use strict';

const onDomContentLoaded = function (ev) {

    const parentRef = document.querySelector('#parent');

    const childRef = document.querySelector('#child');

    /*
        When parent event handler is called, the child will be triggered
        automatically, this is called "Event Capturing".

        Flow of control will be from top to bottom.

        And we have to set "useCapture" parameter to true.
    */
    parentRef.addEventListener('click', function (ev) {
        console.log(ev instanceof MouseEvent);
        console.log('Parent was clicked!');
    }, true);

    childRef.addEventListener('click', function (ev) {
        console.log('Child was clicked!');
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);