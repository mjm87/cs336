$( document ).ready(function() {

    $( "button" ).click( function( event ) {
        // console.log("clicked button");
        // $("<em>", {html: "no data yet..."}).appendTo("body");

        $.ajax({
            url: "/hello",
            data: {
                name: "my name is nobody"
            },
            type: "GET",
            dataType: "json"
            })
            .done(function(json) {
                console.log(json);
                $("<em>", { html: json }).appendTo("body");
            })
            .fail(function( xhr, status, errorThrown) {
                alert( "Sorry, there was a problem!" );
                console.log("We couldn't require the data from localhost. What a lousy host, right?");
            })
        //});

    });
});

