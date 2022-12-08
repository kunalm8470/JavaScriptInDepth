'use strict';

const onDomContentLoaded = function (ev) {

    const div1Ref = document.querySelector('#div1');
    const div2Ref = document.querySelector('#div2');

    div1Ref.addEventListener('click', function (ev) {
        /*
            Event target will give the element where the
            event originated.
        */

        console.log(`${ev.target.id} was clicked`);
    });

    div2Ref.addEventListener('click', function (ev) {
        /*
            i. Single click + shift button in keyboard -> ev.shiftKey
            ii. Single click + alt button in keyboard -> ev.altKey
            iii. Single click + ctrl button in keyboard -> ev.ctrlKey

            iv. Single click + cmd button in keyboard -> ev.metaKey (MAC only)
        */

        if (ev.shiftKey) {
            console.log('Single click + shift button in keyboard was pressed!');
        }

        if (ev.altKey) {
            console.log('Single click + alt button in keyboard was pressed!');
        }

        if (ev.ctrlKey) {
            console.log('Single click + ctrl button in keyboard was pressed!');
        }

        /*
            event.button === 0 (Left button is clicked)
            event.button === 1 (Middle/Scroll button is clicked)
            event.button === 2 (Right button is clicked)
            event.button === 3 (Back button is clicked)
            event.button === 4 (Forward button is clicked)
        */

        console.log(`${ev.target.id} was clicked`);
    });

    div1Ref.addEventListener('dblclick', function (ev) {
        console.log(`${ev.target.id} was double clicked`);
    });

    div1Ref.addEventListener('contextmenu', function (ev) {
        console.log(`${ev.target.id} was right clicked`);
    });

    /*
        Hover in
    */
    div2Ref.addEventListener('mouseover', function (ev) {
        console.log('Inside the blue box');

        /*
            Top left is the origin

            window's co-ordinate can be obtained by event.clientX and event.clientY
            document's co-ordinate can be obtained by event.pageX and event.pageY
        */

        console.log(`Inside window's relative co-ordinate (${ev.clientX}, ${ev.clientY})`);
        console.log(`Inside document's relative co-ordinate (${ev.pageX}, ${ev.pageY})`);
    });

    /*
        Hover out
    */
    div2Ref.addEventListener('mouseout', function (ev) {
        console.log('Outside the blue box');

        console.log(`Outside window's relative co-ordinate (${ev.clientX}, ${ev.clientY})`);
        console.log(`Outside document's relative co-ordinate (${ev.pageX}, ${ev.pageY})`);
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
