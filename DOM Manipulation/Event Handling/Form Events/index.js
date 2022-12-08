'use strict';

const onDomContentLoaded = function (ev) {
    const formEleRef = document.querySelector('#frmUser');

    const firstNameRef = document.querySelector('#firstName');

    const genderEleRef = document.querySelector('#gender');

    firstNameRef.addEventListener('blur', function (ev) {
        const firstName = firstNameRef.value;

        if (firstName.length > 5) {
            document.querySelector('#firstNameError').innerHTML = 'First name is more than 5 chars';
            // Show the error message
            document.querySelector('#firstNameError').style.display = 'block';
        }
    });

    firstNameRef.addEventListener('focus', function (ev) {
        document.querySelector('#firstNameError').style.display = 'none';
    });

    const onChange = function (ev) {
        console.log('Selection was changed, selected value is -', genderEleRef.value);
    };

    /*
        Change event is used in dropdowns (select element)
    */
    genderEleRef.addEventListener('change', onChange);

    formEleRef.addEventListener('submit', function (ev) {
        console.log(ev instanceof SubmitEvent);

        /*
            Prevent the default behaviour of
            form submission (i.e page reload)
        */
        ev.preventDefault();

        console.log('Form was submitted');
    });
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
