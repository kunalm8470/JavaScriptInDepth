'use strict';

const onDomContentLoaded = function (ev) {

    /*
        These below will work with both physical keyboard and virtual keyboards

        Some Windows laptop will give Fn key, any events cannot be captured on this Fn key.

        Order of keyboard events in which they will be fired -

        keydown -> Will be fired when key is pressed
        keypress -> Generic event which will be fired between keydown and keyup
        keyup -> Will be fired when key is released
    */

    const inpEleRef = document.querySelector('#txtName');

    inpEleRef.addEventListener('keydown', function (e) {
        console.log(e instanceof KeyboardEvent);

        /*
            code property will give you "physical key code"

            For letters you have "Key<letter>" (KeyA, KeyB, KeyC...KeyZ)
            For digits you have "Digit<number>" (Digit0, Digit1, ... Digit9)
            Special keys ("Enter", "Backspace" and "Tab")
        */
        console.log('Event code', e.code);

        if (e.code === 'Shift' && e.key === 'A') {
            console.log('Capital A was pressed');
        }

        /*
            Actual key that was typed
        */
        console.log('Actual key', e.key);

        console.log('Inside keydown event handler');

        /*
            To listen to undo event
            In windows - ctrl + z (event.ctrlKey + event.code === 'KeyZ')
            In mac - cmd + z (event.metaKey + event.code === 'KeyZ')
        */
        if (e.code === 'KeyZ' && (e.metaKey || e.ctrlKey)) {
            console.log('Undo was pressed');
        }

        /*
            To listen to redo event
            In windows - ctrl + y (event.ctrlKey + event.code === 'KeyY')
            In mac - cmd + y (event.metaKey + event.code === 'KeyY')
        */
        if (e.code === 'KeyY' && (e.metaKey || e.ctrlKey)) {
            console.log('Redo was pressed');
        }
    });

    inpEleRef.addEventListener('keyup', function (e) {
        console.log('Inside keyup event handler');
    });

    inpEleRef.addEventListener('keypress', function (e) {
        console.log('Inside keypress event handler');
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
