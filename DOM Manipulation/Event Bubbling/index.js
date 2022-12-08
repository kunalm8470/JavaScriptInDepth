'use strict';

const onDomContentLoaded = function (ev) {

    const parentRef = document.querySelector('#parent');

    const childRef = document.querySelector('#child');

    /*
        When child event handler is called, the parent will be triggered
        automatically, this is called "Event Bubbling".
    */

    parentRef.addEventListener('click', function (ev) {
        console.log('Parent was clicked!');
    });

    childRef.addEventListener('click', function (ev) {
        console.log('Child was clicked!');
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);