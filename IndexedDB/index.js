'use strict';

const onDomContentLoaded = function(ev) {

    const formReference = document.querySelector('#frmEmployee');
    const btnInitializeRef = document.querySelector('#btnInitialize');
    const btnShowRef = document.querySelector('#btnShowData');

    const inpNameRef = document.querySelector('#name');
    const inpEmailRef = document.querySelector('#email');
    const inpAgeRef = document.querySelector('#age');

    const btnDeleteRef = document.querySelector('#btnDeleteRef');

    const databaseName = 'EmployeesDB';
    const databaseVersion = 1;
    const objectStoreName = 'Employees';

    let db;
    let openRequest;

    const onDelete = function(employeeId) {
        openRequest = indexedDB.open(databaseName, databaseVersion);

        openRequest.addEventListener('success', function(ev) {
            db = openRequest.result;

            const transaction = db.transaction(objectStoreName, 'readwrite');

            const objectStoreRef = transaction.objectStore(objectStoreName);

            objectStoreRef.delete(employeeId);

            transaction.addEventListener('success', function(ev) {
                console.log('Employee deletion was successful!', ev);
            });

            transaction.addEventListener('error', function(ev) {
                console.error('Employee deletion failed!', ev);
            });
        });
    };

    const onFormSubmitted = function(ev) {
        const employeeObj = {
            id: `EMP-${Date.now()}`,
            name: inpNameRef.value,
            email: inpEmailRef.value,
            age: inpAgeRef.value
        };

        /*
            2 ways to add values in IndexedDB
            1. put -> Replace the value of the key directly.
            2. add -> if value is not there, it will add. Else it will throw "ConstraintError"
        */

        openRequest = indexedDB.open(databaseName, databaseVersion);

        openRequest.addEventListener('success', function(ev){
            db = openRequest.result;

            // Create a transaction
            const transaction = db.transaction(objectStoreName, 'readwrite');

            // Get the reference to the object store
            const objectStore = transaction.objectStore(objectStoreName);

            // Add the value in object store
            objectStore.add(employeeObj);

            /*
                Listen to these 3 events -
                i. complete - success
                ii. error - failure
                iii. abort - midway tab was closed/app got hanged
            */
            transaction.addEventListener('complete', function(ev) {
                console.log('Add operation was successful!', ev);
            });

            transaction.addEventListener('error', function(ev) {
                if (ev.error.name === 'ConstraintError') {
                    // Handle the error
                }

                console.error('Add operation failed!', ev);
            });

            transaction.addEventListener('abort', function(ev) {
                console.log('Add operation failed!', ev);
            });
        });
    };

    const onPageInitialized = function(ev) {
        // 1. Open a connection to the IndexedDB
        openRequest = indexedDB.open(databaseName, databaseVersion);

        // 2. Listen to the "upgradeneeded" event
        openRequest.addEventListener('upgradeneeded', function(ev) {
            db = openRequest.result;

            // 3. Create the objectStores (Table/Collection)
            if (!db.objectStoreNames.contains(objectStoreName)) {

                // 4. Create the objectStore
                // Key path talks about the primary key to get the value uniquely.
                db.createObjectStore(objectStoreName, { 
                    keyPath: 'id'
                });
            }
        });
    };

    const onShow = function(ev) {
        /*
            Can use any of the 2 ways to get the values from IndexedDB

            1. getAll() will get all key-value pairs of the objectStore
            2. Open a cursor, read 1 value from cursor, then advance the cursor (Repeat until no records are there)
        */

        openRequest = indexedDB.open(databaseName, databaseVersion);

        // openRequest.addEventListener('success', function(ev) {
        //     db = openRequest.result;

        //     const transaction = db.transaction(objectStoreName, 'readonly');

        //     const objectStoreRef = transaction.objectStore(objectStoreName);

        //     const values = objectStoreRef.getAll();

        //     values.addEventListener('success', function(e) {
        //         const data = e.target.result;

        //         let html = '';

        //         for (const item of data) {
        //             html += '<tr>';
        //             html += '<td>' + item.name + '</td>';
        //             html += '<td>' + item.email + '</td>';
        //             html += '<td>' + item.age + '</td>';
        //             html += `<td><button id="btnDelete" class="btn btn-danger" onclick="onDelete('${item.id}')">Delete</button></td>`;
        //             html += '</tr>';
        //         }

        //         document.querySelector('#tblEmployees tbody').innerHTML = html;
        //     });

        //     debugger;
        // });

        openRequest.addEventListener('success', function(ev) {
            db = openRequest.result;

            const transaction = db.transaction(objectStoreName, 'readonly');

            const objectStoreRef = transaction.objectStore(objectStoreName);

            const cursorObj = objectStoreRef.openCursor();

            cursorObj.addEventListener('success', function(ev) {
                const cursor = cursorObj.result;

                /*
                    If cursor is a falsy value
                    then it has reached the end of iteration
                */
                if (!cursor) {
                    return;
                }

                const { key, value } = cursor;

                let html = '';
                html += '<tr>';
                html += '<td>' + value.name + '</td>';
                html += '<td>' + value.email + '</td>';
                html += '<td>' + value.age + '</td>';
                html += `<td><button id="btnDelete" class="btn btn-danger" onclick="onDelete('${value.id}')">Delete</button></td>`;
                html += '</tr>';

                document.querySelector('#tblEmployees tbody').innerHTML = html;
            });
        });
    };

    btnInitializeRef.addEventListener('click', onPageInitialized);

    formReference.addEventListener('submit', onFormSubmitted);

    btnShowRef.addEventListener('click', onShow);
};

window.addEventListener('DOMContentLoaded', onDomContentLoaded);
