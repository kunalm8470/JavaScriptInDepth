'use strict';

const onDomContentLoaded = function(event) {

    const btnCreateCookieRef = document.querySelector('#btnCreateCookie');
    const btnDeleteCookieRef = document.querySelector('#btnDeleteCookie');
    const btnGetCookieRef = document.querySelector('#btnGetCookie');

    btnCreateCookieRef.addEventListener('click', function(e) {
        setCookie('full name', 'John Doe', {
            'max-age': 3600 // max-age is always in seconds
        });
    });

    btnDeleteCookieRef.addEventListener('click', function(e) {
        deleteCookie('full name');
    });

    btnGetCookieRef.addEventListener('click', function(e) {
        const cookieValue = getCookieValue('full name');

        document.querySelector('#preCookieValue').innerHTML = cookieValue;
    });

    const setCookie = function(key, value, options = {}) {
        if (!key) {
            throw new Error('Cookie key cannot be a falsy value!');
        }

        if (!value) {
            throw new Error('Cookie value cannot be a falsy value!');
        }

        options = {
            path: '/',
            ...options
        };

        /*
        * Syntax of a cookie - 
        * key=value; option1=value1; option2=value2; ... optionN=valueN;
        */

        let cookieString = encodeURIComponent(key) + '=' + encodeURIComponent(value);

        for (const optionsKey in options) {
            // Add semi-colon as delimiter
            cookieString += '; ';

            if (options.hasOwnProperty(optionsKey)) {
                cookieString += optionsKey + '=' + options[optionsKey];
            }
        }

        // Set the cookie
        document.cookie = cookieString;
    };

    const deleteCookie = function(key) {
        // 1. Set max-age to a negative number to expire the cookie
        // 2. or expiry to a Jan 1 1970 (past date)

        setCookie(key, 'dummy value', {
            'max-age': -1
            // 'expiry': '1970-01-01T00:00:00.000Z'
        });
    };

    const getCookieValue = function(key) {
        const individualCookies = document.cookie.split('; ');

        // name=value
        const cookie = individualCookies.find((individualCookie) => individualCookie.startsWith(encodeURIComponent(key)));

        if (!cookie || !cookie.split('=') || !cookie.split('=').length) {
            throw new Error('Invalid cookie');
        }

        const [cookiekey, cookievalue] = cookie.split('=');

        return decodeURIComponent(cookievalue);
    };
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
