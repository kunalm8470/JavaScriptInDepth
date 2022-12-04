'use strict';

const onDomContentLoaded = function(ev) {
    console.log('Document object', document);
    console.log('Document element (HTML TAG)', document.documentElement);
    console.log('Document body (BODY TAG)', document.body);

    console.log('Body\'s first child (Either a comment tag/element tag)', document.body.firstChild);
    console.log('Body\'s last child (Either a comment tag/element tag)', document.body.lastChild);

    console.log('Body\'s first child (Element tag)', document.body.firstElementChild);
    console.log('Body\'s last child (Element tag)', document.body.lastElementChild);
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);

