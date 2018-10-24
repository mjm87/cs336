$( 'form' ).submit(function( event ) {
  event.preventDefault();

  var form = $( this );

  console.log("sending: " + form.serialize());
  $.ajax({
    type: 'POST',
    url: '/people',
    data: form.serialize(),
    dataType: 'json',
    success: function( resp ) {
      console.log( resp );
    }
  });
});