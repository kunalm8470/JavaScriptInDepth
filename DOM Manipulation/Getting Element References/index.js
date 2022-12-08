'use strict';

const onDomContentLoaded = function(ev) {

    /*
        1. Get the element reference by "id" attributes
    */
   const h1Ele1 = document.getElementById('h1Ele'); // Don't write hash (#), else it will return null
   const h1Ele2 = document.querySelector('#h1Ele');

   /*
        2. Get the element reference by "class" attribute
        This will return a array-like structure (NodeList) to convert to proper array
        use spread notation or Array.prototype.from
   */
   const classEleRefs1 = Array.from(document.getElementsByClassName('commonClass')); // Don't write dot (.), else it will return null
   const classEleRefs2 = [...document.querySelectorAll('.commonClass')];

   const pTags1 = document.getElementsByTagName('p');
   const pTags2 = document.querySelectorAll('p');

   const pName1 = document.getElementsByName('pEle');
   const pName2 = document.querySelector('[name="pEle"]');

   /*
        Note:
        Use getElementBy* helper methods when we want "live references"
        Use querySelector* helper methods when we want "static references"
   */
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);

