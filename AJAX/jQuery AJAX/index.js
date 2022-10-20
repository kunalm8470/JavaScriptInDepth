$(function() {
    const fetchComments = function() {
        const url = 'https://jsonplaceholder.typicode.com/comments';

        const deferred = $.Deferred();

        /*
            $.ajax(url, <options>)
        */
        $.ajax(url, {
            method: 'GET',
            dataType: 'json', // Content-Type header will be set to application/json
            beforeSend: function(xhr) {
                console.log('Before API call')
            },
            async: true // By default set to "true", if set to false api will be called synchronously,
            // body: JSON.stringify() -> in case of HTTP POST
        })
        .done(function(data, textStatus, jqXHR) {
            // data will be automatically deserialized to Javascript object
            // no need to JSON.parse again (If dataType is "json")

            //jqXHR.getResponseHeader('X-Custom-Header');

            return deferred.resolve(data);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            return deferred.reject(errorThrown);
        });

        return deferred.promise();
    };

    const onBtnClick = function(event) {
        /*
            const d = fetchComments(); // Can't do this because fetchComments is not synchronous
        */

        /*
            $.when will resolve the jQuery deferreds
        */
        $.when(fetchComments())
        .done(function(data) {
            $('#preApiResponse').text(JSON.stringify(data, null, 4));
        })
        .fail(function(err) {
            console.error('API failed with non success status code');
        });
    };

    $('#btnMakeXhr').click(onBtnClick);
});
