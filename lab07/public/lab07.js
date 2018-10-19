$( document ).ready(function() {

    $( "a" ).click(function( event ) {

        alert( "Thanks for visiting!" );
        event.preventDefault();

        

    });

    $("a").addClass("test");

    $( "a" ).click(function( event ) {
 
        event.preventDefault();
     
        $( this ).hide( "slow" );
     
    });

    $( "button" ).click( function( event ) {
        console.log("clicked button");
        $("<em>", {html: "no data yet..."}).appendTo("body");
    } );

});